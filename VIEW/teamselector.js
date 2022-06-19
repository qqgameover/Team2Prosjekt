function updateViewTeamSelect() {
    let teamList = model.data.statistikk.instanser;
    let html = `
    <div class="container" style="margin-top: 20vh">
        <div class="container my-5 text-center" >
            ${createTeamRows(teamList)}
        </div>
        <h2 class="text-center font-weight-bold mt-5" 
        style="text-decoration: underline; text-decoration-color: red; text-decoration-thickness: 3px;"
        >Velg hvilket lag du ønsker å registrere poeng for.</h2>
    </div>`;
    return html;
}

function createTeamRows(teamList) {
    let rows = "";
    teamList.forEach((l) => {
        rows += `<h3 style="border: 2px solid red; " onclick="setTeam('${l.lagnavn}')"> ${l.lagnavn}</h3>`
    })
    return rows;
}

function setTeam(teamName) {
    model.app.selectedTeam = teamName;
    gotoH();
}
