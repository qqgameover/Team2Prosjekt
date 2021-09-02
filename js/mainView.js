
function updateViewMain() {
	let html = `


<div class="mainGrid">
	<div class="grid-item" onclick="gotoMeldinger()">Meldinger </div>
	<div class="grid-item" onclick="gotoKategorier(3)">Mental Styrke </div>
	<div class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet </div>
	<div class="grid-item" onclick="gotoKategorier(4)"> Lagånd </div>	
</div>		
	
	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
	</div>

`

	return html;
}


