//Kasper :)

let ledd0Valg;
let ledd1Valg;
let ledd2Valg;
let ledd3Valg;
function updateViewMeldinger() {
	let html = "";
	let ledd0 = [];
	let ledd1 = [];
	let ledd2 = [];
	let ledd3 = [];
	const ledd = () => {
		for (let i = 0; i < model.data.muligeMeldinger.length; i++) {
			if (model.data.muligeMeldinger[i].ledd == 0) {
				ledd0.push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 1) {
				ledd1.push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 2) {
				ledd2.push(model.data.muligeMeldinger[i]);
			}
			if (model.data.muligeMeldinger[i].ledd == 3) {
				ledd3.push(model.data.muligeMeldinger[i]);
			}
		}
	}
	ledd();
	html = `<div class="containerMessages"> 
	<lable for="messageSearch">Send melding til noen!</lable>
	<input type="search" id="messageSearch"/>
	<select onchange="ledd0Valg = this.value" id="ledd0Select">`
	for (let i = 0; i < ledd0.length; i++) {
		html += `<option value="${ledd0[i].text}">${ledd0[i].text}</option>`
	}
	html += `</select>
	<select onchange="ledd1Valg = this.value; updateView()" id="ledd1Select">`
	for (let i = 0; i < ledd1.length; i++) {
		if (ledd1Valg == ledd1[i].text) {
			html += `<option selected value="${ledd1[i].text}">${ledd1[i].text}</option>`
		} else {
			html += `<option value="${ledd1[i].text}">${ledd1[i].text}</option>`
		}
	}
	html += `</select>
	<select onchange="ledd2Valg = this.value; updateView()" id="ledd2Select">`
	for (let i = 0; i < ledd2.length; i++) {
		if (ledd2Valg == ledd2[i].text) {
			html += `<option selected value="${ledd2[i].text}">${ledd2[i].text}</option>`
		} else {
			html += `<option value="${ledd2[i].text}">${ledd2[i].text}</option>`
		}
	}
	html += `</select>
	<select onchange="ledd3Valg = this.value; updateView()" id="ledd2Select">`
	for (let i = 0; i < ledd3.length; i++) {
		if (ledd3Valg == ledd3[i].text) {
			html += `<option selected value="${ledd3[i].text}">${ledd3[i].text}</option>`
		} else {
			html += `<option value="${ledd3[i].text}">${ledd3[i].text}</option>`
		}
	}
	html += `</select> 
	</div>
	<div class="containerForFluff">
	<p id="valgt melding">${ledd0Valg || "Du er tatt på fersken i"} ${ledd1Valg || "..."} ${ledd2Valg || "..."} ${ledd3Valg || "..."}</p>
	</div>
	<div class="containerForFluff">
	<button onclick="sendMessage()">Send melding</button>
	</div>`

	return html;
}