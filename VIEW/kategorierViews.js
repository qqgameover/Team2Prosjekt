

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
						class="btn btn-danger btn-lg katBtn" 
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
			<div class="navbar navbar-expand-lg">
			<a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
			<a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
			<a class="nav-item" href="#" class="previous round" onclick="goBack()">&#8249;</a>
			</a>
		</div>`


	return html;

}
