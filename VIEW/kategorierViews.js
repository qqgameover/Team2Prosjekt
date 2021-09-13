

// Jostein

function updateViewKategorier() {
	let html = `<div class="parent">
						<div class="visual">
				

							<iframe width="560" height="315" src="${model.app.currentVideo}" 
							frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"; fs="0";>
							</iframe>
							
						<div id="kategoriknapper">
					
	`;

	let tasks = [];
	const taskManager = () => {
		for (let i = 0; i < model.data.taskNodes.length; i++) {
			if (model.data.taskNodes[i].parent == model.app.pageId) {
				tasks.push(model.data.taskNodes[i]);
			}
		}
		for (let i = 0; i < tasks.length; i++) {
			html += `<button 	
						class="katBtn" 
						onclick="pagemanager(${tasks[i].id})">
						${tasks[i].name}
					</button>`
		}
	}
	taskManager();
	html +=
		`</div>
		 </div>
			</div>
	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>

	</div>`


	return html;

}
function pagemanager(id) {
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
		addPoints();
	}

}