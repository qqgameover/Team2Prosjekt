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
					<th class="thTableA">Skole</th>
					<th class="thTableB">Poeng</th>
				</tr>
			</table>

			<table class="leaderboardTable">
				<tr>
					<th class="thTableA">Klasse</th>
					<th class="thTableB">Poeng</th>
				</tr>	
			</table>

			<table class="leaderboardTable">
				<tr>
					<th class="thTableA">Elev i din klasse</th>
					<th class="thTableB">Poeng</th>
				</tr>
			</table>
		</div>
	</div>	
    
		`;

	// brukes til å sortere de leaderboardsa. Kan systemet burde være robust nok til å fungere for x antall
	// klasse, skoler og elever, men vi tar ikke hennsyn til antall elever per klasse. Dette kan legges til


	for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
		if (!model.data.statistikk.instanser[i].parent) {
			rankingSkole.push(model.data.statistikk.instanser[i])
			const sortedArray = rankingSkole.sort((a, b) => {
				if (a.points < b.points) return 1;
				return -1;
			});
			rankingSkole = sortedArray;
		} if (model.data.statistikk.instanser[i].id
			== model.app.currentUserKlasse) {
			const parent = model.data.statistikk.instanser[i].parent;
			for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
				if (parent == model.data.statistikk.instanser[i].parent) {
					rankingKlasse.push(model.data.statistikk.instanser[i]);
				}
				const sortedArray = rankingKlasse.sort((a, b) => {
					if (a.points < b.points) return 1;
					return -1;
				});
				rankingKlasse = sortedArray;
			}


		} if (model.app.currentUserKlasse == model.data.statistikk.instanser[i].parent) {
			rankingIndivid.push(model.data.statistikk.instanser[i]);
			const sortedArray = rankingIndivid.sort((a, b) => {
				if (a.points < b.points) return 1;
				return -1;
			})
			rankingIndivid = sortedArray;
		}
	}
	html += skoleRanking();
	return html;
}

function createTableRow(rankingParam, klasseRankingParam, elevRankingParam) {
	// const topgroup = model.data.statistikk.instanser[i]; //Beste skole
	//Beste klasse i din skole	
	// const subgroup = model.data.statistikk.instanser[i]; //Beste elev i din klasse
	// const points = model.data.statistikk.instanser[i]; //Poeng

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
	for (let i = 0; i < rankingKlasse.length; i++) {
		klasseRankingRows +=
			`<tr>
				<td class="klasse">${rankingKlasse[i].klasse}</td>
				<td class="klassepoeng">${rankingKlasse[i].points}</td>
			</tr>`;
	}
	for (let i = 0; i < rankingIndivid.length; i++) {
		elevRankingRows +=
			`<tr>
				<td class="elev">${rankingIndivid[i].navn}</td>
				<td class="elevpoeng">${rankingIndivid[i].points}</td>
			</tr>`;
	}
	return createTableRow(skoleRankingRows, klasseRankingRows, elevRankingRows);
}



