var i = 0;
var count = 0;
var txt = ["Name? Joshua Young.", "Pursuit? Computer Science.", 
    "Interests? Cloud and AI.", "What's this? My portfolio.", "Have a look around!"]
var speed = 40;
var delayInMilliseconds = 1000;

function checkFirstVisit() {
    if (document.cookie.indexOf('mycookie') == -1) {
        document.cookie = 'mycookie = 1';
        typeWriter();
    } else {
        while (i < txt.length) {
            document.getElementById("intro" + i.toString()).innerHTML = txt[i];
            i++;
        }
        document.getElementById("row").style.display = "flex";
    }
}

function typeWriter() {
    if (i < txt[count].length) {
        if (txt[count].charAt(i) != '?') {
            document.getElementById("intro" + count.toString()).innerHTML 
                += txt[count].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("intro" + count.toString()).innerHTML 
                += txt[count].charAt(i);
            i++;
            setTimeout(typeWriter, delayInMilliseconds);
        }
    } else if (count !== 4) {
        count++;
        i = 0;
        setTimeout(typeWriter, delayInMilliseconds);
    } else {
        setTimeout(function() {
            document.getElementById("row").style.display = "flex";
        }, delayInMilliseconds);
    }
}