//Kasper var her!!!!
//Mailinn var her lengst :D
//Jostein var her egentlig ganske mye

//3 poeng pr kategori på en dag. 3 Tomme slots fra start.
//cursor parking lot
//----------//
//          //
//	    //
//__________//

let gradientMessage = 'orange, yellow';

let colorM1 = 'white, white';
let colorM2 = 'white, white';
let colorM3 = 'white, white';

let gradientMental = 'orange, yellow';

let colorMs1 = 'white, white';
let colorMs2 = 'white, white';
let colorMs3 = 'white, white';

let gradientFysisk = 'orange, yellow';

let colorF1 = 'white, white';
let colorF2 = 'white, white';
let colorF3 = 'white, white';

let gradientLag = 'orange, yellow';

let colorL1 = 'white, white';
let colorL2 = 'white, white';
let colorL3 = 'white, white';

//Eksorsisten har kommet
let pointsM = 0;
let pointsF = 0;
let pointsMs = 0;
let pointsL = 0;


//Kasper fikser
function countPoints() {
	var auth2 = gapi.auth2.getAuthInstance();
	var profile = auth2.currentUser.get().getBasicProfile();
	pointsM = 0;
	pointsF = 0;
	pointsMs = 0;
	pointsL = 0;
	for (let i = 0; i < model.data.statistikk.achievements.length; i++) {
		var timeScored = model.data.statistikk.achievements[i].tid;
		if (timeScored != moment(new Date(firebase.firestore.Timestamp.now().seconds*1000)).format("DD-MM-YYYY")) continue;
		if (profile.getEmail() == model.data.statistikk.achievements[i].userName) {
			if (model.data.statistikk.achievements[i].taskId == 0) {
				pointsM++;
			} if (model.data.statistikk.achievements[i].taskId == 2) {
				pointsF++;
			} if (model.data.statistikk.achievements[i].taskId == 3) {
				pointsMs++;
			} if (model.data.statistikk.achievements[i].taskId == 4) {
				pointsL++;
			}
		}
	}
	visualNightmare(pointsM, pointsF, pointsMs, pointsL);
}

function visualNightmare(pointsM, pointsF, pointsMs, pointsL) {
	if (pointsM === 0) {
		gradientMessage = 'darkorange, yellow';
	}
	if (pointsM >= 1) {
		gradientMessage = 'lightgreen, yellow';
		colorM1 = 'green, green';
	}
	if (pointsM >= 2) {
		gradientMessage = 'green, yellow';
		colorM1 = 'green, green';
		colorM2 = 'green, green';
	}
	if (pointsM >= 3) {
		gradientMessage = 'darkgreen, yellow';
		colorM1 = 'green, green';
		colorM2 = 'green, green';
		colorM3 = 'green, green';
	}
	if (pointsMs === 0) {
		gradientMental = 'darkorange, yellow';
	}
	if (pointsMs >= 1) {
		gradientMental = 'lightgreen, yellow';
		colorMs1 = 'green, green';
	}
	if (pointsMs >= 2) {
		gradientMental = 'green, yellow';
		colorMs1 = 'green, green';
		colorMs2 = 'green, green';
	}
	if (pointsMs >= 3) {
		gradientMental = 'darkgreen, yellow';
		colorMs1 = 'green, green';
		colorMs2 = 'green, green';
		colorMs3 = 'green, green';
	}
	if (pointsF === 0) {
		gradientFysisk = 'darkorange, yellow';
	}
	if (pointsF >= 1) {
		gradientFysisk = 'lightgreen, yellow';
		colorF1 = 'green, green';
	}
	if (pointsF >= 2) {
		gradientFysisk = 'green, yellow';
		colorF1 = 'green, green';
		colorF2 = 'green, green';
	}
	if (pointsF >= 3) {
		gradientFysisk = 'darkgreen, yellow';
		colorF1 = 'green, green';
		colorF2 = 'green, green';
		colorF3 = 'green, green';
	}
	if (pointsL === 0) {
		gradientLag = 'darkorange, yellow';
	}
	if (pointsL >= 1) {
		gradientLag = 'lightgreen, yellow';
		colorL1 = 'green, green';
	}
	if (pointsL >= 2) {
		gradientLag = 'green, yellow';
		colorL1 = 'green, green';
		colorL2 = 'green, green';
	}
	if (pointsL >= 3) {
		gradientLag = 'darkgreen, yellow';
		colorL1 = 'green, green';
		colorL2 = 'green, green';
		colorL3 = 'green, green';
	}
}

function addPoints() {
	for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
		for (let j = 0; j < model.data.statistikk.achievements.length; j++) {
			if (model.data.statistikk.instanser[i].lagnavn == model.data.statistikk.achievements[j].lagnavn) {
				model.data.statistikk.instanser[i].points += model.data.statistikk.achievements[j].points;
			}
		}
	}
	console.log("dataReady");
	updateView();
}
