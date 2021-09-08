//Kasper var her!!!!
//Mailinn var her lengst :D 
//Jostein var her egentlig ganske mye



let gradientMessage = 'blue, orange';
let gradientMental = 'blue, orange';
let gradientFysisk = 'blue, orange';
let gradientLag = 'blue, orange';

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
		else if (poengForMessages <= 3) {
			gradientMessage = 'lightgreen, yellow';
		}
		else if (poengForMessages <= 10) {
			gradientMessage = 'green, yellow';
		}
		else if (poengForMessages <= 15) {
			gradientMessage = 'darkgreen, lightgreen';
		}
		else if (poengForMessages <= 20) {
			gradientMessage = 'darkgreen, green';
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
		else if (poengForMental <= 3) {
			gradientMental = 'lightgreen, yellow';
		}
		else if (poengForMental <= 10) {
			gradientMental = 'green, yellow';
		}
		else if (poengForMental <= 15) {
			gradientMental = 'darkgreen, lightgreen';
		}
		else if (poengForMental <= 20) {
			gradientMental = 'darkgreen, green';
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
		else if (poengForFysisk <= 3) {
			gradientFysisk = 'lightgreen, yellow';
		}
		else if (poengForFysisk <= 10) {
			gradientFysisk = 'green, yellow';
		}
		else if (poengForFysisk <= 15) {
			gradientFysisk = 'darkgreen, lightgreen';
		}
		else if (poengForFysisk <= 20) {
			gradientFysisk = 'darkgreen, green';
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
		else if (poengForLag <= 3) {
			gradientLag = 'lightgreen, yellow';
		}
		else if (poengForLag <= 10) {
			gradientLag = 'green, yellow';
		}
		else if (poengForLag <= 15) {
			gradientLag = 'darkgreen, lightgreen';
		}
		else if (poengForLag <= 20) {
			gradientLag = 'darkgreen, green';
		}
	}
}

function addPoints() {
	const achievementsMap = model.data.statistikk.achievements.map((achievements) => {
		return { user: achievements.user, date: achievements.date, time: achievements.time, taskId: achievements.taskId, points: achievements.points, pointsNotAdded: achievements.pointsNotAdded, };
	});
	const instanserMap = model.data.statistikk.instanser.map((x) => {
		return x;
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
	return foundUnAddedPoints;
}


// const addpoints = () => {
// 	const search = model.data.statistikk.instanser.map((α) => {
// 		return { navn: α.navn, userName: α.userName };
// 	});
// 	const findPerson = search.find((person) => {
// 		if (person.navn == model.app.currentUser) {
// 			return person.userName
// 		} else {
// 			return false;
// 		}
// 	});
// 	return findPerson;
// }