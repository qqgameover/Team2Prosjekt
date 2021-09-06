//Kasper var her!!!!

let poengForMessages = 0;
let poengForMental = 0;
let poengForFysisk = 0;
let poengForLag = 0;

let colorMessages = 'white';
let colorMental = 'white';
let colorFysisk = 'white';
let colorLag = 'white';

function pointsCounterMessages() {

	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 0) {
			poengForMessages += model.data.statistikk.achievements[i].points
			console.log(poengForMessages)
		}
		if (poengForMessages === 0) {
			colorMessages = 'darkorange';
		}
		else if (poengForMessages <= 3) {
			colorMessages = 'orange';
		}
		else if (poengForMessages <= 10) {
			colorMessages = 'lightgreen';
		}
		else if (poengForMessages <= 15) {
			colorMessages = 'green';
		}
		else if (poengForMessages <= 20) {
			colorMessages = 'darkgreen';
		}

	}
}

function pointsCounterMental() {

	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 3) {
			poengForMental += model.data.statistikk.achievements[i].points
			console.log(poengForMental)
		}
		if (poengForMental === 0) {
			colorMental = 'darkorange';
		}
		else if (poengForMental <= 3) {
			colorMental = 'orange';
		}
		else if (poengForMental <= 10) {
			colorMental = 'lightgreen';
		}
		else if (poengForMental <= 15) {
			colorMental = 'green';
		}
		else if (poengForMental <= 20) {
			colorMental = 'darkgreen';
		}
	}
}

function pointsCounterFysisk() {

	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 2) {
			poengForMental += model.data.statistikk.achievements[i].points
			console.log(poengForpfysisk)
		}
		if (poengForFysisk === 0) {
			colorFysisk = 'darkorange';
		}
		else if (poengForFysisk <= 3) {
			colorFysisk = 'orange';
		}
		else if (poengForFysisk <= 10) {
			colorFysisk = 'lightgreen';
		}
		else if (poengForFysisk <= 15) {
			colorFysisk = 'green';
		}
		else if (poengForFysisk <= 20) {
			colorFysisk = 'darkgreen';
		}
	}
}

function pointsCounterLag() {

	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		if (model.data.statistikk.achievements[i].taskId == 4) {
			poengForMental += model.data.statistikk.achievements[i].points
			console.log(poenglag)
		}
		if (poengForLag === 0) {
			colorLag = 'darkorange';
		}
		else if (poengForLag <= 3) {
			colorLag = 'orange';
		}
		else if (poengForLag <= 10) {
			colorLag = 'lightgreen';
		}
		else if (poengForLag <= 15) {
			colorLag = 'green';
		}
		else if (poengForLag <= 20) {
			colorLag = 'darkgreen';
		}
	}
}