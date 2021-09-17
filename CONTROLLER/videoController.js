function pagemanager(id, kategori, point) {
	if (id == 567) {
		html = updateViewLeaderboard();
		document.getElementById("app").innerHTML = html;
	}
	else if (id == 1) {
		html = updateViewMain();
		document.getElementById("app").innerHTML = html;
	}
	else if (id < 14 && id != 1 && id != 567) {
		let pageToAdd = model.data.taskNodes[id - 1].parent;
		model.app.pageId = id;
		model.app.currentVideo = model.data.taskNodes[id - 1].videoUrl;
		model.app.previousPage.push(`pagemanager(${pageToAdd})`);
		updateView();
	}
	else {
		addAch(model.app.currentUser, kategori, point);
	}

}