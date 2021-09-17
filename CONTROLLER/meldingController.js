//Kasper B)

function searchName(input) {
	const searchUnfilted = model.data.statistikk.instanser.map(function (α) {
		return α.navn;
	});
	const searchFiltered = searchUnfilted.filter((p) => p)
	const reg = new RegExp(input, "i")
	if (input == null) {
		{
			return searchFiltered;
		}
	} else {
		return searchFiltered.filter((term) => {
			if (term.match(reg)) {
				return term;
			} else {
				return;
			}
		});
	}
}

function suggestionPrinter(input) {
	let terms = searchName(input);
	suggestions = "";
	return makeSuggestions(terms);
}

function makeSuggestions(terms) {
	let list = '';
	for (i = 0; i < terms.length; i++) {
		list += `<li onclick="mottaker = '${terms[i]}' ; mottakerUserName = findUserName('${terms[i]}') ; suggestions = suggestionPrinter(this.value) ; updateView()">` + terms[i] + '</li>';
	}
	return '<div id="suggestionsList">' + list + '</div>';
}

function sendMessage(_ledd0, _ledd1, _ledd2, _ledd3, _motakker, _avsender) {
	if (!_motakker) {
		alert("Ingen mottaker funnet");
		return;
	}
	model.data.statistikk.antallMeldinger++;
	const innhold = `${_ledd0} ${_ledd1} ${_ledd2} ${_ledd3}`;
	const melding =
	{
		meldingId: model.data.statistikk.antallMeldinger,
		avsender: _avsender,
		mottaker: _motakker,
		melding: innhold,
	}
	model.data.statistikk.meldinger.push(melding);
	checkForGmailLogin(_motakker, innhold);
	addAch(_avsender, 0, 1, _motakker);
	alert('Melding sendt!');
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
	let val = element.value;
	element.value = '';
	element.value = val;
}



