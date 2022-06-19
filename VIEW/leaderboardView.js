//Mailinn og Kasper men Kasper tar mest av æren 8)
let rankingLag = [];
let lagRankingRows;
function updateViewLeaderboard() {
	rankingLag = [];
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
					<th class="thTableA">Lag</th>
					<th class="thTableB">Poeng</th>
				</tr>
			</table>
		</div>
	</div>	
		`;
    html = printTableRows(html);
    return html;
}

function printTableRows(_html) {
    let html = _html;
    const sortedArray = model.data.statistikk.instanser.sort((a, b) => {
        if (a.points < b.points) return 1;
        return -1;
    });
    rankingLag = sortedArray;
	html += skoleRanking();
    html += `<div class="text-center">
            <h1 class="mx-5 my-4">INFO: <span>${model.app.info}</span></h1>
            </div>`
	return html;
}

function createTableRow(rows) {
	return `
	<div class="leaderboard-grid">
		<table class="leaderboardTable">
				${rows}
		</table>
	</div>`;
}

function skoleRanking() {
	lagRankingRows = "";
	for (let i = 0; i < rankingLag.length; i++) {
		lagRankingRows +=
			`<tr>
				<td class="skole">${rankingLag[i].lagnavn}</td>
				<td class="skolepoeng">${rankingLag[i].points}</td>
			</tr>`;
	}
	return createTableRow(lagRankingRows);
}
