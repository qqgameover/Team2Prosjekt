

// Jostein

function updateViewKategorier() {
	let html = `<div class="parent">
						<div class="visual">
							<iframe width="1160" height="515" src="${model.app.currentVideo}" 
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
	}
	const buttonCreator = () => {
		for (let i = 0; i < tasks.length; i++) {
			html += `<button 	
						class="katBtn" 
						onclick="previousPageAdder(${tasks[i].id}, ${tasks[i].grandparent}, ${tasks[i].points})">
						${tasks[i].name}
					</button>`
		}
	}

	taskManager();
	buttonCreator();
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
