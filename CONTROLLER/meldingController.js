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
	return '<div id="suggestionsList">' + list + '</div>';
}


function sendMessage(_ledd0, _ledd1, _ledd2, _ledd3, _motakker, _avsender) {
	if (!_motakker) {
		alert("Ingen mottaker funnet");
		return;
	}
	const opts = {
		method: "POST",
		mode: "no-cors",
		redirect: "follow",
		referrer: "no-referrer"
	}
	const url = `https://docs.google.com/forms/d/e/1FAIpQLSdEn9Gqb7Ie_ANQvMumGv1xidp1eqRO8PBl9y7PVeT5IKAflA/formResponse?usp=pp_url
	&entry.2113492938=${_avsender}
	&entry.940698215=${_motakker}
	&entry.1920323471=${_ledd0}
	&entry.631965518=${_ledd1}
	&entry.965267730=${_ledd2}
	&entry.1627599794=${_ledd3}
	&submit=SUBMIT`;
	model.data.statistikk.antallMeldinger++;
	const melding =
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
	return fetch(url, opts);
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

// function submit(answer) {
// 	answer = encodeURIComponent(answer)

// 	var formId = '1FAIpQLScJqX5YrRP8Q6sQsx3dCvTjwkv0byizdD2_IvJM5i2CAz-GPw'
// 	var queryString = 'formResponse?&entry.244206211=' + answer + '&submit=SUBMIT'

// 	var url 'https://docs.google.com/forms/d/e/' + id + queryString

// 	var opts = {
// 		method: "POST",
// 		mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
// 		redirect: "follow",
// 		referrer: "no-referrer"
// 	}

// 	return fetch(url, opts)
// }


