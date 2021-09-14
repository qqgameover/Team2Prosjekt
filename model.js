const model = {
	app: {
		currentPage: 'main',
		currentUser: "Bob",
		currentUserKlasse: 4,
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
			{ id: 2, name: 'Fysisk', parent: 1, videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0;showinfo=0&modestbranding=1;' },
			{ id: 3, name: 'Mental-styrke', parent: 1, videoUrl: 'https://www.youtube-nocookie.com/embed/JB-G_o9WB9E?rel=0;showinfo=0&modestbranding=1;' },
			{ id: 4, name: 'Lagaand', parent: 1, videoUrl: '', },
			{ id: 5, name: 'Sit-ups', parent: 2, videoUrl: '', },
			{ id: 6, name: 'Push-ups', parent: 2, videoUrl: '', },
			{ id: 7, name: 'Burpees', parent: 2, videoUrl: '', },
			{ id: 8, name: 'Mental-Styrke1', parent: 3, videoUrl: '', },
			{ id: 9, name: 'Mental-Styrke2', parent: 3, videoUrl: '', },
			{ id: 10, name: 'Mental-Styrke3', parent: 3, videoUrl: '', },
			{ id: 11, name: 'Lagaand1', parent: 4, videoUrl: '', },
			{ id: 12, name: 'Lagaand2', parent: 4, videoUrl: '', },
			{ id: 13, name: 'Lagaand3', parent: 4, videoUrl: '', },
			{ id: 14, name: '5 sit-ups', parent: 5, videoUrl: '', points: 1, },
			// { id: 50, name: '3 sit-ups', parent: 5, videoUrl: '', points: 1 },
			// { id: 51, name: '4 sit-ups', parent: 5, videoUrl: '', points: 1 },
			// { id: 52, name: '7 sit-ups', parent: 5, videoUrl: '', points: 1 },
			{ id: 15, name: '10 sit-ups', parent: 5, videoUrl: '', points: 2 },
			{ id: 16, name: '20 sit-ups', parent: 5, videoUrl: '', points: 5 },
			{ id: 17, name: '5 push-ups', parent: 6, videoUrl: '', points: 1 },
			{ id: 18, name: '10 push-ups', parent: 6, videoUrl: '', points: 2 },
			{ id: 19, name: '20 push-ups', parent: 6, videoUrl: '', points: 5 },
			{ id: 20, name: '5 Burpees', parent: 7, videoUrl: '', points: 1 },
			{ id: 21, name: '10 Burpees', parent: 7, videoUrl: '', points: 2 },
			{ id: 22, name: '20 Burpees', parent: 7, videoUrl: '', points: 5 },
			{ id: 23, name: 'Mental-Styrke1a', parent: 8, videoUrl: '', points: 1 },
			{ id: 24, name: 'Mental-Styrke1b', parent: 8, videoUrl: '', points: 2 },
			{ id: 25, name: 'Mental-Styrke1c', parent: 8, videoUrl: '', points: 5 },
			{ id: 26, name: 'Mental-Styrke2a', parent: 9, videoUrl: '', points: 1 },
			{ id: 27, name: 'Mental-Styrke2b', parent: 9, videoUrl: '', points: 2 },
			{ id: 28, name: 'Mental-Styrke2c', parent: 9, videoUrl: '', points: 5 },
			{ id: 29, name: 'Mental-Styrke3a', parent: 10, videoUrl: '', points: 1 },
			{ id: 30, name: 'Mental-Styrke3b', parent: 10, videoUrl: '', points: 2 },
			{ id: 31, name: 'Mental-Styrke3c', parent: 10, videoUrl: '', points: 5 },
			{ id: 32, name: 'Lagaand1a', parent: 11, videoUrl: '', points: 1 },
			{ id: 33, name: 'Lagaand1b', parent: 11, videoUrl: '', points: 2 },
			{ id: 34, name: 'Lagaand1c', parent: 11, videoUrl: '', points: 5 },
			{ id: 35, name: 'Lagaand2a', parent: 12, videoUrl: '', points: 1 },
			{ id: 36, name: 'Lagaand2b', parent: 12, videoUrl: '', points: 2 },
			{ id: 37, name: 'Lagaand2c', parent: 12, videoUrl: '', points: 5 },
			{ id: 38, name: 'Lagaand3a', parent: 13, videoUrl: '', points: 1 },
			{ id: 39, name: 'Lagaand3b', parent: 13, videoUrl: '', points: 2 },
			{ id: 40, name: 'Lagaand3c', parent: 13, videoUrl: '', points: 5 },
		],
		statistikk: {
			antallMeldinger: 0,
			meldinger: [],
			instanser: [
				{ id: 1, skole: "UngdomsskoleA", parent: null, klasse: null, points: 3009, navn: null },
				{ id: 2, skole: "UngdomsskoleB", parent: null, klasse: null, points: 2003, navn: null },
				{ id: 3, skole: "UngdomsskoleC", parent: null, klasse: null, points: 3119, navn: null },
				{ id: 18, klasse: "8A", parent: 1, points: 301, besteElev: "Tobias", navn: null },
				{ id: 4, klasse: "8B", parent: 1, points: 320, besteElev: "Jeanette", navn: null },
				{ id: 5, klasse: "5A", parent: 1, points: 299, besteElev: "Sharlotte", navn: null },
				{ id: 19, klasse: "5B", parent: 1, points: 285, besteElev: "Kaja", navn: null },
				{ id: 6, parent: 4, points: 55, navn: "Bob", userName: 'bobMarley@gmail.com' },
				{ id: 7, parent: 4, points: 60, navn: "Julia", userName: 'juliaElise@gmail.com' },
				{ id: 8, parent: 5, points: 67, navn: "Mari", userName: 'Mari@gmail.com' },
				{ id: 9, parent: 5, points: 44, navn: "Hanne", userName: 'Hanne@gmail.com' },
				{ id: 10, parent: 5, points: 36, navn: "Jens", userName: 'Jens@gmail.com' },
				{ id: 11, parent: 5, points: 51, navn: "Petter", userName: 'Petter@gmail.com' },
				{ id: 12, parent: 5, points: 82, navn: "Jonas", userName: 'Jonas@gmail.com' },
				{ id: 13, parent: 5, points: 56, navn: "Kari", userName: 'Kari@gmail.com' },
				{ id: 14, parent: 4, points: 63, navn: "Mette", userName: 'Mette@gmail.com' },
				{ id: 15, parent: 4, points: 99, navn: "Henriette", userName: 'Henriette@gmail.com' },
				{ id: 16, parent: 4, points: 24, navn: "Lise", userName: 'Lise@gmail.com' },
				{ id: 17, parent: 4, points: 48, navn: "Susanne", userName: 'Susannee@gmail.com' },
				{ id: 20, parent: 4, points: 55, navn: "Terje", userName: 'terje@kolderup.net' },
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
			{ text: "Se nye muligheter.", ledd: 1 },
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

getData();
async function getData() {
	try {
		model.data.statistikk.meldinger = [];
		const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQNw10gr74fMdO2wuZGzBYwBzuJsTcJZXmEP3daKXHJO1fEJy0Af-qlusaIn_kBrSrSk7BSWog-xcC7/pub?output=csv';
		let response = await axios.get(url);
		let responseToArray = await response.data.split(/(?:\\[rn]|[\r\n]+)+/g);
		const prettyfiedData = [];
		const splitData = [];
		let i, j, temporary, chunk = 1;
		for (i = 0, j = responseToArray.length; i < j; i += chunk) {
			temporary = responseToArray.slice(i, i + chunk);
			prettyfiedData.push(temporary);
		}
		for (i = 0; i < prettyfiedData.length; i++) {
			const string = prettyfiedData[i].toString()
			splitData.push(string.split(","));
		}
		const toObjects = splitData.map((data) => {
			return { tid: data[0], avsender: data[1], mottaker: data[2], ledd0: data[3], ledd1: data[4], ledd2: data[5], ledd3: data[7] }
		})
		model.data.statistikk.meldinger.push(toObjects);
	} catch (e) {
		console.log(e);
	}
}

