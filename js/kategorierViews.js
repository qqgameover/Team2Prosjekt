// Jostein
pageid = 1;
function updateViewKategorier(pageid) {
	let html = `<iframe width="1024" height="730" src="https://www.youtube.com/embed/JB-G_o9WB9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	let tasks = [];
	const taskManager = (pageid) => {
		for (let i = 0; i < model.data.taskNodes.length; i++) {
			if (model.data.taskNodes[i].parent == pageid) {
				tasks.push(model.data.taskNodes[i]);
				console.log(tasks)
			}
		}
		for (let i = 0; i < tasks.length; i++) {
			html += `<div class=katBtn onclick="pageid(${tasks[i].id})">${tasks[i].name}</div>`

		}
	}
	taskManager(pageid);
	html +=
		`<div class="navbar">
		<a href="#Hjem" onclick="gotoH()">Hjem</a>
	</div>`

	return html;
	function pageid(id) {
		if (pageid < 14) {
			pageid = id
		}
		else {
			addpoints()
		}
		updateView();
	}
}