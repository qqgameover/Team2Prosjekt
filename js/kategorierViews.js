function updateViewKategorier(pageid) {
	let html = "";
	let tasks = [];
	const taskManager = (pageid) => {
		for (let i = 0; i < model.data.taskNodes.length; i++) {
			if (model.data.taskNodes[i].parent == pageid) {
				console.log("inni if");
				tasks.push(model.data.taskNodes[i]);
				console.log(tasks);
			}
		}
	}
	console.log(tasks + "dette er tasks etter")
	taskManager(pageid);
	html = `<div id="video"></div>
			<div id=1>${tasks[0].name}</div>
			<div id=2></div>
			<div id=3></div>
    `
	return html;
}
// const example = { oogaboogs: [
// 	{navn: "ooga booga", parent: null, id: 1},
// 	{navn: "ooga booga task", parent: 1, id: 2},
// 	{navn: "ooga booga subtask", parent: 2, id: 3},]}


// for(let i = 0; i < example.oogaboogs.length; i++) {
// 	if(example.oogaboogs[i].parent == 3) {
// 		tasks.push(example.oogaboogs[i])
// 	}
// }

