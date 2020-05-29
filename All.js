//All

function Home() {
    window.location.href = 'index.html';
}

function Gallery() {
    window.location.href = 'gallery.html';
}

function Projects() {
    window.location.href = 'projects.html';
}

function About() {
    window.location.href = 'about.html';
}

/*function togglePix(a) {
    var e = document.getElementById(a);
    if(!e) return true;
    if(e.style.display == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    return false;
}*/
function toggleMe(a) {
    var e = document.getElementById(a);
    if(!e) return true;
    if(e.style.display == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    return false;
}
//Enlarge Image

/*function show(smSrc, lgSrc) {
    document.getElementById('largeImg').src = smSrc;
    showLargeImagePanel();
    unselectAll();
    setTimeout(function() {
        document.getElementById('largeImg').src = lgSrc;
    }, 1);
}*/
function showImage(smSrc, lgSrc) {
    document.getElementById('largeImg').src = smSrc;
    showLargeImagePanel();
    unselectAll();
    setTimeout(function() {
        document.getElementById('largeImg').src = lgSrc;
    }, 1);
}

function showLargeImagePanel() {
    document.getElementById('largeImgDiv').style.display = 'block';
}

//if keys[27]
var keys = [];
onekeydown = onkeyup = function(e) {
    e = e || event;
    keys[e.keycode] = e.type == 'keycode';
};
// Open the Modal

function openM() {
    document.getElementById("myModal").style.display = "block";
}
// Close the Modal

function closeM() {
    document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function curr(n) {
    showSlides(slideIndex = n);
}

/*var pixCt = document.querySelectorAll('#proud .squPix').length;
for (var i=1; i<=pixCt; i++){
    document.getElementById('output').innerHTML = i;
}
document.getElementById('output').innerHTML = pixCt;*/

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("galPic");
    var captionText = document.getElementById("alt");
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].alt;
}

//arrow based gallery move
document.addEventListener('keyup', function(e) {
    if(e.defaultPrevented) {
        return;
    }
    var key = e.key || e.keyCode;
    if(key === 'ArrowLeft') {
        plusSlides(-1);
    } else if(key === 'ArrowRight') {
        plusSlides(1);
    }
});