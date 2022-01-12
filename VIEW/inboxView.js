function updateViewInbox() {
    let html = `<div class="navbar navbar-expand-lg">
    <a class="nav-item" href="#Lederbrett" onclick="gotoLederbrett()">Lederbrett</a>
    <a class="nav-item" href="#Hjem" onclick="gotoH()">Hjem</a>
    <a class="nav-item" onclick="handleSignoutClick(event)">Logg ut</a>
    </div>
    <h1 class="display-2 d-flex justify-content-center" style="padding-top:5%; text-decoration: underline;">Inbox</h1>
    <div class="container h-100 d-flex justify-content-center mainDiv">
                <div class="jumbotron my-auto">`;
    if (model.app.inbox.length > 0) {
        const meldingData = model.app.inbox.forEach((message) => {
            html += `<div class="melding-container">
                        <h4>Fra ${message.sender}</h4>
                        <p>${message.data}</p>
                    </div>`
        })
        html += `<button onclick="deleteAll()">Merk alt som lest</div>`
        return html;
    }
    html += `<h1 class="display-3">Du har ingen nye meldinger!</h1>
                </div>
            </div>`
    return html;
}
