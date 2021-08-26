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
			{ id: 3, name: '5 sit-ups', parent: 2, videoUrl: '', points: 1 },
			{ id: 4, name: '10 sit-ups', parent: 2, videoUrl: '', points: 1 },
			{ id: 5, name: '20 sit-ups', parent: 2, videoUrl: '', points: 1 },
		],
		tasks: [{
			navn: "sit-ups",
			poeng: 1,
			kategori: "fysisk",
		},
		{
			navn: "push-ups",
			poeng: [1, 2, 5],
			variasjonIoppgaven: [5, 10, 20],
			kategori: "fysisk",
		},
		{
			navn: "Slappe av",
			poeng: [1, 2, 5],
			variasjonIoppgaven: [],
			kategori: "Lagånd"
		}
		],
		statistikk: {
			antallMeldinger: 1,
			sendteMeldinger: [{
				avsender: "Kasper",
				mottaker: "Olga",
				innhold: "Jeg elsker deg ikke lenger!!!!1!!!2!!!",
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
					epost: "epost"
				},
				{
					navn: "Jostein Gjessing Bay",
					dob: 110500,
					tilhoerlighet: "Bø Ungdomsskule",
					opptjentePoeng: 12,
					epost: "epost"
				}
			]

		},
		muligeMeldinger: [
			{ text: "du er tatt på fersken i å", ledd: 0 },
			{ text: "være støttende", ledd: 1 },
			{ text: "hjelpe andre", ledd: 1 },
		],

		meldinger: {
			ledd0: ["du er tatt på fersken i å"],
			ledd1: ["være støttende", "hjelpe andre", "invitere andre med", "bli kjent med nye", "inkludere andre",
				"spre glede", "lage god stemning", "spre god energi", "heie på andre", "være modig", "utfordre deg selv",
				"utgjøre en positiv forskjell", "jobbe målrettet", "prøve noe nytt", "gi kompliment", "Se nye muligheter",
				"lytte", "ta ansvar", "være raus", "samarbeide godt", "være tålmodig", "vise respekt", "være nysgjerrig",
				"oppmuntre", "vise engasjement", "være lojal", "lære bort noe du er god på",
			],
			ledd2: ["stå på", "fortsette akkurat sånn", "fortsatt være den flotte personen du er", "stå på videre",
				"gjerne gjøre det igjen", "ikke slutte med det", "ikke gi deg", "utforske enda mer",
				"gjenta suksessen"],
			ledd3: ["du er fantastisk", "du er en god venn", "du inspirerer", "du motiverer", "du gjør meg glad",
				"du skaper trygghet", "du er en stjerne", "du er helt rå", "du er lett å like",
				"du går foran som et godt eksempel", "du er en nydelig person",],
			inbox: {
				dineMeldinger: [
					{ melding: "du er stygg og teit, ingen liker deg og du kommer til å dø alene haha" },
				]
			},
			utbox: {
				dineSendteMeldinger: [
					{ melding: "Jeg synes du er rar, og jeg tror du er adoptert" }
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