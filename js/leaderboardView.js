//Mailinn

let rankingSkole = [];
let rankingKlasse = [];
let rankingIndivid = [];
let skoleRankingRows;
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
	for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
		if (!model.data.statistikk.instanser[i].parent) {
			rankingSkole.push(model.data.statistikk.instanser[i])
			const sortedArray = rankingSkole.sort((a, b) => {
				if (a.points < b.points) return 1;
				return -1;
			});
			console.log(sortedArray, 'Egget')
			rankingSkole = sortedArray;
		}
	}
	html += skoleRanking();
	return html;
}

function createTableRow(rankingParam) {
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
			<tr class="trTable">
				<td class="tdLeaderboard">${""}</td>
				<td class="tdLeaderboard">${""}</td>
			</tr>	
		</table>

		<table class="leaderboardTable">
			<tr class="trTable">
				<td class="tdLeaderboard"></td>
				<td class="tdLeaderboard"></td>
			</tr>	
		</table>
	</div>
`;
}
function skoleRanking() {
	skoleRankingRows = "";
	for (let i = 0; i < rankingSkole.length; i++) {
		skoleRankingRows += `<tr class="trTable"><td class="tdLeaderboard">${rankingSkole[i].skole}</td></tr>
		<tr class="trTable"><td class="tdLeaderboard">${rankingSkole[i].points}</td></tr>`;
	}
	return createTableRow(skoleRankingRows);
}

