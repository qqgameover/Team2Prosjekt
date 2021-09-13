
function updateViewMain() {
	let html = `

	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>
	</div>

	<h1 class="headerMain">Gjør hverdagen skjønn med mere grønn!</h1>

<div class="mainGrid">
	

	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick="gotoMeldinger()"> Meldinger
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientM1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientM2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientM3});"></div>
		</div>		
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientMental});" 
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientMental1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientMental2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientMental3});"></div>
		</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientFysisk});" 
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientF1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientF2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientF3});"></div>
		</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientLag});"
		class="grid-item" onclick="gotoKategorier(4)">Lagånd
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientL1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientL2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${gradientL3});"></div>
		</div>
	</div>	
</div>		
	


`
	return html;
}

