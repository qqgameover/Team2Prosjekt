

// Jostein

function updateViewKategorier() {
	let html = "";
	if (model.app.currentVideo == "https://i.ibb.co/26HtgMf/fixed-Fordel.jpg" || model.app.currentVideo == "https://i.ibb.co/VSvrB3j/gratitude.jpg") {
		html = `<div class="parent">
	<div class="visual">
		<img width="800" height="500" src="${model.app.currentVideo}"></img>
		<div class="container"><h1 class="fluffHeader">REGISTRER DIN AKTIVITET</div>
	<div id="kategoriknapper">`;
	}
	else {
		html = `<div class="parent">
						<div class="visual">
							<iframe width="1160" height="515" src="${model.app.currentVideo}" 
							frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"; fs="0";>
							</iframe>
							
							<div class="container"><h1 class="fluffHeader">REGISTRER DIN AKTIVITET</div>
						<div id="kategoriknapper">
					
	`;
	}
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
		</div>
		<div class="imgBotLeft">
			<a href="https://imgbb.com/"><img id="larvikBildeK" src="https://i.ibb.co/rwn3rbj/larvik-Kom.png" alt="larvik-Kom" border="0"></a></div>
		<div class="imgBotRight">
			<a href="https://imgbb.com/"><img id="lhkBildeK" src="https://i.ibb.co/Sf5F7MD/lhk.png" alt="lhk" border="0"></a></div>`


	return html;
}
