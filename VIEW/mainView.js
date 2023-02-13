function updateViewMain() {
	let html = ""
	html = `

	<div class="navbar navbar-expand-lg">
		<a class="nav-item" href="#Lederbrett" onclick="getInfo(); gotoLederbrett()">Lederbrett</a>
		<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
        <a class="nav-item" onclick="getMsgs() ; gotoInbox()">Inbox</a>
		<a class="nav-item" onclick="handleSignoutClick()">Logg ut
		</a>
	</div>
	<div class="container">
	<h1 class="headerMain mt-2">WOW</h1>
	<h1 class="subHeader mb-2">I LARVIKSKOLEN</h1>
	<h6 class="text-center mt-4">Max 3 oppgaver per kategori per dag :)</h6></div>
<div class="container">
<div class="mainGrid">
	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick=${pointsM >= 3 ? "" : "gotoMeldinger()"}> Meldinger
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image:
			linear-gradient(to bottom right,${colorM1});"></div>
			<div class="battery" id="pointsG" style="background-image:
			linear-gradient(to bottom right,${colorM2});"></div>
			<div class="battery" id="pointsG" style="background-image:
			linear-gradient(to bottom right,${colorM3});"></div>
		</div>		
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientMental});"
		class="grid-item" onclick=${pointsMs >= 3 ? "" : "gotoKategorier(3)"}>Mental Styrke
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorMs1});"></div>
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorMs2});"></div>
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorMs3});"></div>
	</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientFysisk});"
		class="grid-item" onclick=${pointsF >= 3 ? "" : "gotoKategorier(2)"}>Fysisk Aktivitet
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorF1});"></div>
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorF2});"></div>
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorF3});"></div>
		</div>
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientLag});"
		class="grid-item" onclick=${pointsL >= 3 ? "" : "gotoKategorier(4)"}>Lagånd
		<div class="gridInsideAGrid">
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorL1});"></div>
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorL2});"></div>
			<div class="battery" id="pointsG" style="background-image:
				linear-gradient(to bottom right,${colorL3});"></div>
		</div>
	</div>	
</div>		
</div>	

`
return html
}
