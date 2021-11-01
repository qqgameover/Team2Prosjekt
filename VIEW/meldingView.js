//Kasper :)

let leddValg = [[], [], [], []];
let mottaker = "";
let mottakerUserName = "";
let suggestions = "";
var nightmarebadbadbadd = "";
function updateViewMeldinger() {
	let html = "";
	let leddArray = [[], [], [], []];
	function ledd() {
		for (let i = 0; i < model.data.muligeMeldinger.length; i++) {
			if (model.data.muligeMeldinger[i].ledd == 0) {
				leddArray[0].push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 1) {
				leddArray[1].push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 2) {
				leddArray[2].push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 3) {
				leddArray[3].push(model.data.muligeMeldinger[i]);
			}
		}
	}
	ledd();
	html = `
	<div class="navbar navbar-expand-lg">
	<a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
	<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
	<a class="nav-item" href="#" class="previous round" onclick="goBack() ; suggestions = '' ; mottaker = '' ; mottakerUserName = '' ; 
	leddValg = [[], [], [], []]">Tilbake</a>
</div>
<div class="imgLeftm">
	<a href="https://imgbb.com/"><img id="LBildem" src="https://i.ibb.co/rwn3rbj/larvik-Kom.png" alt="larvik-Kom" border="0"></a></div>
<div class="imgRightm">
	<a href="https://imgbb.com/"><img id="lhkBildem" src="https://i.ibb.co/Sf5F7MD/lhk.png" alt="lhk" border="0"></a></div>
	<div id="top"></div> 
	<div class="containerInput">
		<label for="messageSearch">Send melding til:
			<input id="focusInput" autocomplete="off" class="form-text"
				onclick="updateView() ;
				focusMethod(this.id)"  
				oninput="suggestions = suggestionPrinter(this.value) ; 
				mottakerUserName = findUserName(this.value) ;
				mottaker = this.value ; updateView() ;
				focusMethod(this.id)" ; value = "${mottaker}"
			/>
		</label>
		<div id="suggestions">${suggestions}</div>
	</div>
	<div class="containerMessages"> `

	for (let j = 0; j < 4; j++) {
		html += `<select id="select${j}" onchange="leddValg[${j}] = this.value; updateView()" id="leddValg[${j}]" multiple>`
		for (let i = 0; i < leddArray[j].length; i++) {
			if (leddValg[j] == leddArray[j][i].text) {
				html += `<option selected value="${leddArray[j][i].text}">
					${leddArray[j][i].text}
				</option>`
			} else {
				html += `<option value="${leddArray[j][i].text}">
					${leddArray[j][i].text}
				</option>`
			}
		}
		html += `</select>`
	}

	html += `</select> 
	</div>
	</div>
	<div class="containerForFluff">
	<p id="valgtMelding">${leddValg[0]} ${leddValg[1]} ${leddValg[2]} ${leddValg[3]}</p>
	<button class="btn btn-danger btn-lg sendButton" 
		onclick="sendMessage(leddValg[0], leddValg[1], leddValg[2], leddValg[3], mottakerUserName, model.app.currentUser) ;
		 mottaker = '' ; mottakerUserName = '' ; leddValg = [[], [], [], []];
		  updateView()">
		Send melding
	</button>
	</div>
	`
	return html;
}