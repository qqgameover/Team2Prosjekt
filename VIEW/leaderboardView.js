//Mailinn og Kasper men Kasper tar mest av æren 8)
let rankingSkole = [];
let rankingKlasse = [];
let rankingIndivid = [];
let skoleRankingRows;
let klasseRankingRows;
let elevRankingRows;
function updateViewLeaderboard() {
	rankingSkole = [];
	rankingKlasse = [];
	rankingIndivid = [];
	let html = "";
	html = `
	<div class="navbar navbar-expand-lg">
	<a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
	<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
	<a class="nav-item" href="#" class="previous round" onclick="goBack()">&#8249;</a>
</div>
	<div class="tableParent ">
		<div class="leaderboard-grid">        
			<table class="leaderboardTable">
				<tr>
					<th class="thTableA">Skolenes gjennomsnitt</th>
					<th class="thTableB">Poeng</th>
				</tr>
			</table>

			<table class="leaderboardTable">
				<tr>
					<th class="thTableA">Topp 10 Klasser</th>
					<th class="thTableB">Poeng</th>
				</tr>	
			</table>

			<table class="leaderboardTable">
				<tr>
					<th class="thTableA">Top 5 elever i din klasse</th>
					<th class="thTableB">Poeng</th>
				</tr>
			</table>
		</div>
	</div>	
    
		`;

	// brukes til å sortere de leaderboardsa. systemet burde være robust nok til å fungere for x antall
	// klasse, skoler og elever.
	for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
		if (!model.data.statistikk.instanser[i].parent) {
			rankingSkole.push(model.data.statistikk.instanser[i])
			const sortedArray = rankingSkole.sort((a, b) => {
				if (a.points < b.points) return 1;
				return -1;
			});
			rankingSkole = sortedArray;

		}  if (model.app.currentUserKlasse == model.data.statistikk.instanser[i].parent) {
			rankingIndivid.push(model.data.statistikk.instanser[i]);
			const sortedArray = rankingIndivid.sort((a, b) => {
				if (a.points < b.points) return 1;
				return -1;
			})
			rankingIndivid = sortedArray;
		}
	}
	bruh();
	html += skoleRanking();
    html += `<div class="text-center">
            <h1 class="mx-5 my-4">INFO: <span>${model.app.info}</span></h1>
            </div>`
	return html;
}

function createTableRow(rankingParam, klasseRankingParam, elevRankingParam) {
	return `
	<div class="leaderboard-grid">
		<table class="leaderboardTable">
				${rankingParam}
		</table>

		<table class="leaderboardTable">
				${klasseRankingParam}
		</table>

		<table class="leaderboardTable">
			${elevRankingParam}
		</table>
	</div>
`;
}
function skoleRanking() {
	elevRankingRows = "";
	skoleRankingRows = "";
	klasseRankingRows = "";
	for (let i = 0; i < rankingSkole.length; i++) {
		skoleRankingRows +=
			`<tr>
				<td class="skole">${rankingSkole[i].skole}</td>
				<td class="skolepoeng">${rankingSkole[i].points}</td>
			</tr>`;
	}
	for (let i = 0; i < 10; i++) {
		klasseRankingRows +=
			`<tr>
				<td class="klasse">${rankingKlasse[i].klasse} - ${findClassParent(rankingKlasse[i]).skole}</td>
				<td class="klassepoeng">${rankingKlasse[i].points}</td>
			</tr>`;
	}
	for (let i = 0; i < 5; i++) {
		if (!rankingIndivid[i]) continue;
		elevRankingRows +=
			`<tr>
				<td class="elev">${rankingIndivid[i].navn}</td>
				<td class="elevpoeng">${rankingIndivid[i].points}</td>
			</tr>`;
	}
	return createTableRow(skoleRankingRows, klasseRankingRows, elevRankingRows);
}

function bruh() {
	let arr = []
	for(let i = 0; i < model.data.statistikk.instanser.length; i++) {
    	if(model.data.statistikk.instanser[i].parent != null &&
	   	model.data.statistikk.instanser[i].parent &&
       		model.data.statistikk.instanser[i].klasse) {
			arr.push(model.data.statistikk.instanser[i]);
		}
	}
	const sortedArr = arr.sort((a, b) => {
		if (a.points < b.points) return 1;
		return -1;
	})
	rankingKlasse = sortedArr;
}

function findClassParent(c) {
	let p;
	for(let i = 0; i < model.data.statistikk.instanser.length; i++) {
		if(model.data.statistikk.instanser[i].id == c.parent) {
			p = model.data.statistikk.instanser[i];
            break;
		}
	}
    console.log(p);
	return p;
}

