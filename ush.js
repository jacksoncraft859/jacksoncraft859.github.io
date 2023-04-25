// From Localhost:
//  document.body.appendChild(document.createElement('script')).src='http://localhost:8000/commandpanel.js';

// Inject the Jquery Into the Page
// document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js';

function create_tag(tag){
    return document.createElement(tag);
};

function create_text(text){
    return document.createTextNode(text);
};

function hyperlink(label, url, onclick){
    var a = create_tag("a") ;
    //a.href = url ;
    a.innerHTML = label;
    
    if (typeof url == "function"){
    
        a.href = func2JSurl(url);
    }else{
        a.href = url ;
    };
        
    //if(onclick !=undefined) a.onclick = onclick ;
    return a;
};

UL = create_tag("ul");
UL.className = "bookmarklets" ;
UL.style="list-style-type:disc";

function add_mark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  il.appendChild(a) ;
  UL.appendChild(il);
  
};

function add_label(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  UL.appendChild(il);
  
};

function func2JSurl(func){
    var code = func.toString();
    var url = "javascript:(function()" + code.replace(/function.*\(\)/, '').replace(/\/\/.*/,"") + ")();";
    return url ;
};  


function remove_ushl(){
    ush.remove();
};

function hide_ush(){
    if (subush.hidden == false){
        subush.hidden = true;
    }else{
        subush.hidden = false;
    }
};

dragElement(document.getElementById("InjectorPanel"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "bar")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "bar").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

ush = create_tag("div")

ushbar = create_tag("div")

//panelbar.innerHTML = "<a href='#' onclick='hide_panel()' id='panel_switch' >Hide Panel<a>"
ushbar.innerHTML = "JS PANEL" ;

// panelbar.style.position = "fixed"
ush.id = "InjectorPanel bar";
ushbar.style.height = "20px";
ushbar.style["background-color"] = "orange";
ushbar.style["z-index"] = 10e5;
ushbar.onclick = hide_ush ;

subush = create_tag("div")


ush.id = "InjectorPanel";
ush.style.position = "absolute";
ush.style.width = "610px";
ush.style.height = "480px";
//panel.style.height = "500px";
ush.style.top = "0px";
ush.style.right = "300px";
ush.style["background-color"] = "black";
ush.style["color"] = "white";

$ush = "<div style='width:600px;height:450px; border:5px solid black;  background-color:white; box-shadow:10px 10px 10px black; position:fixed; z-index:99999'><iframe style='width:100%; height:100%;' src='https://replit.com/@jacksoncraft859/Project-Ultrishell?embed=true%27></iframe></div>"

ush.appendChild(ushbar);
ush.appendChild(subush);

document.querySelector("body").appendChild(ush);

subush.innerHTML = $ush ;
add_mark("Close", remove_ush);

subush.appendChild(UL);
