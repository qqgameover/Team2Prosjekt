function updateViewMain() {
	let html = ""
	html = `

	<div class="navbar navbar-expand-lg">
		<a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
        <a class="nav-item" onclick="gotoInbox()">Inbox</a> 
		<a class="nav-item" onclick="handleSignoutClick(event)">Logg ut
		</a>
	</div>
	<div class="container">
	<h1 class="headerMain mt-sm-4">WOW</h1>
	<h1 class="subHeader">I LARVIKSKOLEN</h1></div>
<div class="imgLeft">
	<a href="https://imgbb.com/"><img id="larvikBilde" src="https://i.ibb.co/rwn3rbj/larvik-Kom.png" alt="larvik-Kom" border="0"></a></div>
<div class="imgRight">
	<a href="https://imgbb.com/"><img id="lhkBilde" src="https://i.ibb.co/Sf5F7MD/lhk.png" alt="lhk" border="0"></a></div>
<div class="container">
<h3 class="totd my-sm-5">HVA VIL DU ØVE PÅ I DAG?</h3>
<div class="mainGrid">
	<div style="background-image: linear-gradient(to bottom right,${gradientMessage});"
		class="grid-item" onclick="gotoMeldinger()"> Meldinger
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
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke
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
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet
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
		class="grid-item" onclick="gotoKategorier(4)">Lagånd
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
