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

UL2 = create_tag("ul");
UL2.className = "bookmarklets" ;
UL2.style="list-style-type:disc";

UL3 = create_tag("ul");
UL3.className = "bookmarklets" ;
UL3.style="list-style-type:disc";

UL4 = create_tag("ul");
UL4.className = "bookmarklets" ;
UL4.style="list-style-type:disc";

function add_mark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  a.style["color"] = "orange" ;
  il.appendChild(a) ;
  UL.appendChild(il);
  
};

function add_submark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  a.style["color"] = "orange" ;
  il.appendChild(a) ;
  UL2.appendChild(il);
  
};

function add_submark2(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  a.style["color"] = "orange" ;
  il.appendChild(a) ;
  UL3.appendChild(il);
  
};

function add_submark3(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  a.style["color"] = "orange" ;
  il.appendChild(a) ;
  UL4.appendChild(il);
  
};

function add_label(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  UL.appendChild(il);
  
};

function add_sublabel(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  UL2.appendChild(il);
  
};

function add_sublabel2(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  UL3.appendChild(il);
  
};

function add_sublabel3(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  UL4.appendChild(il);
  
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
    panel.remove();
 
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


function remove_panel(){
    panel.remove();
};

function hide_panel(){
    if (subpanel.hidden == false){
        subpanel.hidden = true;
    }else{
        subpanel.hidden = false;
    }
};

function hide_subpanel(){
    if (subpan2.hidden == false){
        subpan2.hidden = true;
    }else{
        subpan2.hidden = false;
    }
};

function hide_subpanel2(){
    if (subpan3.hidden == false){
        subpan3.hidden = true;
    }else{
        subpan3.hidden = false;
    }
};

function hide_subpanel3(){
    if (subpan4.hidden == false){
        subpan4.hidden = true;
    }else{
        subpan4.hidden = false;
    }
};

panel = create_tag("div")

panelbar = create_tag("div")

//panelbar.innerHTML = "<a href='#' onclick='hide_panel()' id='panel_switch' >Hide Panel<a>"
panelbar.innerHTML = "JS PANEL" ;

// panelbar.style.position = "fixed"
panelbar.id = "InjectorPanel bar";
panelbar.style.height = "20px";
panelbar.style["background-color"] = "orange";
panelbar.style["z-index"] = 10e5;
panelbar.onclick = hide_panel ;
panelbar.style.cursor = "move";

subpanel = create_tag("div")

subpan2 = create_tag("div")
subpan2.id = "subpanels";

subpan3 = create_tag("div")
subpan3.id = "subpanels";

subpan4 = create_tag("div")
subpan4.id = "subpanels";

panel.id = "InjectorPanel";
panel.style.position = "absolute";
panel.style.right = "150px";
panel.style.width = "250px";
//panel.style.height = "500px";
panel.style.top = "0px";
panel.style["background-color"] = "black";
panel.style["color"] = "white";


panel.appendChild(panelbar);
panel.appendChild(subpanel);
panel.appendChild(subpan2);
panel.appendChild(subpan3);
panel.appendChild(subpan4);

document.querySelector("body").appendChild(panel);

 
// Serch Web Archive
//htmlcode =  "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()' > Web Archive</a></ul>" ;

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
}

