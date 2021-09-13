//Kasper var her!!!!
//Mailinn var her lengst :D
//Jostein var her egentlig ganske mye

//3 poeng pr kategori på en dag. 3 Tomme slots fra start.

let gradientMessage = 'orange, yellow';

let gradientM1 = 'white, white';
let gradientM2 = 'white, white';
let gradientM3 = 'white, white';

let gradientMental = 'orange, yellow';

let gradientMental1 = 'white, white';
let gradientMental2 = 'white, white';
let gradientMental3 = 'white, white';

let gradientFysisk = 'orange, yellow';

let gradientF1 = 'white, white';
let gradientF2 = 'white, white';
let gradientF3 = 'white, white';

let gradientLag = 'orange, yellow';

let gradientL1 = 'white, white';
let gradientL2 = 'white, white';
let gradientL3 = 'white, white';



function pointsCounterMessages() {
	let poengForMessages = 0;
	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 0) {
			poengForMessages += model.data.statistikk.achievements[i].points
			console.log(poengForMessages)
		}
		if (poengForMessages === 0) {
			gradientMessage = 'darkorange, yellow';
		}
		else if (poengForMessages <= 1) {
			gradientMessage = 'lightgreen, yellow';
			gradientM1 = 'green, green';
		}
		else if (poengForMessages <= 2) {
			gradientMessage = 'green, yellow';
			gradientM1 = 'green, green';
			gradientM2 = 'green, green';
		}
		else if (poengForMessages <= 3) {
			gradientMessage = 'darkgreen, yellow';
			gradientM1 = 'green, green';
			gradientM2 = 'green, green';
			gradientM3 = 'green, green';
		}
	}
}

function pointsCounterMental() {
	let poengForMental = 0;
	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 3) {
			poengForMental += model.data.statistikk.achievements[i].points
			console.log(poengForMental)
		}
		if (poengForMental === 0) {
			gradientMental = 'darkorange, yellow';
		}
		else if (poengForMental <= 1) {
			gradientMental = 'lightgreen, yellow';
			gradientMental1 = 'green, green';
		}
		else if (poengForMental <= 2) {
			gradientMental = 'green, yellow';
			gradientMental1 = 'green, green';
			gradientMental2 = 'green, green';
		}
		else if (poengForMental <= 3) {
			gradientMental = 'darkgreen, yellow';
			gradientMental1 = 'green, green';
			gradientMental2 = 'green, green';
			gradientMental3 = 'green, green';
		}
	}
}

function pointsCounterFysisk() {
	let poengForFysisk = 0;
	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 2) {
			poengForMental += model.data.statistikk.achievements[i].points
			console.log(poengForpfysisk)
		}
		if (poengForFysisk === 0) {
			gradientFysisk = 'darkorange, yellow';
		}
		else if (poengForFysisk <= 1) {
			gradientFysisk = 'lightgreen, yellow';
			gradientF1 = 'green, green';
		}
		else if (poengForFysisk <= 2) {
			gradientFysisk = 'green, yellow';
			gradientF1 = 'green, green';
			gradientF2 = 'green, green';
		}
		else if (poengForFysisk <= 3) {
			gradientFysisk = 'darkgreen, yellow';
			gradientF1 = 'green, green';
			gradientF2 = 'green, green';
			gradientF3 = 'green, green';
		}
	}
}

function pointsCounterLag() {
	let poengForLag = 0;
	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 4) {
			poengForMental += model.data.statistikk.achievements[i].points
			console.log(poenglag)
		}
		if (poengForLag === 0) {
			gradientLag = 'darkorange, yellow';
		}
		else if (poengForLag <= 1) {
			gradientLag = 'lightgreen, yellow';
			gradientL1 = 'green, green';
		}
		else if (poengForLag <= 2) {
			gradientLag = 'green, yellow';
			gradientL1 = 'green, green';
			gradientL2 = 'green, green';
		}
		else if (poengForLag <= 3) {
			gradientLag = 'darkgreen, yellow';
			gradientL1 = 'green, green';
			gradientL2 = 'green, green';
			gradientL3 = 'green, green';
		}
	}
}

function addPoints() {
	const achievementsMap = model.data.statistikk.achievements.map((achievements) => {
		return { user: achievements.user, date: achievements.date, time: achievements.time, taskId: achievements.taskId, points: achievements.points, pointsNotAdded: achievements.pointsNotAdded, };
	});
	const instanserMap = model.data.statistikk.instanser.map((element) => {
		return element;
	})
	const foundUnAddedPoints = achievementsMap.forEach((achievements, index) => {
		const maleGrindset = instanserMap.find((instanser, instIndex) => {
			if (instanser.navn == achievements.user && achievements.pointsNotAdded == true) {
				console.log("lets gooooo")
				model.data.statistikk.instanser[instIndex] = { id: instanser.id, parent: instanser.parent, points: instanser.points + achievements.points, navn: instanser.navn, userName: instanser.userName }
				model.data.statistikk.achievements[index] = { user: achievements.user, date: achievements.date, time: achievements.time, taskId: achievements.taskId, points: achievements.points, pointsNotAdded: false }
			}
		});
		return maleGrindset;
	});
	pointsCounterMessages();
	pointsCounterMental();
	pointsCounterLag();
	pointsCounterFysisk();
	return foundUnAddedPoints;
}