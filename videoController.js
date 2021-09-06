const mentalIntro = "https://www.youtube.com/embed/JB-G_o9WB9E"
const mentalVid1 = ""
const mentalVid2 = ""
const mentalVid3 = ""

const fysiskIntro = "https://www.youtube.com/embed/JB-G_o9WB9E"
const fysiskVid1 = ""
const fysiskVid2 = ""
const fysiskVid3 = ""

const lagIntro = "https://www.youtube.com/embed/JB-G_o9WB9E"
const lagVid1 = ""
const lagVid2 = ""
const lagVid3 = ""

function printVideo(index) {
	let html = ""
	html = `
        
    <iframe width="560" height="315" src=${mentalIntro}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <iframe width="560" height="315" src=${mentalVid1}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${mentalVid2}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${mentalVid3}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    <iframe width="560" height="315" src=${fysiskIntro}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <iframe width="560" height="315" src=${fysiskVid1}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${fysiskVid2}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${fysiskVid3}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    <iframe width="560" height="315" src=${lagIntro}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${lagVid1}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${lagVid2}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src=${lagVid3}
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
	return html;
}