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

function Tutorial() {
    window.location.href = 'tutorial.html';
}

function Contact() {
    window.location.href = 'contact.html';
}

//Gallery slides
loadBanner();

var index=0;
    function changeBanner(){ 
      [].forEach.call(document.getElementsByClassName("galleryImages"),function (v,i) { document.getElementsByClassName("galleryImages")[i].hidden = i!==index});
      index = (index+1) % document.getElementsByClassName("galleryImages").length;
      console.log("test");    
    }

function loadBanner() {
    var srcs = ["Images/P006-Marty2015.gif","Images/P090-WillyWonka.gif","Images/P028-SorcererMickey.gif","Images/P011-IronMan.gif","Images/P070-WallE.gif"];
    var c = 0;
    
    imgs = [];
    
    for(i = srcs.length - 1; i >= 0; i--) {
        imgs[i] = new Image();
        imgs[i].src = srcs[i];
        imgs[i].onload = function() {loaded();};
    }
    
    loaded = function() {
        c++;
        if(c === srcs.length){
            window.onload = function () {setInterval(changeBanner, 2000)};
            changeBanner();
        }
    };
    
    this.update = function() {};
}

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

function unselectAll() {
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
}