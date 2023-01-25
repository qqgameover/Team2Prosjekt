const model = {
    app: {
        currentPage: 'google',
        currentUser: "",
        currentName: "",
        currentUserKlasse: "",
        currentTaskId: 2,
        currentVideo: '',
        pageId: 1,
        previousPage: [],
        inbox: [],
        info: ""
    },
    inputFields: {
        userName: null,
    },

    data: {
        taskNodes: [
            { id: 1, name: 'mainView', parent: null },
            { id: 2, name: 'Fysisk', parent: 1, videoUrl: "https://i.ibb.co/KLgPwPJ/fysisk.png" },
            { id: 3, name: 'Mental-styrke', parent: 1, videoUrl: "https://i.ibb.co/H27YZxv/mental-styrke.png" },
            { id: 4, name: 'Lagaand', parent: 1, videoUrl: 'https://www.youtube-nocookie.com/embed/JB-G_o9WB9E?rel=0;showinfo=0&modestbranding=1', },
            { id: 5, name: 'KNEBØY', parent: 2, videoUrl: 'https://www.youtube.com/embed/CzXVWOhalt4?rel=0;showinfo=0&modestbranding=1', },
            { id: 6, name: 'UTFALL', parent: 2, videoUrl: 'https://www.youtube.com/embed/0E70G3WtJ6k?rel=0;showinfo=0&modestbranding=1', },
            { id: 7, name: 'BURPEES', parent: 2, videoUrl: 'https://www.youtube.com/embed/Vokngk5RmZg?rel=0;showinfo=0&modestbranding=1', },
            { id: 8, name: 'DIAGONALHEV', parent: 2, videoUrl: 'https://www.youtube.com/embed/rsr_bARHAhQ?rel=0;showinfo=0&modestbranding=1', },
            { id: 9, name: 'TAKKNEMLIGHET', parent: 3, videoUrl: 'https://www.youtube.com/embed/4qO30SHSyAM?rel=0;showinfo=0&modestbranding=1', },
            { id: 10, name: 'KONSENTRASJON', parent: 3, videoUrl: 'https://www.youtube.com/embed/i9MOweVJzHE?rel=0;showinfo=0&modestbranding=1', },
            { id: 11, name: 'BLINDEBUKK', parent: 4, videoUrl: 'https://www.youtube.com/embed/ZVW6vVMAvrc?rel=0;showinfo=0&modestbranding=1', },
            { id: 12, name: 'SPEED DATE', parent: 4, videoUrl: 'https://www.youtube.com/embed/T70W-xYtjhc?rel=0;showinfo=0&modestbranding=1', },
            { id: 14, name: 'MAKS ANTALL REP', parent: 5, grandparent: 2, points: 1, },
            { id: 15, name: 'SLÅ EGEN REKORD', parent: 5, grandparent: 2, points: 1, },
            { id: 16, name: 'HEIE PÅ EN VENN', parent: 5, grandparent: 2, points: 3, },
            { id: 17, name: 'MAKS ANTALL REP', parent: 6, grandparent: 2, points: 1, },
            { id: 18, name: 'SLÅ EGEN REKORD', parent: 6, grandparent: 2, points: 1, },
            { id: 19, name: 'HEIE PÅ EN VENN', parent: 6, grandparent: 2, points: 3, },
            { id: 20, name: 'MAKS ANTALL REP', parent: 7, grandparent: 2, points: 1, },
            { id: 21, name: 'SLÅ EGEN REKORD', parent: 7, grandparent: 2, points: 1, },
            { id: 22, name: 'HEIE PÅ EN VENN', parent: 7, grandparent: 2, points: 3, },
            { id: 23, name: 'MAKS ANTALL REP', parent: 8, grandparent: 2, points: 1, },
            { id: 24, name: 'SLÅ EGEN REKORD', parent: 8, grandparent: 2, points: 1, },
            { id: 25, name: 'HEIE PÅ EN VENN', parent: 8, grandparent: 2, points: 3 },
            { id: 26, name: '3 TING DU ER TAKKNEMLIG FOR VED DEG SELV', parent: 9, grandparent: 3, points: 1, },
            { id: 27, name: '3 TING DU ER TAKKNEMLIG FOR VED EN ANNEN', parent: 9, grandparent: 3, points: 1, },
            { id: 28, name: 'SI HVORFOR DU ER TAKKNEMLIG FOR NOE', parent: 9, grandparent: 3, points: 3, },
            { id: 29, name: 'TELLE BAKLENGS FRA 10', parent: 10, grandparent: 3, points: 1 },
            { id: 30, name: 'TELLE BAKLENGS FRA 20', parent: 10, grandparent: 3, points: 1 },
            { id: 31, name: 'TENKE PÅ NOEN ANDRE OG SMILE I 20 SEKUNDER', parent: 10, grandparent: 3, points: 3 },
            { id: 32, name: 'DELTA PÅ EN AKTIVITET', parent: 11, grandparent: 4, points: 1 },
            { id: 33, name: 'TA INITIATIV TIL AKTIVITETEN', parent: 11, grandparent: 4, points: 1 },
            { id: 35, name: 'DELTA PÅ EN AKTIVITET', parent: 12, grandparent: 4, points: 1 },
            { id: 36, name: 'TA INITIATIV TIL AKTIVITETEN', parent: 12, grandparent: 4, points: 1 },
        ],
        statistikk: {
            antallMeldinger: 0,
            meldinger: [],
            instanser: [
                { id: 1, skole: "Test Skole", totalClasses: 1, parent: null, klasse: null, points: 0, navn: null },
                { id: 16, skole: "Test Skole 2", totalClasses: 1, parent: null, klasse: null, points: 0, navn: null },
                { id: 2, klasse: "Test Klasse", parent: 1, totalStudents: 3, points: 0, navn: null },
                { id: 17, klasse: "Test Klasse 2", parent: 16, totalStudents: 3, points: 0, navn: null },
                { id: 18, klasse: "Test Klasse 2", parent: 0, totalStudents: 3, points: 0, navn: null },

                //test klasse

                { id: 3, parent: 2, navn: "Marius", userName: "mariussoerlie@gmail.com" },
                { id: 4, parent: 2, navn: "Merete", userName: "merete.berdal@gmail.com" },
                { id: 5, parent: 1, navn: "Kasper", userName: "kasper@getacademy.no" },

                { id: 6, parent: 2, navn: "Martin Gustavsen", userName: "gusma0503@larvikskolen.no" },
                { id: 7, parent: 2, navn: "Preben Sandvik", userName: "sanpr2003@larvikskolen.no" },
                { id: 8, parent: 2, navn: "Kristian Lilleskaret", userName: "lilkr0410@larvikskolen.no"},
                { id: 9, parent: 2, navn: "Ida Amalie Hedegaard Steffens", userName: "steid2002@larvikskolen.no"},
                { id: 10, parent: 2, navn: "Nina Oritsland", userName: "sorini2008@larvikskolen.no"},
                { id: 11, parent: 2, navn: "Stine Nesse Langemyr", userName: "snesst1903@larvikskolen.no"},
                { id: 12, parent: 2, navn: "Sverre Diesen", userName: "sdiesv2403@larvikskolen.no"},
                { id: 13, parent: 2, navn: "Kari Thorås", userName: "THOKA2812@larvikskolen.no"},
                { id: 14, parent: 2, navn: "Linnea Evensen Pedersen", userName: "pedli0803@larvikskolen.no"},
                { id: 15, parent: 2, navn: "Øyvind Skilbred", userName: "sskioy3003@larvikskolen.no"},
            ],
            achievements: [],
        },
        muligeMeldinger: [
            { text: "Du er tatt på fersken i å", ledd: 0 },
            { text: "være støttende.", ledd: 1 },
            { text: "hjelpe andre.", ledd: 1 },
            { text: "invitere andre med.", ledd: 1 },
            { text: "spre glede.", ledd: 1 },
            { text: "lage god stemning.", ledd: 1 },
            { text: "bli kjent med nye.", ledd: 1 },
            { text: "spre god energi.", ledd: 1 },
            { text: "heie på andre.", ledd: 1 },
            { text: "være modig.", ledd: 1 },
            { text: "utgjøre en positiv forskjell.", ledd: 1 },
            { text: "lytte.", ledd: 1 },
            { text: "utfordre deg selv.", ledd: 1 },
            { text: "jobbe målrettet.", ledd: 1 },
            { text: "prøve noe nytt.", ledd: 1 },
            { text: "se nye muligheter.", ledd: 1 },
            { text: "gi kompliment.", ledd: 1 },
            { text: "være raus.", ledd: 1 },
            { text: "samarbeide godt.", ledd: 1 },
            { text: "ta ansvar.", ledd: 1 },
            { text: "oppmuntre.", ledd: 1 },
            { text: "være tålmodig.", ledd: 1 },
            { text: "vise engasjement.", ledd: 1 },
            { text: "vise respekt.", ledd: 1 },
            { text: "lære bort noe du er god på.", ledd: 1 },
            { text: "være nysgjerrig.", ledd: 1 },
            { text: "være lojal.", ledd: 1 },
            { text: "inkludere andre.", ledd: 1 },
            { text: "invitere andre med.", ledd: 1 },

            { text: "Stå på,", ledd: 2 },
            { text: "Fortsett akkurat sånn,", ledd: 2 },
            { text: "Fortsatt å være den flotte personen du er,", ledd: 2 },
            { text: "Stå på videre,", ledd: 2 },
            { text: "Gjerne gjøre det igjen,", ledd: 2 },
            { text: "Gjenta suksessen,", ledd: 2 },
            { text: "Ikke slutte med det,", ledd: 2 },
            { text: "Ikke gi deg,", ledd: 2 },
            { text: "Utforsk enda mer,", ledd: 2 },

            { text: "du er fantastisk!", ledd: 3 },
            { text: "du er en god venn!", ledd: 3 },
            { text: "du motiverer!", ledd: 3 },
            { text: "du gjør meg glad!", ledd: 3 },
            { text: "du inspirerer!", ledd: 3 },
            { text: "du skaper trygghet!", ledd: 3 },
            { text: "du er en stjerne!", ledd: 3 },
            { text: "du går foran som et godt eksempel!", ledd: 3 },
            { text: "du er helt rå!", ledd: 3 },
            { text: "du er lett å like!", ledd: 3 },
            { text: "du er en nydelig person!", ledd: 3 },
        ],

        meldinger: {
            utbox: {
                dineSendteMeldinger: [
                    { melding: "" }
                ]
            },
        },
    }
}



