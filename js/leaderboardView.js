//Mailinn

//Beste skole
//Beste klasse
//Beste lag

function updateViewLeaderboard() {
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
				<th class="thTable">Lag</th>
				<th class="thTable">Poeng</th>
			</tr>
		</table>
	</div>	
    
		`;
	for (let i = 0; i < model.data.statistikk.length; i++) {
		html += createTableRow(i)
			;
	}
	html += `

	<div class="footer"> 
	</div>

    `
	return html;
}

function createTableRow(i) {
	const topgroup = model.data.statistikk.instanser[i]; //Beste skole
	const subgroup = model.data.statistikk.instanser[i]; //Beste klasse
	const points = model.data.statistikk.instanser[i]; //Poeng

	return `
	<div class="leaderboard-grid">
		<table class="leaderboardTable">
			<tr class="trTable">
				<td class="tdLeaderboard"></td>
				<td class="tdLeaderboard">${points.anntallPoeng}</td>
			</tr>
		</table>

		<table class="leaderboardTable">
			<tr class="trTable">
				<td class="tdLeaderboard"></td>
				<td class="tdLeaderboard">${points.anntallPoeng}</td>
			</tr>	
		</table>

		<table class="leaderboardTable">
			<tr class="trTable">
				<td class="tdLeaderboard"></td>
				<td class="tdLeaderboard">${points.anntallPoeng}</td>
			</tr>	
		</table>
	</div>
`;
}