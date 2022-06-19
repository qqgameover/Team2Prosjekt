function updateViewMain() {
	let html = ""
	html = `

	<div class="navbar navbar-expand-lg">
		<a class="nav-item" href="#Lederbrett" onclick="getInfo(); gotoLederbrett()">Lederbrett</a>
		<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
        <a class="nav-item" onclick="gotoTeamSelector()">Velg lag</a> 
		<a class="nav-item" onclick="handleSignoutClick(event)">Logg ut
		</a>
	</div>
	<div class="container">
	<div class="imgLeft">
		<img id="larvikBilde" src="https://i.ibb.co/rwn3rbj/larvik-Kom.png" alt="larvik-Kom" border="0"></div>
	<div class="imgRight">
		<img id="lhkBilde" src="https://i.ibb.co/Sf5F7MD/lhk.png" alt="lhk" border="0"></div>
	<h1 class="headerMain mt-2">WOW</h1>
	<h1 class="subHeader mb-2">FOR HÅNDBALLSKOLEN</h1>
<div class="container">
<div class="mainGrid">
	<div style="background-image: linear-gradient(to bottom right,${gradientMental});" 
		class="grid-item" onclick="gotoKategorier(3)">Mental Styrke
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientFysisk});" 
		class="grid-item" onclick="gotoKategorier(2)">Fysisk Aktivitet
	</div>

	<div style="background-image: linear-gradient(to bottom right,${gradientLag});"
		class="grid-item" onclick="gotoKategorier(4)">Lagånd
	</div>	
</div>		
</div>	


`
return html
}
