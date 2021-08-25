const model = {
	app: {
		currentPage: null,
		currentUser: null
	},
	inputFields: {
		userName: null,
		password: null,
	},
	data: {
		tasks: [{
			navn: "sit-ups",
			poeng: 1,
			kategori: "fysisk",
		},
		{
			navn: "push-ups",
			poeng: [1, 2, 5],
			antall: [5, 10, 20],
			kategori: "fysisk",
		},
		{
			navn: "Slappe av",
			poeng: [1, 2, 5],
			oppgaver: [],
			kategori: "Lagånd"
		}
		],
		statistikk: {
			antallMeldinger: 1,
			sendteMeldinger: [
				{
					meldingData: {
						avsender: "Kasper",
						mottaker: "Olga",
						innhold: "Jeg elsker deg ikke lenger!!!!1!!!2!!!",
					},
				}],
			instanser: [

				{ instansB: { antallPoeng: 30, antallElever: 19, instans: "larvik" } },
				{ instansC: { antallPoeng: 109, antallElever: 19, instans: "Mellomhagen ungdomsskole" } },
				{ instansG: { antallPoeng: 362, antallElever: 29, instans: "Valby Grunnskole" } },
			],
			folkOgFe: [
				{
					navn: "Kasper Løvold",
					dob: 100699,
					tilhoerlighet: "Mellomhagen ungdomsskole",
					opptjentePoeng: 3006,

				},
				{
					navn: "Jostein Gjessing Bay",
					dob: 1105007,
					tilhoerlighet: "Bø Ungdomsskule",
					opptjentePoeng: 12,
				}
			]

		},
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