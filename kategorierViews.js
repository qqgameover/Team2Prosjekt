// Jostein
let pageid = "";
function updateViewKategorier() {
	let html = `<div class="parent">
						<div class="visual">
							<iframe 
								id="video"
								src="https://www.youtube.com/embed/JB-G_o9WB9E" 
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
			if (model.data.taskNodes[i].parent == pageid) {
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
		<a href="#Hjem" onclick="gotoH()">Hjem</a>
	</div>`


	return html;

}
function pagemanager(id) {
	if (id < 14) {
		pageid = id;

	}
	else {
		addpoints();
	}
	updateView();
}