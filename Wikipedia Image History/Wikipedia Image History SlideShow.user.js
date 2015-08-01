// ==UserScript==
// @name       Wikipedia Image History SlideShow 
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://en.wikipedia.org/wiki/File:*
// @copyright  2012+, You
// ==/UserScript==
var ims = [];
var defs = [];
var loaded = 0;
function start(){
    if(loaded){
        getImages();
        return;
    }
 //$("head").append("<script src='https://dl.dropboxusercontent.com/u/87240333/slideShow/slideshow.js' onload='getImages()'></script>");   
    var sc = document.createElement("script");
    sc.src = 'https://dl.dropboxusercontent.com/u/87240333/slideShow/slideshow.js';
    sc.onload = getImages;
    document.head.appendChild(sc);
}
function getImages(){
    loaded = 1;
 var pans = $(".wikitable.filehistory").children()[0].children;   
    for(i=1;i<pans.length;i++){
        defs.push(pans[i].children[1].children[0]);
        ims.push(pans[i].children[2].children[0].href);
    }
    ss.createSlideShow(ims,defs);
}

var sc = document.createElement("button");
sc.setAttribute("style","position:absolute;top:25px;right:5px;");
sc.innerHTML = 'Slide Show';
sc.onclick = start;
document.body.appendChild(sc);
