//Kasper B)

function searchName(searchVal) {
	const search = model.data.statistikk.instanser.map(function (α) {
		return { navn: α.navn, userName: α.userName };
	});
	const findPerson = search.find(function (α) {
		if (searchVal == α.navn) {
			return α;
		} else {
			return false;
		}
	})
	if (!findPerson) {
		return;
	}
	return findPerson.userName
}

function sendMessage(ledd0, ledd1, ledd2, ledd3, motakker, avsender) {
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