//Kasper B)

function searchName(input) {
	const searchUnfilted = model.data.statistikk.instanser.map(function (α) {
		return α.navn;
	});
	const searchFiltered = searchUnfilted.filter((p) => p)
	if (input == '') {
		return [];
	}
	const reg = new RegExp(input, "i")
	return searchFiltered.filter((term) => {
		if (term.match(reg)) {
			return term;
		} else {
			return;
		}
	});
}
function suggestionPrinter(input) {
	let list = '';
	let terms = searchName(input);
	for (i = 0; i < terms.length; i++) {
		list += `<li onclick="mottaker = '${terms[i]}' ; mottakerUserName = findUserName('${terms[i]}') ; updateView()">` + terms[i] + '</li>';
	}
	return '<ul>' + list + '</ul>';
}


function sendMessage(_ledd0, _ledd1, _ledd2, _ledd3, _motakker, _avsender) {
	if (!_motakker) {
		alert("Ingen mottaker funnet");
		return;
	}
	model.data.statistikk.antallMeldinger++;
	let melding =
	{
		meldingId: model.data.statistikk.antallMeldinger,
		avsender: _avsender,
		mottaker: _motakker,
		melding: `${_ledd0} ${_ledd1} ${_ledd2} ${_ledd3}`
	}
	model.data.statistikk.meldinger.push(melding);
	model.data.statistikk.achievements.push({
		user: _avsender,
		date: new Date(),
		taskId: 0,
		subtaskId: 0,
		points: 1,
		pointsNotAdded: true,
	})
	console.log("ITS HAPPENING")
	addPoints();
}

function findUserName(searchVal) {
	const search = model.data.statistikk.instanser.map((α) => {
		return { navn: α.navn, userName: α.userName };
	});
	const searchValUppercased = searchVal.toUpperCase()
	const personNameUppercased = search.map((p) => {
		if (!p.navn) {
			return;
		} else {
			return { navn: p.navn.toUpperCase(), userName: p.userName }
		}
	})
	const filteredNames = personNameUppercased.filter((p) => p);
	const findPerson = filteredNames.find((person) => {
		if (person.navn == searchValUppercased) {
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

function focusMethod(e) {
	let element = document.getElementById(e)
	element.focus();
	var val = element.value;
	element.value = '';
	element.value = val;
}


