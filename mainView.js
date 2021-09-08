
function updateViewMain() {
	let html = `


<div class="mainGrid">
	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick="gotoMeldinger()">Meldinger</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientMental});" 
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientFysisk});" 
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientLag});"
		class="grid-item" onclick="gotoKategorier(4)">Lagånd</div>	
</div>		
	
	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		
		<a href="#" class="next round" onclick="goForward()">&#8250;</a>
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>
	</div>

`
	return html;
}

//Ikke ferdig - To Be Continued

function goBack() {
	window.history.back();
}

function goForward() {
	window.history.forward();
}

const tilbake = () => {
	if (model.app.previousPage = "kategorier") { pagemanager(model.app.previousPageId); model.app.previousPage.push(); }
	if (model.app.previousPage = "main") { updateView() }
	if (model.app.previousPage = "meldinger") { updateview() }
	if (model.app.previousPage = "leaderboard") { updateview() }
}