//==================
add_label("Inspect Element");
add_mark("Show Inspect panel", hide_subpanel);
add_sublabel("Inspect");
add_submark("Inspect Element", 'javascript:(function()%7B(function() %7Bvar x %3D document.createElement("script")%3Bx.src %3D "https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fdevconsole%40master%2Fmain.js"%3Bx.onload %3D alert("Loaded Developer Console!")%3Bdocument.head.appendChild(x)%3B%7D)()%7D)()');
add_submark("Code Prompt", "javascript:function JSexe(){ if(valJS!='null' && valJS!='undefined')strJS=valJS; strJS=prompt('Your Javascript code or variable:',strJS); if(strJS!=null && strJS!='' && strJS!='undefined'){  setTimeout('valJS=\'\'+eval(strJS);JSexe()',10); } else{valJS='';strJS='';}}valJS='';strJS='';JSexe();");
add_submark("Inspect", "javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.karmatics.com/aardvark/bookmarklet.js')");
add_submark("eInfo", 'javascript:(function(){einfojs = document.createElement("script");einfojs.src="https://chezmarklets--chezcoder.repl.co/wip/einfo.js";document.body.appendChild(einfojs)}())');
add_submark("JS Shell", 'javascript:(function(){pipejs = document.createElement("script");pipejs.src="https://chezmarklets--chezcoder.repl.co/scripts/pipe.js";document.body.appendChild(pipejs)}())');
add_submark("DOM Editor", 'javascript:(function(){domeditjs = document.createElement("script");domeditjs.src="https://chezmarklets.chezcoder.repl.co/wip/DOMEditor.js";document.body.appendChild(domeditjs)}())');
add_label("Fun");
add_mark("Fun Panel", hide_subpanel3);
add_sublabel3("Fun Panel")
add_submark3("Snow", 'javascript: (t => {function i() {this.D = function() {const t = h.atan(this.i / this.d);l.save(), l.translate(this.b, this.a), l.rotate(-t), l.scale(this.e, this.e * h.max(1, h.pow(this.j, .7) / 15)), l.drawImage(m, -v / 2, -v / 2), l.restore()}}window;const h = Math,r = h.random,a = document,o = Date.now;e = (t => {l.clearRect(0, 0, _, f), l.fill(), requestAnimationFrame(e);const i = .001 * y.et;y.r();const s = L.et * g;for (var n = 0; n < C.length; ++n) {const t = C[n];t.i = h.sin(s + t.g) * t.h, t.j = h.sqrt(t.i * t.i + t.f), t.a += t.d * i, t.b += t.i * i, t.a > w && (t.a = -u), t.b > b && (t.b = -u), t.b < -u && (t.b = b), t.D()}}), s = (t => {for (var e = 0; e < p; ++e) C[e].a = r() * (f + u), C[e].b = r() * _}), n = (t => {c.width = _ = innerWidth, c.height = f = innerHeight, w = f + u, b = _ + u, s()});class d {constructor(t, e = !0) {this._ts = o(), this._p = !0, this._pa = o(), this.d = t, e && this.s()}get et() {return this.ip ? this._pa - this._ts : o() - this._ts}get rt() {return h.max(0, this.d - this.et)}get ip() {return this._p}get ic() {return this.et >= this.d}s() {return this._ts = o() - this.et, this._p = !1, this}r() {return this._pa = this._ts = o(), this}p() {return this._p = !0, this._pa = o(), this}st() {return this._p = !0, this}}const c = a.createElement("canvas");H = c.style, H.position = "fixed", H.left = 0, H.top = 0, H.width = "100vw", H.height = "100vh", H.zIndex = "100000", H.pointerEvents = "none", a.body.insertBefore(c, a.body.children[0]);const l = c.getContext("2d"),p = 300,g = 5e-4,u = 20;let _ = c.width = innerWidth,f = c.height = innerHeight,w = f + u,b = _ + u;const v = 15.2,m = a.createElement("canvas"),E = m.getContext("2d"),x = E.createRadialGradient(7.6, 7.6, 0, 7.6, 7.6, 7.6);x.addColorStop(0, "hsla(255,255%,255%,1)"), x.addColorStop(1, "hsla(255,255%,255%,0)"), E.fillStyle = x, E.fillRect(0, 0, v, v);let y = new d(0, !0),C = [],L = new d(0, !0);for (var j = 0; j < p; ++j) {const t = new i;t.a = r() * (f + u), t.b = r() * _, t.c = 1 * (3 * r() + .8), t.d = .1 * h.pow(t.c, 2.5) * 50 * (2 * r() + 1), t.d = t.d < 65 ? 65 : t.d, t.e = t.c / 7.6, t.f = t.d * t.d, t.g = r() * h.PI / 1.3, t.h = 15 * t.c, t.i = 0, t.j = 0, C.push(t)}s(), EL = a.addEventListener, EL("visibilitychange", () => setTimeout(n, 100), !1), EL("resize", n, !1), e()})()');
add_submark3("Custom Matrix", "javascript:(function()%7Bjavascript%3A (function() %7B%0A    var letter %3D prompt('What letter%3F')%3B%0A    var color %3D prompt('What color%3F')%3B%0A    var speed %3D prompt('What speed%3F')%3B%0A    var container %3D document.createElement('div')%3B%0A    document.body.appendChild(container)%3B%0A    container.style.position %3D 'fixed'%3B%0A    container.style.top %3D '0'%3B%0A    container.style.left %3D '0'%3B%0A    container.style.width %3D '100%25'%3B%0A    container.style.height %3D '100%25'%3B%0A    container.style.overflow %3D 'hidden'%3B%0A    container.style.pointerEvents %3D 'none'%3B%0A%0A    function init() %7B%0A        var injection %3D document.createElement('style')%3B%0A        document.body.appendChild(injection)%3B%0A        injection.innerHTML %3D '%40-webkit-keyframes snow %7B%5Cnfrom %7Btop%3A-1%25%3B%7D%5Cnto%7Btop%3A121%25%3B%7D%7D%5Cn%40-moz-keyframes snow %7B%5Cnfrom %7Btop%3A -1%25%3B%7D%5Cnto %7Btop%3A 121%25%3B%7D%5Cn%7D'%3B%0A    %7D%0A    init()%3B%0A    window.setInterval(createParticle%2C speed)%3B%0A    timeChoices %3D %5B5%2C 6%2C 7%2C 8%2C 9%2C 10%5D%3B%0A%0A    function destroy(evt) %7B%0A        container.removeChild(evt.target)%3B%0A    %7D%0A%0A    function createParticle() %7B%0A        var particle %3D document.createElement('span')%3B%0A        var randomSpeed %3D timeChoices%5BMath.floor(Math.random() * timeChoices.length)%5D%3B%0A        particle.innerHTML %3D letter%3B%0A        particle.className %3D 'flake'%3B%0A        particle.style.position %3D 'absolute'%3B%0A        particle.style.color %3D color%3B%0A        particle.style.backgroundColor %3D 'transparent'%3B%0A        particle.style.width %3D '5px'%3B%0A        particle.style.height %3D '5px'%3B%0A        particle.style.pointerEvents %3D 'none'%3B%0A        particle.style.right %3D Math.random() * 100 %2B '%25'%3B%0A        particle.style.borderRadius %3D '50%25'%3B%0A        particle.style.WebkitAnimation %3D 'snow ' %2B randomSpeed %2B 's linear'%3B%0A        container.appendChild(particle)%3B%0A        particle.addEventListener('webkitAnimationEnd'%2C destroy)%3B%0A    %7D%0A%7D)()%7D)()%3B");
add_submark3("Blooket Hacks", 'javascript:(function(){bguijs = document.createElement("script");bguijs.src="https://jacksoncraft859.github.io/gui.js";document.body.appendChild(bguijs)}())');
add_submark3("Auto Clicker", 'javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);');
add_submark3("Custom Scratch", "https://jacksoncraft859.github.io/scratch-gui/?load_griffpatch=true&extension=https%3A%2F%2Fjacksoncraft859.github.io%2Fhope.js&extension=https%3A%2F%2Fsheeptester.github.io%2Fhello-world%2FlocalStorage-extension.js&extension=https%3A%2F%2Fjacksoncraft859.github.io%2Fpen.js&extension=https%3A%2F%2Fbill96012.github.io%2Fscratch-operator-extension%2Fscratch-advanced-operators.js&extension=https%3A%2F%2Ffamilycomicsstudios.github.io%2FScratchExtensionsFCS%2FCode%2Futils.js&extension=https%3A%2F%2Ffamilycomicsstudios.github.io%2FScratchExtensionsFCS%2FCode%2Fscratchmath.js&extension=https%3A%2F%2Ffamilycomicsstudios.github.io%2FScratchExtensionsFCS%2FCode%2Fevaluation.js&extension=https%3A%2F%2Fbill96012.github.io%2Fscratch-json-extension%2Fscratch-json.js&load_plugin=https%3A%2F%2Farpruss.github.io%2Fgamepad.js");
add_submark3("Snake", "javascript:Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement('p'));(X=x.style).position='fixed';X.left=X.top=0;X.background='#FFF%22;x.innerHTML=%22%3Cp%3E%3C/p%3E%3Ccanvas%3E%22;v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext(%222d%22);%20onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0%3Ee?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++%20+10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert(%22Game%20Over%22)):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):%22Press%20P%22)):-e?(y=(a[e]=e%3CQ|e%3E=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle=%22hsl(%22+99*!a[e]+%22,%22+2*m+%22%,%22+50*y+%22%)%22,c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1):%20p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void%20F(-1);");
add_submark3("2048", "javascript:(t=>{var s=document.createElement(t);s.type='text/java'+t;s.src='https://sheeptester.github.io/javascripts/2048.js';document.body.appendChild(s);})('script')");
add_label("Useful");
add_mark("MyBib", "https://www.mybib.com/");
add_mark("Search on Bing", "javascript: Q = []; c = location.search.slice(1).split('&'); for (i in c) { f = c[i].split('='); if (f[0] == 'q' || f[0] == 'as_q' || f[0] == 'p' || f[0] == 'query') if (f[1]) Q.push(f[1]) } R = unescape(Q.join('; ').replace(/\+/g, ' ')); location = 'https://www.bing.com/search?q=%27%20+%20escape(R);");
add_mark("Tiny URL", "javascript:void(open('http://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))");
add_mark("QR Code", "javascript:(function(){if(document.getElementById){var x=document.body;var o=document.createElement('script');if(typeof(o)!='object') o=document.standardCreateElement('script');o.setAttribute('src','http://qrbookmarklet.googlecode.com/svn/trunk/qr.js');o.setAttribute('type','text/javascript');x.appendChild(o);}})();");
add_mark("Web Archive", "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()");
add_mark("Image Search" , "javascript:void((function(){var sir=document.createElement('script');sir.setAttribute('src','http://cdnjs.cloudflare.com/ajax/libs/require.js/0.26.0/require.min.js');sir.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sir);var sib=document.createElement('script');sib.setAttribute('src','http://jarred.github.com/src-img/js/app/bookmarklet.js?version=0.66');sib.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sib);})());") ;
//add_mark("Show All Links", "#",  showAllLinks)
//add_mark("Show All Links", "javascript:" + showAllLinks.toString())
add_mark("Show All Links", showAllLinks);
add_mark("Share", "javascript: void((function(svc) {     var d = document,         w = window,         p = 0,         b = function() {             if (!p) {                 p = 1;                 if (_atc.xol) _adr.onReady();                 if (w.addthis_sendto) addthis_sendto(svc || 'bkmore', {                     product: 'bmt-' + _atc.ver                 })             } else {                 p = 0;                 if (_atw) _atw.clb()             }         };     if (!w._atc) {         var ol = w.addthis_onload || [],             o = d.createElement('script');         w.addthis_product = 'bmt-250';         o.src = '//s7.addthis.com/js/250/addthis_widget.js#domready=1&username=bookmarklet';%20%20%20%20%20%20%20%20%20ol.push(b);%20%20%20%20%20%20%20%20%20w.addthis_onload%20=%20ol;%20%20%20%20%20%20%20%20%20d.getElementsByTagName('body')[0].appendChild(o)%20%20%20%20%20}%20else%20b()%20})())");
//==================
add_label("Web Dev");
add_mark("Show Web Dev Panel", hide_subpanel2);
add_sublabel2("Web Dev Panel");
add_submark2("DNS Lookup", "javascript:location.href='https://mxtoolbox.com/SuperTool.aspx?action=a%3a%27+window.location.hostname+%27&run=toolpage%27");
add_submark2("FPS", "javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()");
add_submark2("Github Search", 'javascript:var query = prompt("Search GitHub.com");user_search_ary = /%5Eu:(.*)/g.exec(query);if (user_search_ary) %7Bwindow.location = "https://github.com/" + user_search_ary%5B1%5D;%7Delse if (query) %7Bwindow.location = "https://github.com/search?q=" + query;%7D');
add_submark2("Inject JQuery", "javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();");
add_submark2("Web Stack", "javascript: (function() { var d = document, e = d.getElementById('wappalyzer-container'); if (e !== null) { d.body.removeChild(e); } var u = 'https://www.wappalyzer.com/', t = new Date().getTime(), c = d.createElement('div'), p = d.createElement('div'), l = d.createElement('link'), s = d.createElement('script'); c.setAttribute('id', 'wappalyzer-container'); l.setAttribute('rel', 'stylesheet'); l.setAttribute('href', u + 'css/bookmarklet.css'); d.head.appendChild(l); p.setAttribute('id', 'wappalyzer-pending'); p.setAttribute('style', 'background-image: url(' + u + 'images/spinner.gif) !important'); c.appendChild(p); s.setAttribute('src', u + 'bookmarklet/wappalyzer.js'); s.onload = function() { window.wappalyzer = new Wappalyzer(); s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/apps.js'); s.onload = function() { s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/driver.js'); c.appendChild(s); }; c.appendChild(s); }; c.appendChild(s); d.body.appendChild(c); })();");
add_submark2("Preformance Analyzer", 'javascript:(function(){eljs = document.createElement("script");eljs.src="https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js";document.body.appendChild(eljs)}())');
add_submark2("Run Functional.js",
"javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://caiorss.github.io/functional.js' })();");
add_submark2("Execute HTML", "javascript:var txt='';function getSelText(wndw){var sel='';if(document.all){sel=wndw.document.selection.createRange().text;}else{sel=wndw.window.getSelection();}return sel;}void(frms=window.frames);if(frms.length==0){txt=getSelText(window);}else{for(iQA=0;iQA&lt;frms.length;iQA++){void(txt=getSelText(frms[iQA]));if(txt.length&gt;0){break;}}}while(txt.length==0){txt=promt('Input:');}win=window.open('','','');void(win.document.write(txt));void(win.document.close())");
add_submark2("Show Cookies", ShowCookies);
add_label("Multitools and OS's");
add_mark("OS.JS", "javascript:var s = document.createElement('script');s.type='text/javascript';s.src='https://jacksoncraft859.github.io/os.js';document.body.appendChild(s);");
add_mark("SilveOS", "javascript:var s = document.createElement('script');s.type='text/javascript';s.src='https://jacksoncraft859.github.io/silveos.js';document.body.appendChild(s);");
add_mark("ClockWork", "javascript:var s = document.createElement('script');s.type='text/javascript';s.src='https://redstone-nw.netlify.app/assets/clockwork-bookmarklet.js';document.body.appendChild(s);");
add_mark("Multitool 1", "javascript:(function () %7Bvar v %3D document.createElement(%27script%27)%3Bv.src %3D %27https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FBrowncha023%2FVengeance%40v1.2.0%2Fscript.min.js%27%3Bdocument.body.appendChild(v)%3B%7D())");
//==================
add_label("Security and Auditing");
add_mark("Remove Cookies", "javascript:void(document.cookie=null)");
add_mark("PwnYoutube", "javascript:(function(){url='http://deturl.com/download-video.js';document.body.appendChild(document.createElement('script')).src=url+'?'+new Date().getTime();})();");
add_mark("Full URLs", fullUrls)
add_label("Proxy & Cloaking");
add_mark("Interstellar", "https://goarmy.us.to/");
add_mark("Tab Cloaking", "javascript:document.title=prompt('Welcome to the Tab Cloak setup!\n\nEnter the title you want to set for this tab::');var icon=document.querySelector(`link[rel='icon']`);if (!icon) {icon = document.createElement('link');icon.rel='icon';};switch(prompt('What icon would you like to use?\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL\n\nPlease only enter a number!%27)){case%271%27:icon.setAttribute(%27href%27,%27https://www.google.com/favicon.ico%27);break;case%272%27:icon.setAttribute(%27href%27,%27https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png%27);break;case%273%27:icon.setAttribute(%27href%27,prompt(%27Please enter the URL for the icon you want:%27));} document.head.appendChild(icon);");
add_mark("Close", remove_panel);

subpanel.appendChild(UL);
subpan2.appendChild(UL2);
subpan3.appendChild(UL3);
subpan4.appendChild(UL4);
hide_subpanel();
hide_subpanel2();
hide_subpanel3();
