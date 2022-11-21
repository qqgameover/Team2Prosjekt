//Weeeeeeee Gapi Test 
function googleView() {
	let html = ""
	html = `
	<div class="googleStuff">
        <div id="g_id_onload"
        data-client_id="733048315387-aed7a120ai0r35a4p50iakascntmd073.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
        data-itp_support="true">


        </div>
            <div class="g_id_signin" data-type="standard"></div>

    </div>    
	`
	return html;
}
