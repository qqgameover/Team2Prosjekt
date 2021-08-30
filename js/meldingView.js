function updateViewMeldinger() {
	let html = "";
	let ledd0 = [];
	let ledd1 = [];
	let ledd2 = [];
	let ledd3 = [];
	const ledd = function () {
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
	html = `<div id="container"> 
	<h1>Send melding til noen!</h1>
	<select id="ledd0Select" multiple>`
	for (let i = 0; i < ledd0.length; i++) {
		html += `<option value="${ledd0[i].text}">${ledd0[i].text}</option>`
	}
	html += `</select>`
	return html;
}