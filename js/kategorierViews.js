// Jostein
function updateViewKategorier(pageid) {
	let html = `<div id="video"></div>`;
	let tasks = [];
	const taskManager = (pageid) => {
		for (let i = 0; i < model.data.taskNodes.length; i++) {
			if (model.data.taskNodes[i].parent == pageid) {
				console.log("inni if");
				tasks.push(model.data.taskNodes[i]);
			}
		}
		for (let i = 0; i < tasks.length; i++) {
			html += `<div id=${tasks[i].id} onclick="addPoints()">${tasks[i].name}</div>`
		}
	}
	taskManager(pageid);
	return html;
}