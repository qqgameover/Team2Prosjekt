//Kasper B)

function searchName(input) {
	const searchUnfilted = model.data.statistikk.instanser.map((a) => {
		return a;
	});
	const searchFiltered = searchUnfilted.filter((p) => p.navn)
	const reg = new RegExp(input, "i")
	return searchFiltered.filter((term) => {
		if (term.navn.match(reg) && term.parent == model.app.currentUserKlasse) {
			return term.navn;
		} else {
			return null;
		}
	});
}

function suggestionPrinter(input) {
	if (input == "") return "";
	let terms = searchName(input);
	suggestions = "";
	return makeSuggestions(terms);
}

function makeSuggestions(terms) {
	let list = '';
	for (let i = 0; i < terms.length; i++) {
		if (i > 10) continue;
		if (terms[i].parent == model.app.currentUserKlasse && terms[i].userName != model.app.currentUser) {
			list += `<li style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 15ch; border: black solid 1px;" onclick="mottaker = '${terms[i].navn}' ; mottakerUserName = findUserName('${terms[i].navn}') ; 
		suggestions = suggestionPrinter(this.value) ; styled = 'display: hidden' ; updateView()"
		>` + terms[i].navn + '</li>';
		}
	}
	if (terms == null) return "";
	if (list == '') return "";
	return '<div id="suggestionsList">' + list + '</div>';
}

function sendMessage(_ledd0, _ledd1, _ledd2, _ledd3, _motakker, _avsender) {
	var auth2 = gapi.auth2.getAuthInstance();
	var profile = auth2.currentUser.get().getBasicProfile();
	if (!auth2.isSignedIn.get()) return;
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
	sendMsg(profile.getName(), _motakker, melding.melding);
	addAch(_avsender, 0, 5, _motakker);
	gotoH();
	alert('Melding sendt!');
}

function findUserName(searchVal) {
	const search = model.data.statistikk.instanser.map((a) => {
		return { navn: a.navn, userName: a.userName };
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



