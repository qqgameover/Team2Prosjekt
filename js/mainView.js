// Kenneth

function updateViewMain() {
	let html = `


<div class="mainView">
	<div class="grid-containerTop">
		<div class="grid-item" onclick="gotoKategorier()"; "pageid(3)">Mental Styrke </div>
		<div class="grid-item" onclick="gotoKategorier()"; "pageid(2)">Fysisk Aktivitet </div>
		<div class="grid-item" onclick="gotoKategorier()"; "pageid(4)"> Lagånd </div>
	</div>
	<div class="grid-containerBot">	
		<div class="grid-item" onclick="gotoMeldinger()">Meldinger </div>
		<div class="grid-item" onclick="gotoLederbrett()">Lederbrett </div> 
	</div>
</div>

`

	return html;
}


