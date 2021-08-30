const model = {
	app: {
		currentPage: null,
		currentUser: null,
		currentTaskId: 2,

	},
	inputFields: {
		userName: null,
		password: null,
	},
	data: {
		taskNodes: [
			{ id: 1, name: 'Fysisk', parent: null, videoUrl: '' },
			{ id: 2, name: 'Sit-ups', parent: 1, videoUrl: '' },
			{ id: 3, name: 'Mental-styrke', parent: 1, videoUrl: '' },
			{ id: 4, name: '5 sit-ups', parent: 2, videoUrl: '', points: 1 },
			{ id: 5, name: '10 sit-ups', parent: 2, videoUrl: '', points: 1 },
			{ id: 6, name: '20 sit-ups', parent: 2, videoUrl: '', points: 1 },
		],
		statistikk: {
			antallMeldinger: 1,
			sendteMeldinger: [{
				avsender: "Kasper",
				mottaker: "Olga",
				innhold: "",
			}],
			instanser: [

				{ instansB: { antallPoeng: 30, antallElever: 19, instans: "larvik" } },
				{ instansC: { antallPoeng: 109, antallElever: 19, instans: "Mellomhagen ungdomsskole" } },
				{ instansG: { antallPoeng: 362, antallElever: 29, instans: "Valby Grunnskole" } },
			],
			achievements: [
				{ user: 'terje@kolderup.net', date: '2021-08-10', time: '10:23', task: 3 },
			],
			folkOgFe: [
				{
					navn: "Kasper Løvold",
					dob: 100699,
					tilhoerlighet: "Mellomhagen ungdomsskole",
					opptjentePoeng: 3006,
					epost: "kasper35@live.no"
				},
				{
					navn: "Jostein Gjessing Bay",
					dob: 110500,
					tilhoerlighet: "Bø Ungdomsskule",
					opptjentePoeng: 12,
					epost: "Jogba@live.no"
				}
			]

		},
		muligeMeldinger: [
			{ text: "du er tatt på fersken i å", ledd: 0 },
			{ text: "være støttende", ledd: 1 },
			{ text: "hjelpe andre", ledd: 1 },
			{ text: "invitere andre med", ledd: 1 },
			{ text: "spre glede", ledd: 1 },
			{ text: "lage god stemning", ledd: 1 },
			{ text: "bli kjent med nye", ledd: 1 },
			{ text: "spre god energi", ledd: 1 },
			{ text: "heie på andre", ledd: 1 },
			{ text: "være modig", ledd: 1 },
			{ text: "være modig", ledd: 1 },
			{ text: "utgjøre en positiv forskjell", ledd: 1 },
			{ text: "lytte", ledd: 1 },
			{ text: "utfordre deg selv", ledd: 1 },
			{ text: "jobbe målrettet", ledd: 1 },
			{ text: "prøve noe nytt", ledd: 1 },
			{ text: "Se nye muligheter", ledd: 1 },
			{ text: "gi kompliment", ledd: 1 },
			{ text: "være raus", ledd: 1 },
			{ text: "samarbeide godt", ledd: 1 },
			{ text: "ta ansvar", ledd: 1 },
			{ text: "oppmuntre", ledd: 1 },
			{ text: "være tålmodig", ledd: 1 },
			{ text: "vise engasjement", ledd: 1 },
			{ text: "vise respekt", ledd: 1 },
			{ text: "lære bort noe du er god på", ledd: 1 },
			{ text: "være nysgjerrig", ledd: 1 },
			{ text: "være lojal", ledd: 1 },
			{ text: "inkludere andre", ledd: 1 },
			{ text: "invitere andre med", ledd: 1 },

			{ text: "stå på", ledd: 2 },
			{ text: "fortsette akkurat sånn", ledd: 2 },
			{ text: "fortsatt være den flotte personen du er", ledd: 2 },
			{ text: "stå på videre", ledd: 2 },
			{ text: "gjerne gjøre det igjen", ledd: 2 },
			{ text: "gjenta suksessen", ledd: 2 },
			{ text: "ikke slutte med det", ledd: 2 },
			{ text: "ikke gi deg", ledd: 2 },
			{ text: "utforske enda mer", ledd: 2 },

			{ text: "du er fantastisk", ledd: 3 },
			{ text: "du er en god venn", ledd: 3 },
			{ text: "du motiverer", ledd: 3 },
			{ text: "du gjør meg glad", ledd: 3 },
			{ text: "du inspirerer", ledd: 3 },
			{ text: "du skaper trygghet", ledd: 3 },
			{ text: "du er en stjerne", ledd: 3 },
			{ text: "du går foran som et godt eksempel", ledd: 3 },
			{ text: "du er helt rå", ledd: 3 },
			{ text: "du er lett å like", ledd: 3 },
			{ text: "du er en nydelig person", ledd: 3 },
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


console.log(model.data.statistikk.folkOgFe)


function sortbyCat(kategori) {
	for (let i = 0; i < model.data.tasks.length; i++) {
		if (model.data.tasks[i].kategori == kategori) {
			viewTegnoppting.push(model.data.tasks[i])
		}
	}
}