const firebaseConfig = {
    apiKey: "AIzaSyAdzRGnYxFXls-LxG8pBmgTN0aTDbfTJPw",
    authDomain: "wishotherswell-82682.firebaseapp.com",
    databaseURL: "https://wishotherswell-82682-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wishotherswell-82682",
    storageBucket: "wishotherswell-82682.appspot.com",
    messagingSenderId: "416443676626",
    appId: "1:416443676626:web:7e24c3d0ad353b17693a0b",
    measurementId: "G-ZM70JWY8JE"
};


async function initList() {
    const expectedDepth = 5;
    const apiRes = await fetch("https://34.88.246.255:8080/");
    const flattened = Object.values(await apiRes
        .json())
        .map(o => [Object.values(o)])
        .flat(expectedDepth);

    const findHighestId = () => {
        let highestId = 0;
        model.data.statistikk.instanser.forEach((instance) => {
            if(instance.id > highestId)
                highestId = instance.id;
        })
        return highestId;
    }
    let highestId = findHighestId() + 1;
    const schoolNamesArr = ["Brunla ungdomsskole", "Frøy skole", 
        "Hedrum ungdomsskole", "Kvelde barne- og ungdomsskole",
        "Lardal skole", "Mellomhagen ungdomsskole", "Mesterfjellet skole", "Ra ungdomsskole",
        "Tjodalyng skole", "Verdensmesteren", "Berg skole", "Fagerli skole", 
        "Hedrum barneskole", "Hvarnes skole", "Jordet skole",
        "Langestrand skole", "Sky skole", "Stavern skole", "Valby skole", "Østre Halsen skole"];
    schoolNamesArr.forEach(sName => {
        model.data.statistikk.instanser.push({id: highestId, klasse: null, parent: null, navn: null, points: 0, skole: sName})
        highestId++
    })
    model.data.statistikk.instanser = [...model.data.statistikk.instanser, ...sortIngest(flattened, highestId)];
}

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var meldingerCollection = db.collection("meldinger");
var pointsCollection = db.collection("points");
var infoCollection = db.collection("info");

