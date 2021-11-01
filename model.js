const model = {
	app: {
		currentPage: 'google',
		currentUser: "",
		currentName: "",
		currentUserKlasse: "",
		currentTaskId: 2,
		currentVideo: '',
		pageId: 1,
		previousPage: [],

	},
	inputFields: {
		userName: null,
		password: null,
	},

	data: {
		taskNodes: [
			{ id: 1, name: 'mainView', parent: null },
			{ id: 2, name: 'Fysisk', parent: 1, videoUrl: "https://i.ibb.co/KLgPwPJ/fysisk.png" },
			{ id: 3, name: 'Mental-styrke', parent: 1, videoUrl: "https://i.ibb.co/H27YZxv/mental-styrke.png" },
			{ id: 4, name: 'Lagaand', parent: 1, videoUrl: 'https://www.youtube-nocookie.com/embed/JB-G_o9WB9E?rel=0;showinfo=0&modestbranding=1', },
			{ id: 5, name: 'KNEBØY', parent: 2, videoUrl: 'https://www.youtube.com/embed/CzXVWOhalt4?rel=0;showinfo=0&modestbranding=1', },
			{ id: 6, name: 'UTFALL', parent: 2, videoUrl: 'https://www.youtube.com/embed/0E70G3WtJ6k?rel=0;showinfo=0&modestbranding=1', },
			{ id: 7, name: 'BURPEES', parent: 2, videoUrl: 'https://www.youtube.com/embed/Vokngk5RmZg?rel=0;showinfo=0&modestbranding=1', },
			{ id: 8, name: 'DIAGONALHEV', parent: 2, videoUrl: 'https://www.youtube.com/embed/rsr_bARHAhQ?rel=0;showinfo=0&modestbranding=1', },
			{ id: 9, name: 'TAKKNEMLIGHET', parent: 3, videoUrl: 'https://www.youtube.com/embed/4qO30SHSyAM?rel=0;showinfo=0&modestbranding=1', },
			{ id: 10, name: 'KONSENTRASJON', parent: 3, videoUrl: 'https://www.youtube.com/embed/i9MOweVJzHE?rel=0;showinfo=0&modestbranding=1', },
			{ id: 11, name: 'BLINDEBUKK', parent: 4, videoUrl: 'https://www.youtube.com/embed/ZVW6vVMAvrc?rel=0;showinfo=0&modestbranding=1', },
			{ id: 12, name: 'SPEED DATE', parent: 4, videoUrl: 'https://www.youtube.com/embed/T70W-xYtjhc?rel=0;showinfo=0&modestbranding=1', },
			{ id: 14, name: 'MAKS ANTALL REP', parent: 5, grandparent: 2, points: 5, },
			{ id: 15, name: 'SLÅ EGEN REKORD', parent: 5, grandparent: 2, points: 10, },
			{ id: 16, name: 'HEIE PÅ EN VENN', parent: 5, grandparent: 2, points: 15, },
			{ id: 17, name: 'MAKS ANTALL REP', parent: 6, grandparent: 2, points: 5, },
			{ id: 18, name: 'SLÅ EGEN REKORD', parent: 6, grandparent: 2, points: 10, },
			{ id: 19, name: 'HEIE PÅ EN VENN', parent: 6, grandparent: 2, points: 15, },
			{ id: 20, name: 'MAKS ANTALL REP', parent: 7, grandparent: 2, points: 5, },
			{ id: 21, name: 'SLÅ EGEN REKORD', parent: 7, grandparent: 2, points: 10, },
			{ id: 22, name: 'HEIE PÅ EN VENN', parent: 7, grandparent: 2, points: 15, },
			{ id: 23, name: 'MAKS ANTALL REP', parent: 8, grandparent: 2, points: 5, },
			{ id: 24, name: 'SLÅ EGEN REKORD', parent: 8, grandparent: 2, points: 10, },
			{ id: 25, name: 'HEIE PÅ EN VENN', parent: 8, grandparent: 2, points: 15 },
			{ id: 26, name: '3 TING DU ER TAKKNEMLIG FOR VED DEG SELV', parent: 9, grandparent: 3, points: 5, },
			{ id: 27, name: '3 TING DU ER TAKKNEMLIG FOR VED EN ANNEN', parent: 9, grandparent: 3, points: 10, },
			{ id: 28, name: 'SI HVORFOR DU ER TAKKNEMLIG FOR NOE', parent: 9, grandparent: 3, points: 15, },
			{ id: 29, name: 'TELLE BAKLENGS FRA 10', parent: 10, grandparent: 3, points: 5 },
			{ id: 30, name: 'TELLE BAKLENGS FRA 20', parent: 10, grandparent: 3, points: 10 },
			{ id: 31, name: 'TENKE PÅ NOEN ANDRE OG SMILE I 20 SEKUNDER', parent: 10, grandparent: 3, points: 15 },
			{ id: 32, name: 'DELTA PÅ EN AKTIVITET', parent: 11, grandparent: 4, points: 2 },
			{ id: 33, name: 'TA INITIATIV TIL AKTIVITETEN', parent: 11, grandparent: 4, points: 4 },
			{ id: 35, name: 'DELTA PÅ EN AKTIVITET', parent: 12, grandparent: 4, points: 2 },
			{ id: 36, name: 'TA INITIATIV TIL AKTIVITETEN', parent: 12, grandparent: 4, points: 4 },
		],
		statistikk: {
			antallMeldinger: 0,
			meldinger: [],
			instanser: [
				{ id: 1, skole: "UngdomsskoleA", parent: null, klasse: null, points: 0, navn: null },
				{ id: 2, klasse: "8A", parent: 1, points: 0, besteElev: "Tobias", navn: null },
				{ id: 3, parent: 2, points: 0, navn: "Gard Seim Amundrød", userName: "24amuga1305@larvikskolen.no" },
				{ id: 4, parent: 2, points: 0, navn: "Elias Bredesen", userName: "24breel2404@larvikskolen.no" },
				{ id: 5, parent: 2, points: 0, navn: "Anna Isabell Issa Chey", userName: "24chean0509@larvikskolen.no" },
				{ id: 6, parent: 2, points: 0, navn: "Åsmund Christensen", userName: "24chras1508@larvikskolen.no" },
				{ id: 7, parent: 2, points: 0, navn: "Thale Gjevestad", userName: "24gjeth0909@larvikskolen.no" },
				{ id: 8, parent: 2, points: 0, navn: "Victoria Hansen", userName: "20hanvi2703@larvikskolen.no" },
				{ id: 9, parent: 2, points: 0, navn: "Edvard Hem", userName: "24hemed1811@larvikskolen.no" },
				{ id: 10, parent: 2, points: 0, navn: "Adrian Jørgen Solheim Heum", userName: "24heuad2006@larvikskolen.no" },
				{ id: 11, parent: 2, points: 0, navn: "Emelin Johanson", userName: "24johem1909@larvikskolen.no" },
				{ id: 12, parent: 2, points: 0, navn: "Adrian Gulvik Kristiansen", userName: "24kriad1902@larvikskolen.no" },
				{ id: 13, parent: 2, points: 0, navn: "Kristoffer Lomme Lofstad", userName: "24lofkr1708@larvikskolen.no" },
				{ id: 14, parent: 2, points: 0, navn: "Leo Lønneberg", userName: "24lonle0611@larvikskolen.no" },
				{ id: 15, parent: 2, points: 0, navn: "Kamal Husain Malahifji", userName: "24makam0501@larvikskolen.no" },
				{ id: 16, parent: 2, points: 0, navn: "Sindre Berntsen Monsen", userName: "24monsi1903@larvikskolen.no" },
				{ id: 17, parent: 2, points: 0, navn: "Simen Berntsen Monsen", userName: "24mosim1903@larvikskolen.no" },
				{ id: 18, parent: 2, points: 0, navn: "Adam Piotr Nowak", userName: "24nowad3112@larvikskolen.no" },
				{ id: 19, parent: 2, points: 0, navn: "Eirik Steinsholt Olsen-Nalum", userName: "24olsei1503@larvikskolen.no" },
				{ id: 20, parent: 2, points: 0, navn: "Lucas André Omlandseter-Mathisen", userName: "24matlu1701@larvikskolen.no" },
				{ id: 21, parent: 2, points: 0, navn: "Mali-Margrethe Heyn Rotbakken", userName: "24rotma0903@larvikskolen.no" },
				{ id: 22, parent: 2, points: 0, navn: "Sara Moen Røsbek", userName: "24rossa2902@larvikskolen.no" },
				{ id: 23, parent: 2, points: 0, navn: "Jon Mathias Skjelbred Samuelsen", userName: "24samjo0504@larvikskolen.no" },
				{ id: 24, parent: 2, points: 0, navn: "Leah Nerli Skjærum", userName: "24skjle2909@larvikskolen.no" },
				{ id: 25, parent: 2, points: 0, navn: "Kaja Sletsjøe-Moe", userName: "24sleka0405@larvikskolen.no" },
				{ id: 26, parent: 2, points: 0, navn: "Kenny Tieu", userName: "24tieke0108@larvikskolen.no" },
				{ id: 27, parent: 2, points: 0, navn: "Lidya Mehari Uqbe", userName: "26uqbli0812@larvikskolen.no" },
				{ id: 28, parent: 2, points: 0, navn: "William Aarsum", userName: "24aaswi0909@larvikskolen" },
				{ id: 29, parent: 2, points: -99999, navn: "", userName: "kasper@getacademy.no" },
			],
			achievements: [],
		},
		muligeMeldinger: [
			{ text: "Du er tatt på fersken i å", ledd: 0 },
			{ text: "være støttende.", ledd: 1 },
			{ text: "hjelpe andre.", ledd: 1 },
			{ text: "invitere andre med.", ledd: 1 },
			{ text: "spre glede.", ledd: 1 },
			{ text: "lage god stemning.", ledd: 1 },
			{ text: "bli kjent med nye.", ledd: 1 },
			{ text: "spre god energi.", ledd: 1 },
			{ text: "heie på andre.", ledd: 1 },
			{ text: "være modig.", ledd: 1 },
			{ text: "utgjøre en positiv forskjell.", ledd: 1 },
			{ text: "lytte.", ledd: 1 },
			{ text: "utfordre deg selv.", ledd: 1 },
			{ text: "jobbe målrettet.", ledd: 1 },
			{ text: "prøve noe nytt.", ledd: 1 },
			{ text: "se nye muligheter.", ledd: 1 },
			{ text: "gi kompliment.", ledd: 1 },
			{ text: "være raus.", ledd: 1 },
			{ text: "samarbeide godt.", ledd: 1 },
			{ text: "ta ansvar.", ledd: 1 },
			{ text: "oppmuntre.", ledd: 1 },
			{ text: "være tålmodig.", ledd: 1 },
			{ text: "vise engasjement.", ledd: 1 },
			{ text: "vise respekt.", ledd: 1 },
			{ text: "lære bort noe du er god på.", ledd: 1 },
			{ text: "være nysgjerrig.", ledd: 1 },
			{ text: "være lojal.", ledd: 1 },
			{ text: "inkludere andre.", ledd: 1 },
			{ text: "invitere andre med.", ledd: 1 },

			{ text: "Stå på,", ledd: 2 },
			{ text: "Fortsett akkurat sånn,", ledd: 2 },
			{ text: "Fortsatt å være den flotte personen du er,", ledd: 2 },
			{ text: "Stå på videre,", ledd: 2 },
			{ text: "Gjerne gjøre det igjen,", ledd: 2 },
			{ text: "Gjenta suksessen,", ledd: 2 },
			{ text: "Ikke slutte med det,", ledd: 2 },
			{ text: "Ikke gi deg,", ledd: 2 },
			{ text: "Utforsk enda mer,", ledd: 2 },

			{ text: "du er fantastisk!", ledd: 3 },
			{ text: "du er en god venn!", ledd: 3 },
			{ text: "du motiverer!", ledd: 3 },
			{ text: "du gjør meg glad!", ledd: 3 },
			{ text: "du inspirerer!", ledd: 3 },
			{ text: "du skaper trygghet!", ledd: 3 },
			{ text: "du er en stjerne!", ledd: 3 },
			{ text: "du går foran som et godt eksempel!", ledd: 3 },
			{ text: "du er helt rå!", ledd: 3 },
			{ text: "du er lett å like!", ledd: 3 },
			{ text: "du er en nydelig person!", ledd: 3 },
		],

		meldinger: {
			utbox: {
				dineSendteMeldinger: [
					{ melding: "" }
				]
			},
		},
	}
}

