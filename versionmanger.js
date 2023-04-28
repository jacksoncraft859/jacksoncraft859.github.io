// From Localhost:
//  document.body.appendChild(document.createElement('script')).src='http://localhost:8000/commandvpanel.js';

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

VUL = create_tag("ul");
VUL.className = "bookmarklets" ;
VUL.style="list-style-type:disc";

function add_vmark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  a.style["color"] = "silver" ;
  il.appendChild(a) ;
  VUL.appendChild(il);
  
};

function add_vlabel(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  VUL.appendChild(il);
  
};

function func2JSurl(func){
    var code = func.toString();
    var url = "javascript:(function()" + code.replace(/function.*\(\)/, '').replace(/\/\/.*/,"") + ")();";
    return url ;
};  


//--------------------------------------------------------------------//

function showAllLinks(){
    var a = '';
    for (var ln = 0; ln < document.links.length; ln++) {
        var lk = document.links[ln];
        a += ln + ': <a href=\'' + lk + '\' title=\'' + lk.text + '\'>' + lk + '</a><br>\n';
    };
    w = window.open('', 'Links', 'scrollbars,resizable,width=400,height=600');
    w.document.write(a);    
    //w.document.body.innerHTML = a ;
};

function fullUrls() {
/* Changes the text of links to match their absolute urls. */
    var i, c, x, h;
    for (i = 0; x = document.links[i]; ++i) {
        h = x.href;
        x.title += " " + x.innerHTML;
        while (c = x.firstChild) x.removeChild(c);
        x.appendChild(document.createTextNode(h));
    };
    vpanel.remove();
 
};


/* Credits: http://www.xinotes.net/notes/note/219/ */
function ShowCookies(){

     if (!window.hhhgewrt34frdki) {
     window.hhhgewrt34frdki = true;
     $c = document.createElement('DIV');
     $c.style.cssText = 'position:absolute;border:1px solid #6A8080;display:block;color:black;background:#FFF;z-index:1000000;height:auto;width:auto';
     document.body.appendChild($c);
     oldscroll = window.onscroll;
     window.onscroll = function() {
         $c.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + 5 + 'px';
         if (oldscroll) {
             oldscroll();
         };
     };


     $tbl = '<table style=\'background:black;color:white;font-family:sans-serif;font-size:0.9em;margin:0;padding:0\' cellspacing=\'1\' cellpadding=\'4\' border=\'0\'>';
     if (document.cookie) {
         $tbl += '<tr><th style=\'background:#6A8080;color:#FFF;\'>Cookie</th><th style=\'background:#6A8080;color:#FFF;\'><div style=\'display:block;float:right;cursor:pointer;width:auto\' onclick=\'document.body.removeChild($c);  window.onscroll = oldscroll;  window.hhhgewrt34frdki = null;\'>x</div>ValueÂ Â </th></tr>';
         $cc = document.cookie.split('; ');
         for ($i = 0; $i < $cc.length; $i++) {
             $c0 = $cc[$i];
             $ci = $c0.indexOf('=');
             if ($ci < 0) {
                 $ci = $c0.length;
             };
             $tbl += '<tr><td style=\'background:#FFF;text-align:left\'>' + $c0.substr(0, $ci) + '</td><td style=\'background:#FFF;text-align:left\'>' + unescape($c0.substr($ci + 1)) + '</td></tr>';
         };
     } else {
         $tbl += '<tr><th style=\'background:#6A8080;color:#FFF;width:200px\'><div style=\'display:block;float:right;cursor:pointer;width:auto\' onclick=\'document.body.removeChild($c);  window.onscroll = oldscroll;  window.hhhgewrt34frdki = null;\'>x</div>Cookies</th></tr>' + '<tr><td style=\'text-align:center;background:#FFF\'>None</td></tr>';
     };
     $tbl += '</table>';
     $c.innerHTML = $tbl;
     $c.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + 5 + 'px';
     $c.style.left = '5px';
     void(x = 3);
 };
};


function remove_vpanel(){
    vpanel.remove();
};

