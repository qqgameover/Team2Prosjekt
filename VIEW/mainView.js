function updateViewMain() {
	let html = ""
	html = `

	<div class="navbar navbar-expand-lg">
		<a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
        <a class="nav-item" onclick="getMsgs() ; gotoInbox()">Inbox</a> 
		<a class="nav-item" onclick="handleSignoutClick(event)">Logg ut
		</a>
	</div>
	<div class="container">
	<img src="https://i.ibb.co/TqtZYpc/wowbg.png" 
		style="width: 75%; display: block; margin-left: auto; margin-right: auto; max-height: 25vh;">
	<div class="imgLeft">
		<img id="larvikBilde" src="https://i.ibb.co/rwn3rbj/larvik-Kom.png" alt="larvik-Kom" border="0"></div>
	<div class="imgRight">
		<img id="lhkBilde" src="https://i.ibb.co/Sf5F7MD/lhk.png" alt="lhk" border="0"></div>
	<h1 class="headerMain mt-2">WOW</h1>
	<h1 class="subHeader mb-2">I LARVIKSKOLEN</h1>
	<h6 class="text-center mt-4">Max 3 oppgaver per kategori per dag :)</h6></div>
<div class="container">
<div class="mainGrid">
	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick=${pointsM == 3 ? "" : "gotoMeldinger()"}> Meldinger
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
		class="grid-item" onclick=${pointsMs == 3 ? "" : "gotoKategorier(3)"}>Mental Styrke
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
		class="grid-item" onclick=${pointsF == 3 ? "" : "gotoKategorier(2)"}>Fysisk Aktivitet
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
		class="grid-item" onclick=${pointsL == 3 ? "" : "gotoKategorier(4)"}>Lagånd
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
<div class="text-center">
    <h1 class="mx-5">INFO: <span>${model.app.info}</span></h1>
</div>
</div>	


`
	return html
}
