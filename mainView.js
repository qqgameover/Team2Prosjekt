
function updateViewMain() {
	let html = `


<div class="mainGrid">
	<div style="background-color:${colorMessages};"
		class="grid-item" onclick="gotoMeldinger()">Meldinger</div>

	<div style="background-color:${colorMental};" 
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke</div>

	<div style="background-color:${colorFysisk};" 
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet</div>

	<div style="background-color:${colorLag};"
		class="grid-item" onclick="gotoKategorier(4)">Lagånd</div>	
</div>		
	
	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
	</div>

`

	return html;
}