function hide_vpanel(){
    if (subvpanel.hidden == false){
        subvpanel.hidden = true;
    }else{
        subvpanel.hidden = false;
    }
};

function change_theme_blue(){
    vpanel.style["background-color"] = "white";
    vpanel.style["color"] = "dodgerblue";
    vpanelbar.style["background-color"] = "dodgerblue";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER" ;
};

function change_theme_orange(){
    vpanel.style["background-color"] = "black";
    vpanel.style["color"] = "white";
    vpanelbar.style["background-color"] = "orange";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER" ;
};

function change_theme_green(){
    vpanel.style["background-color"] = "white";
    vpanel.style["color"] = "lightgreen";
    vpanelbar.style["background-color"] = "lightgreen";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER" ;
};

function change_theme_red(){
    vpanel.style["background-color"] = "black";
    vpanel.style["color"] = "darkred";
    vpanelbar.style["background-color"] = "darkred";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER" ;
};

function change_theme_pink(){
    vpanel.style["background-color"] = "white";
    vpanel.style["color"] = "hotpink";
    vpanelbar.style["background-color"] = "hotpink";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER" ;
};

function change_theme_yellow(){
    vpanel.style["background-color"] = "black";
    vpanel.style["color"] = "gold";
    vpanelbar.style["background-color"] = "gold";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER VERSION MANAGER" ;
};

function change_theme_im(){
    vpanelbar.style["color"] = "gold";
    vpanelbar.style["background-color"] = "darkred";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER";
    vpanel.style["background-color"] = "black";
    vpanel.style["color"] = "gold";
};

function change_theme_hack(){
    vpanel.style["color"] = "green";
    vpanel.style["background-color"] = "black";
    vpanelbar.style["background-color"] = "green";
    vpanelbar.style["color"] = "white";
    vpanelbar.innerHTML = "JS PANEL VERSION MANAGER";
};

function launchv1(){
    v1 = create_tag("script");
    v1.src = "https://jacksoncraft859.github.io/inspectelementstuff.js";
    document.querySelector("body").appendChild(v1);
    remove_vpanel();
};

function launchv2(){
    v2 = create_tag("script");
    v2.src = "https://jacksoncraft859.github.io/inspectelementstuff2.js";
    document.querySelector("body").appendChild(v2);
    remove_vpanel();
};

function launchv3(){
    v3 = create_tag("script");
    v3.src = "https://jacksoncraft859.github.io/jspanel3.js";
    document.querySelector("body").appendChild(v3);
    remove_vpanel();
};

vpanel = create_tag("div")

vpanelbar = create_tag("div")

//vpanelbar.innerHTML = "<a href='#' onclick='hide_vpanel()' id='vpanel_switch' >Hide Panel<a>"
vpanelbar.innerHTML = "JS PANEL VERSION MANAGER" ;

// vpanelbar.style.position = "fixed"
vpanelbar.id = "vInjectorPanel bar";
vpanelbar.style.height = "20px";
vpanelbar.style["background-color"] = "orange";
vpanelbar.style["z-index"] = 10e5;
vpanelbar.onclick = hide_vpanel ;
vpanelbar.style.cursor = "move";

subvpanel = create_tag("div")

vpanel.id = "vInjectorPanel";
vpanel.style.position = "absolute";
vpanel.style.right = "150px";
vpanel.style.width = "250px";
//vpanel.style.height = "500px";
vpanel.style.top = "0px";
vpanel.style["background-color"] = "black";
vpanel.style["color"] = "white";


vpanel.appendChild(vpanelbar);
vpanel.appendChild(subvpanel);

document.querySelector("body").appendChild(vpanel);

 
// Serch Web Archive
//htmlcode =  "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()' > Web Archive</a></ul>" ;

dragElement(document.getElementById("vInjectorPanel"));

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
}

//==================
add_vlabel("JS PANEL VERSION MANAGERs");
add_vmark("JS PANEL v1", launchv1);
add_vmark("JS PANEL v2", launchv2);
add_vmark("JS PANEL v3", launchv3);
add_vmark("Close", remove_vpanel);

subvpanel.appendChild(VUL);

