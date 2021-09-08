
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
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>
	</div>

`
	return html;
}

