const { text } = require("stream/consumers");

function previousPageAdder(id, kategori, point) {
	if (id < 14) {
		let pageToAdd = model.data.taskNodes[id - 1].parent;
		model.app.previousPage.push({ name: "kategorier", id: `${pageToAdd}` });
	}
	pagemanager(id, kategori, point);
}

function pagemanager(id, kategori, point) {
	if (id < 14) {
		model.app.pageId = id;
		model.app.currentVideo = model.data.taskNodes[id - 1].videoUrl;
		updateView();
	}
	else {
		addFluff(kategori, point);
	}
}

function addFluff(kategori, point) {
	let desc = addDesc()
	if (desc == null || desc == "") return
	else {
		addAch(model.app.currentUser, kategori, point, desc);
		return;
	}
}

function addDesc() {
	let text = prompt("skriv en kort beskrivelse av hva du har gjort.");
	if (text == null || text == "") {
		alert("legg til en beskrivelse for å få poeng");
		return false
	}
	return text;
}
