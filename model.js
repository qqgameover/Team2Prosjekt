const model = {
	app: {
		currentPage: loginPage,
		currentUser: null
	},
	inputFields: {
		userName: null,
		password: null,
	},
	pagesInfo: {
		MentalStyrke: {
			categoryUno: {
				name: "Indre fred",
				taskUno: {
					name: "Be til en ny gud",
					poeng: 1,
				},
				taskDos: {
					name: "Finn opp en ny gud",
					poeng: 2,
				},
				taskTres: {
					name: "Tving med elevene til å bli med i din overlegne religion",
					poeng: 5,
				}
			},
			categoryDos: {
				name: "Yoga",
				taskUno: {
					name: ""
				}
			},
		},
		Fysisk: {
			CategoryOne: {
				taskEin: {
					name: "5 sit-ups",
					poeng: 1,
				},
				taskSwei: {
					name: "10 sit-ups",
					poeng: 2,
				},
				taskDrei: {
					name: "20 sit-ups",
					poeng: 5,
				}
			}
		},
		Lagånd: {},
		Meldinger: {
			ledd1: [],
			ledd2: [],
			ledd3: [],
			Inbox: {

			},
			Utbox: {},
		},
	}

}