async function getData(full = false) {
    model.date = moment(new Date(firebase.firestore.Timestamp.now().seconds*1000)).format("DD-MM-YYYY");
    try {
        for (let i = 0; i < model.data.statistikk.instanser.length; i++) {
            model.data.statistikk.instanser[i].points = 0;
        }
        model.data.statistikk.achievements = [];
        if (full) console.log("Full");
        full == true ? await getPointsAll() : await getPointsPerson();
    } catch (e) {
        console.error(e)
    }
}
function addTeacherToClass(_parent, name, email) {
    let newId = model.data.statistikk.instanser.length;
    model.data.statistikk.instanser.push({ id: newId, parent: _parent, points: 0, navn: name, userName: email });
}
var CLIENT_ID = '<YOUR_CLIENT_ID>';
let API_KEY = 'AIzaSyDObDZWxzHqPFghxyANvxwMbwmFFGumpTM';

const sortIngest = (data, highestId) => { //Returns a sorted and organized list of instances
    const unsortedArr = [];
    let currentParent;
    for(let index = 0; index < data.length ; index++, highestId++) {
        let mbyParent;
        let dataField = (d) => {
            if(typeof d === 'string' || d instanceof String) {
                const p = { className: d, id: highestId };
                currentParent = p;
                mbyParent = true; 
                return;
            }
            let oArr = Object.values(d);
            const [email, uname] = oArr;
            mbyParent = false;
            return {userName: email, name: uname};
        }

        let createFieldObject = (input) => {
            if(mbyParent) {
                let classData = findClassParentWithName(currentParent.className);
                return { id: highestId, parent: classData.parent, klasse: classData.name, points: 0 }; 
            } 
            return { id: highestId, parent: currentParent.id, userName: input.name, userName: input.userName };
        }
        unsortedArr.push(createFieldObject(createFieldObject(dataField(data[index]))));
    }
    return unsortedArr;
}
const findClassParentWithName = (_class) => {
    let className = _class
        .replace("Trinn 5", "")
        .replace("Trinn 8", "")
        .replace("8trinn", "")
        .replace("5trinn", "")
        .replace("-", "")
        .replace(".csv", "")
        .replace("  ", " ")
        .replace("  ", " ");
    let schoolI = className.indexOf("-");
    let strippedClassName = className.substring(0, schoolI);
    let schoolId;
    model.data.statistikk.instanser.forEach((x) => {
        if(x.skole) {
            if(x.skole.includes(strippedClassName.trim())) {
                schoolId = x.id;
            }
        }
    });
    return {name: className, parent: schoolId};
}