async function getData() {
	try {
		for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
			model.data.statistikk.instanser[i].points = 0;
		}
		model.data.statistikk.achievements = [];
		let response = await Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQNw10gr74fMdO2wuZGzBYwBzuJsTcJZXmEP3daKXHJO1fEJy0Af-qlusaIn_kBrSrSk7BSWog-xcC7/pub?output=csv', {
			download: true,
			worker: true,
			complete: function (results) {
				const mappedData = results.data.map((e, index) => {
					if (index == 0) return;
					return { tid: e[0], userName: e[1], mottaker: e[2], taskId: parseInt(e[3]), points: parseInt(e[4]), pointsNotAdded: true }
				})
				const filterdData = mappedData.filter((e) => e)
				model.data.statistikk.achievements = filterdData;
				addPoints();
			}
		})
	} catch (e) {
		console.error(e)
	}
}
var CLIENT_ID = '<YOUR_CLIENT_ID>';
let API_KEY = 'AIzaSyDObDZWxzHqPFghxyANvxwMbwmFFGumpTM';
//{input/googleuser} => 
//brukernavn, epost, 
//setter side til main og updater viewet
function onSignIn(googleUser) {
	const profile = googleUser.getBasicProfile();
	model.app.currentName = profile.getName();
	model.app.currentUser = profile.getEmail(); // This is null if the 'email' scope is not present.
	model.app.currentPage = 'main'
	model.app.currentUserKlasse = findP();
	getData();
}
function findP() {
	var x = model.data.statistikk.instanser.find((p) => {
		if (p.userName == model.app.currentUser)
			return p.parent;
	})
	return x.parent;
}

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// Modify mail, readonly, compose and send => user must accept in order for us to access mail and send. 
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.send';

