

function getcolor(){

    const randommunber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randommunber.toString(16);

    document.body.style.backgroundColor=randomcode;

    navigator.clipboard.writeText(randomcode)
    document.getElementById("code").innerHTML=randomcode
}

document.getElementById("btn").addEventListener("click",getcolor)

getcolor();

