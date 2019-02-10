function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload!="function"){
        window.onload = func;
    } else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}


function insertAfter(newElement, targetElement) {
  var parentElement = targetElement.parentNode;
  if(targetElement == parentElement.lastChild) {
    parentElement.appentChild(newElement);
  } else {
    parentElement.insertBefore(newElement, targetElement.nextSibling);
  }
}

function preph(){
    var placeholder = document.createElement(img);
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","C:\Users\user\Desktop\JS\4_复习\pic\ph.jpg");
    placeholder.setAttribute("alt","my gallery");
var description = document.createElement("div");
    description.setAttribute("id","description");
var desctext = document.createTextNode("Pls see the Pic");
    description.appendChild(desctext);
var gallery = document.getElementById("gallery");
    insertAfter(placeholder, gallery);
    insertAfter(description,placeholder);
}


function pregallery(){
    if(!document.getElementById) return false;
    if(!document.getElementById("gallery")) return false;
       var gallery = document.getElementById("gallery");
       var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++){
        links[i].onclick = function(){
            showpic(this); 
            return false;
        }
    }
}
   
function showpic(whichpic){
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
      placeholder.setAttribute("src",source);
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
      description.firstChild.nodeValue = text
    }



/*<div id="description">Pls see the Pic</div>
    <img id="placeholder" src="C:\Users\user\Desktop\JS\4 复习\pic\ph.jpg" alt='my gallery'>*/


addLoadEvent(prepph);
addLoadEvent(pregallery);