function handleClientLoad() {
	console.log("handleCLientLoad")
	gapi.load('client:auth2', initClient)
}


function appendPre(message) {
	var textContent = document.createTextNode(message + '\n');
	console.log(textContent);
}

async function initClient() {
	console.log("initclient")
	try {
		await gapi.client.init({
			apiKey: API_KEY,
			clientId: CLIENT_ID,
			discoveryDocs: DISCOVERY_DOCS,
			scope: SCOPES
		});

		// Listen for sign-in state changes.
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

		// Handle the initial sign-in state.
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		authorizeButton.onclick = handleAuthClick;
		signoutButton.onclick = handleSignoutClick;
		getData();
	} catch (error) {
		appendPre(JSON.stringify(error, null, 2));
		console.error(error)
	}
}


function updateSigninStatus(isSignedIn) {
	console.log("isSignedIn")
	// if (isSignedIn) {
	// 	getData().then(() => {
	// 		console.log("signInStatusDone");
	// 		updateView();
	// 	})
	// }
}

async function handleSignoutClick(event, googleUser) {
	const signOut = await gapi.auth2.getAuthInstance().signOut();
	await signOut, model.app.currentPage = 'google';
	model.app.currentName = ""
	model.app.currentUser = ""
	updateView();
	window.location.reload(true);
}



