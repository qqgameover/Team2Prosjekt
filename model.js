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
		mentalStyrke: {
			categoryOne: {
				name: "Indre fred",
				taskOne: {
					name: "Be til en ny gud",
					poeng: 1,
				},
				taskTwo: {
					name: "Finn opp en ny gud",
					poeng: 2,
				},
				taskThree: {
					name: "Tving med elevene til å bli med i din overlegne religion",
					poeng: 5,
				}
			},
			categoryTwo: {
				name: "",
				taskOne: {
					name: "",
					poeng: 1
				},
				taskTwo: {
					name: "",
					poeng: 2
				},
				taskThree: {
					name: "",
					poeng: 5
				}
			},
			categoryThree: {
				name: "",
				taskOne: {
					name: "",
					poeng: 1
				},
				taskTwo: {
					name: "",
					poeng: 2
				},
				taskThree: {
					name: "",
					poeng: 5
				}
			}
		},
		fysisk: {
			categoryOne: {
				taskOne: {
					name: "5 shit-ups",
					poeng: 1,
				},
				taskTwo: {
					name: "10 shit-ups",
					poeng: 2,
				},
				taskThree: {
					name: "20 shit-ups",
					poeng: 5,
				}
			},
			categoryTwo: {
				name: "",
				taskOne: {
					name: "",
					poeng: 1
				},
				taskTwo: {
					name: "",
					poeng: 2
				},
				taskThree: {
					name: "",
					poeng: 5
				}
			},
			categoryThree: {
				name: "",
				taskOne: {
					name: "",
					poeng: 1
				},
				taskTwo: {
					name: "",
					poeng: 2
				},
				taskThree: {
					name: "",
					poeng: 5
				}
			},
		},
		lagaand: {
			categoryOne: {
				taskOne: {
					name: "Banke opp Ola",
					poeng: 1,
				},
				taskTwo: {
					name: "Mobbe Ola til han har flere poeng",
					poeng: 2,
				},
				taskThree: {
					name: "Tving en lærer med på mcdonalds",
					poeng: 5,
				}
			},
			categoryTwo: {
				name: "",
				taskOne: {
					name: "",
					poeng: 1
				},
				taskTwo: {
					name: "",
					poeng: 2
				},
				taskThree: {
					name: "",
					poeng: 5
				}
			},
			categoryThree: {
				name: "",
				taskOne: {
					name: "",
					poeng: 1
				},
				taskTwo: {
					name: "",
					poeng: 2
				},
				taskThree: {
					name: "",
					poeng: 5
				}
			},
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

console.log(model.data.meldinger.utbox.dineSendteMeldinger[0].melding)


