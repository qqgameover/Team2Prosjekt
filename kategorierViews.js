// Jostein
let pageid = "";
function updateViewKategorier() {
	let html = `<div class="parent">
						<div class="visual">
							<iframe 
								id="video"
								src="${model.app.currentVideo}" 
								title="YouTube video player" frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; 
								encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
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
	taskManager(pageid);
	html +=
		`</div>
		 </div>
			</div>
	<div class="navbar">
		<a href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>

		<a href="#" class="next round" onclick="goForward()">&#8250;</a>
		<a href="#Hjem" onclick="gotoH()" class="fa fa-home"></a>
		<a href="#" class="previous round" onclick="goBack()">&#8249;</a>

	</div>`


	return html;

}
function pagemanager(id) {
	if (id < 14) {
		model.app.pageId = id;
		model.app.currentVideo = model.data.taskNodes[id - 1].videoUrl;
	}
	else {
		addpoints();
	}
	updateView();
}