function checkForGmailLogin(target, element, mottaker = "") {
	console.log('onLoadCallbackFunction');
	const scope = SCOPES;
	gapi.auth.authorize(
		{
			'client_id': this.clientId,
			'scope': scope,
			'immediate': true,
			discoveryDocs: DISCOVERY_DOCS,
		}, authResult => {
			if (authResult && !authResult.error) {
				gapi.client.load('gmail', 'v1', () => this.sendEmail(target, element, mottaker));
			} else {
				console.log('Error in Load gmail', authResult.error);
			}
		});
}

function sendEmail(target, message, motakker = "") {
	const subject = 'Wishing others Well';
	const content = message;
	let mimeData = ""
	if (motakker == "") {
		mimeData = [
			`From: ${model.app.currentUser}`,
			"To: " + target,
			"Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent(subject))) + "?=",
			"MIME-Version: 1.0",
			"Content-Type: text/plain; charset=UTF-8",
			"Content-Transfer-Encoding: 7bit",
			"",
			"Du har fått en ny melding",
			"",
			content].join("\n").trim();
	} else {
		mimeData = [
			`From: ${model.app.currentUser}`,
			"To: " + target,
			"Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent(subject))) + "?=",
			"MIME-Version: 1.0",
			"Content-Type: text/plain; charset=UTF-8",
			"Content-Transfer-Encoding: 7bit",
			"",
			`Ny melding sendt til ${motakker}`,
			"",
			content].join("\n").trim();
	}
	//raw, data to latin-1/base64, avoids any special chars being removed.
	const raw = window.btoa(unescape(encodeURIComponent(mimeData))).replace(/\+/g, '-').replace(/\//g, '_');
	gapi.client.gmail.users.messages.send({
		'userId': 'me',
		'resource': {
			'raw': raw
		}
	}).execute(res => {
		console.log('Email sent', res);
		console.log('Success', res.result)
		getData();
	});
}

function addAch(_user, _kategori, _points, _motakker = "") {
	const opts = {
		method: "POST",
		mode: "no-cors",
		redirect: "follow",
		referrer: "no-referrer"
	}

	const url = `https://docs.google.com/forms/d/e/1FAIpQLSdEn9Gqb7Ie_ANQvMumGv1xidp1eqRO8PBl9y7PVeT5IKAflA/formResponse?usp=pp_url
	&entry.2113492938=${_user}
	&entry.940698215=${_motakker}
	&entry.1627599794=${_kategori}
	&entry.1541312260=${_points}
	&submit=SUBMIT`;

	return fetch(url, opts)
}