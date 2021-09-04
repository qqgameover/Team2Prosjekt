//Kasper B)

function searchName(searchVal) {
	const splitNameArray = [];
	const suggestedNamesArray = [];
	const search = model.data.statistikk.instanser.map(function (α) {
		return { navn: α.navn, userName: α.userName };
	});
	function splitNameArrayFunc() {
		search.forEach((person) => {
			if (!person.navn) return;
			splitNameArray.push(person.navn.split(""));
		})
	}
	splitNameArrayFunc();

	//Vet ikke hvorfor, men dette funker jo fett.
	//Ikke rør det plz, det er turbo cursed, mvh Kasper
	const currentSearchValue = searchVal.split("");
	const findPerson = splitNameArray.forEach((name, index) => {
		name.forEach((char, index) => {
			if (currentSearchValue[index] == char) {
				if (!suggestedNamesArray.includes(name)) {
					suggestedNamesArray.push(name);
				}
			} if (suggestedNamesArray.length == 0) {
				console.log("Den er tom")
				return false;
			}
		})
	})
	const returnToArray = [];
	const returnToArrayFunc = suggestedNamesArray.forEach((name, index) => {
		returnToArray.push(name.join(""))
	})
	console.log(suggestedNamesArray)
	if (returnToArray.length > 0) {
		console.log("fant en person")
		return returnToArray;
	} else {
		console.log("false")
		return;
	}
}


function sendMessage(ledd0, ledd1, ledd2, ledd3, motakker, avsender) {
	if (!motakker) {
		alert("Ingen mottaker funnet");
		return;
	}
	model.data.statistikk.antallMeldinger++;
	model.data.statistikk.sendteMeldinger.push(
		{
			meldingId: model.data.statistikk.antallMeldinger,
			avsender: avsender,
			mottaker: motakker,
			melding: `${ledd0} ${ledd1} ${ledd2} ${ledd3}`
		});
	model.data.statistikk.achievements.push(
		{
			user: avsender,
			data: new Date(),
			task: 0,
			pointsEarned: 1,
		});

}

function findUserName(searchVal) {
	const search = model.data.statistikk.instanser.map(function (α) {
		return { navn: α.navn, userName: α.userName };
	});
	const findPerson = search.find((person) => {
		if (person.navn = searchVal) {
			return person.userName
		} else {
			return false;
		}
	})
	if (!findPerson) {
		return false;
	}
	else return findPerson.userName;
}