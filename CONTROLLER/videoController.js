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
		gotoH();
		return;
	}
}

function addDesc() {
	return true;
}
