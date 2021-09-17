function pagemanager(id, kategori, point) {
	if (id < 14) {
		let pageToAdd = model.data.taskNodes[id - 1].parent;
		model.app.pageId = id;
		model.app.currentVideo = model.data.taskNodes[id - 1].videoUrl;
		model.app.previousPage.push({name: "kategorier", id: `${pageToAdd}`});
		updateView();
	}
	else {
		addAch(model.app.currentUser, kategori, point);
	}

}