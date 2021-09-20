
function updateViewMain() {
	let html = ""
	html = `

	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>
		<a class="previous round" onclick="handleSignoutClick(event)">Logg ut
		</a>
	</div>

	<h1 class="headerMain">Gjør hverdagen skjønn med mer grønn!</h1>

<div class="mainGrid">
	

	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick="gotoMeldinger()"> Meldinger
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image:
			linear-gradient(to bottom right,${colorM1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorM2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorM3});"></div>
		</div>		
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientMental});" 
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorMs1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorMs2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorMs3});"></div>
		</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientFysisk});" 
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorF1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorF2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorF3});"></div>
		</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientLag});"
		class="grid-item" onclick="gotoKategorier(4)">Lagånd
		<div class="gridInsideAGrid">
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorL1});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorL2});"></div>
			<div id="pointsG" style="background-image: 
				linear-gradient(to bottom right,${colorL3});"></div>
		</div>
	</div>	
</div>		
	

`
	return html
}

