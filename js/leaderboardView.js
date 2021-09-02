//Mailinn

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
	<div class="leaderboard-grid">        
		<table class="leaderboardTable">
			<tr class="trTable">
				<th class="thTable">Skole</th>
				<th class="thTable">Poeng</th>
			</tr>
		</table>

		<table class="leaderboardTable">
			<tr class="trTable">
				<th class="thTable">Klasse</th>
				<th class="thTable">Poeng</th>
			</tr>	
		</table>

		<table class="leaderboardTable">
			<tr class="trTable">
				<th class="thTable">Elev i din klasse</th>
				<th class="thTable">Poeng</th>
			</tr>
		</table>
	</div>	

	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a href="#Hjem" onclick="gotoH()">Hjem</a>
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
			`<tr class="trTable">
				<td class="tdLeaderboard">${rankingSkole[i].skole}</td>
				<td class="tdLeaderboard">${rankingSkole[i].points}</td>
			</tr>`;
	}
	for (let i = 0; i < rankingKlasse.length; i++) {
		klasseRankingRows +=
			`<tr class="trTable">
				<td class="tdLeaderboard">${rankingKlasse[i].klasse}</td>
				<td class="tdLeaderboard">${rankingKlasse[i].points}</td>
			</tr>`;
	}
	for (let i = 0; i < rankingIndivid.length; i++) {
		elevRankingRows +=
			`<tr class="trTable">
				<td class="tdLeaderboard">${rankingIndivid[i].navn}</td>
				<td class="tdLeaderboard">${rankingIndivid[i].points}</td>
			</tr>`;
	}
	return createTableRow(skoleRankingRows, klasseRankingRows, elevRankingRows);
}