function onSignIn(googleUser) {
    const profile = googleUser; 
    model.app.currentName = profile.name;
    model.app.currentUser = profile.email; // This is null if the 'email' scope is not present.
    model.app.currentPage = 'main'
    model.app.currentUserKlasse = findP();
    initList();
    getData();
}
function findP() {
    var x = model.data.statistikk.instanser.find((p) => {
        if (p.userName == model.app.currentUser)
            return p.parent;
    })
    return x.parent;
}

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'profile';

function handleClientLoad() {
    console.log("handleCLientLoad")
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
window.responsePayLoad = "";
window.handleCredentialResponse = (response) => {

    responsePayload = parseJwt(response.credential);
    
    window.responsePayLoad = responsePayLoad;
    var user = {name: responsePayload.name, email: responsePayload.email}
    onSignIn(user);
}



async function handleSignoutClick() {
    google.accounts.id.disableAutoSelect();
    model.app.currentPage = 'google';
    model.app.currentName = ""
    model.app.currentUser = ""
    updateView();
    window.location.reload(true);
}

function addAch(_user, _kategori, _points, _motakker = "") {
    var point = {
        userName: _user,
        motakker: _motakker,
        points: _points,
        kategori: _kategori,
        tid: moment(new Date(firebase.firestore.Timestamp.now().seconds*1000)).format("DD-MM-YYYY")
    };
    pointsCollection.add(point)
}

function sendMsg(_sender, _reciver, _data) {
    var melding = {
        sender: _sender,
        reciver: _reciver,
        data: _data,
        date: moment(new Date(firebase.firestore.Timestamp.now().seconds*1000)).format("DD-MM-YYYY")
    }
    meldingerCollection.add(melding);
}

async function getMsgs() {
    model.app.inbox = [];
    await meldingerCollection.where("reciver", "==", model.app.currentUser).get().then(
        (meldingerCollection) => {
            meldingerCollection.forEach(function (meldingCollectionSS) {
                let melding = meldingCollectionSS.data();
                model.app.inbox.push({
                    sender: melding.sender,
                    data: melding.data,
                    date: melding.date,
                    reciver: melding.reciver,
                    id: meldingCollectionSS.id.toString()
                });
            }); updateView();
        });
}

async function getInfo() {
    model.app.inbox = [];
    await infoCollection.get().then(
        (infoCol) => {
            infoCol.forEach(function (currInfo) {
                let info = currInfo.data();
                model.app.info = info.infostr;
            }); 
        }), updateView();
}

async function getPointsPerson() {
    await pointsCollection.where("userName", "==", model.app.currentUser).get().then(
        (pointCollectionn) => {
            model.data.statistikk.achievements = [];
            pointCollectionn.forEach(function (pointsColl) {
                let points = pointsColl.data();
                model.data.statistikk.achievements.push({
                    userName: points.userName,
                    mottaker: points.mottaker,
                    taskId: points.kategori,
                    points: points.points,
                    tid: points.tid,
                    pointsNotAdded: true
                });
            }); addPoints();
        });
}

async function getPointsAll() {
    await pointsCollection.get().then(
        (pointCollectionn) => {
            model.data.statistikk.achievements = [];
            pointCollectionn.forEach(function (pointsColl) {
                let points = pointsColl.data();
                model.data.statistikk.achievements.push({
                    userName: points.userName,
                    mottaker: points.mottaker,
                    taskId: points.kategori,
                    points: points.points,
                    tid: points.tid,
                    pointsNotAdded: true
                });
            }); addPoints();
        });
}

async function _delete(id) {
    await db.collection("meldinger").doc(id).delete();
    getMsgs();
    updateView();
}

async function searchClassListsForStudent(email) {
    for (let i = 0; i < classLists.length; i++) {
        if (searchClasslist(classList[i], email)) {
            return true;
        }
        return false;
    }
}

function deleteAll() {
    model.app.inbox.forEach((m) => {
        _delete(m.id);
    })
}
async function fetchClassData(parentId, url) {
    let prevLen = model.data.statistikk.instanser.length + 15 - 1;
    let response = await fetch(url);
    let data = await response.text();
    let parsed = Papa.parse(data);
    parsed.data.map((_, index) => {
        if (index != 0 && index != parsed.data.length - 1) model.data.statistikk.instanser.push({
            id: prevLen + index,
            parent: parentId, points: 0, navn: parsed.data[index][1], userName: parsed.data[index][0]
        })
    })
}

function patchWork() {
    var fix = model.data.statistikk.instanser.filter((x) => { return x.navn == "Amanda Celina Sydow Sæterdal" })
    fix[0].parent = 23;
    var losFixos = model.data.statistikk.instanser.filter((x) => { return x.userName != "24zahma1503@larvikskolen.no" });
    model.data.statistikk.instanser = losFixos;
}
