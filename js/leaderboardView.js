//Mailinn

let rankingSkole = [];
let rankingKlasse = [];
let rankingIndivid = [];
function updateViewLeaderboard() {
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
    
		`;
	for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
		if (!model.data.statistikk.instanser[i].parent) {
			rankingSkole.push(model.data.statistikk.instanser[i])
			const sortedArray = rankingSkole.sort((a, b) => {
				if (a.points < b.points) return 1;
				return -1;
			});
			console.log(sortedArray)
			rankingSkole = sortedArray;
		}
		// if (model.app.currentUser.parent == model.data.statistikk.instanser[i].id) {
		// 	rankingKlasse.push(model.data.statistikk.instanser[i]);
		// 	const sortedArray = rankingKlasse.sort((a, b) => {
		// 		if (a.points < b.points) return 1;
		// 		return -1;
		// 	})
		// 	console.log(sortedArray);
		// 	rankingKlasse = sortedArray;
		// }
		//html += createTableRow(i)
		//;
	}
	html += `

	<div class="footer"> 
	</div>

    `
	return html;
}

function createTableRow(i) {
	const topgroup = model.data.statistikk.instanser[i]; //Beste skole
	//Beste klasse i din skole	
	const subgroup = model.data.statistikk.instanser[i]; //Beste elev i din klasse
	const points = model.data.statistikk.instanser[i]; //Poeng

	return `
	<div class="leaderboard-grid">
		<table class="leaderboardTable">
			<tr class="trTable">
				<td class="tdLeaderboard">${rankingArray[0].skole}</td>
				<td class="tdLeaderboard">${rankingArray[0].points}</td>
			</tr>
		</table>

		<table class="leaderboardTable">
			<tr class="trTable">
				<td class="tdLeaderboard">${rankingArray[1].klasse}</td>
				<td class="tdLeaderboard">${rankingArray[0].points}</td>
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