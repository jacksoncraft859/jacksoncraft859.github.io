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

function add_mark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  il.appendChild(a) ;
  UL.appendChild(il);
  
};

function add_submark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
  a.style.display = "block" ;
  il.appendChild(a) ;
  UL2.appendChild(il);
  
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

panel = create_tag("div")

panelbar = create_tag("div")

//panelbar.innerHTML = "<a href='#' onclick='hide_panel()' id='panel_switch' >Hide Panel<a>"
panelbar.innerHTML = "JS PANEL" ;

// panelbar.style.position = "fixed"
panelbar.style.height = "20px";
panelbar.style["background-color"] = "orange";
panelbar.style["z-index"] = 10e5;
panelbar.onclick = hide_panel ;

subpanel = create_tag("div")

subpan2 = create_tag("div")

panel.id = "InjectorPanel";
panel.style.position = "fixed";
panel.style.width = "250px";
//panel.style.height = "500px";
panel.style.top = "0px";
panel.style["background-color"] = "black";
panel.style["color"] = "white";


panel.appendChild(panelbar);
panel.appendChild(subpanel);
panel.appendChild(subpan2);
panel.onload = hide_subpanel ;

document.querySelector("body").appendChild(panel);

 
// Serch Web Archive
//htmlcode =  "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()' > Web Archive</a></ul>" ;

//==================
add_label("Inspect Element");
add_mark("Show Inspect panel", hide_subpanel);
add_sublabel("Inspect");
add_submark("Code Prompt", "javascript:function JSexe(){ if(valJS!='null' && valJS!='undefined')strJS=valJS; strJS=prompt('Your Javascript code or variable:',strJS); if(strJS!=null && strJS!='' && strJS!='undefined'){  setTimeout('valJS=\'\'+eval(strJS);JSexe()',10); } else{valJS='';strJS='';}}valJS='';strJS='';JSexe();");
add_submark("Inspect", "javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.karmatics.com/aardvark/bookmarklet.js')");
add_submark("eInfo", 'javascript:(function(){einfojs = document.createElement("script");einfojs.src="https://chezmarklets--chezcoder.repl.co/wip/einfo.js";document.body.appendChild(einfojs)}())');
add_submark("JS Shell", 'javascript:(function(){pipejs = document.createElement("script");pipejs.src="https://chezmarklets--chezcoder.repl.co/scripts/pipe.js";document.body.appendChild(pipejs)}())');
add_submark("DOM Editor", 'javascript:(function(){domeditjs = document.createElement("script");domeditjs.src="https://chezmarklets.chezcoder.repl.co/wip/DOMEditor.js";document.body.appendChild(domeditjs)}())');
add_label("Blooket");
add_mark("Hacks", 'javascript:(function(){bguijs = document.createElement("script");bguijs.src="https://jacksoncraft859.github.io/gui.js";document.body.appendChild(bguijs)}())');
add_label("Games")
add_mark("Custom Scratch", "https://jacksoncraft859.github.io/scratch-gui/?load_griffpatch=true&extension=https%3A%2F%2Fjacksoncraft859.github.io%2Fhope.js&extension=https%3A%2F%2Fsheeptester.github.io%2Fhello-world%2FlocalStorage-extension.js&extension=https%3A%2F%2Fjacksoncraft859.github.io%2Fpen.js&extension=https%3A%2F%2Fbill96012.github.io%2Fscratch-operator-extension%2Fscratch-advanced-operators.js&extension=https%3A%2F%2Ffamilycomicsstudios.github.io%2FScratchExtensionsFCS%2FCode%2Futils.js&extension=https%3A%2F%2Ffamilycomicsstudios.github.io%2FScratchExtensionsFCS%2FCode%2Fscratchmath.js&extension=https%3A%2F%2Ffamilycomicsstudios.github.io%2FScratchExtensionsFCS%2FCode%2Fevaluation.js&extension=https%3A%2F%2Fbill96012.github.io%2Fscratch-json-extension%2Fscratch-json.js&load_plugin=https%3A%2F%2Farpruss.github.io%2Fgamepad.js");
add_mark("Snake", "javascript:Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement('p'));(X=x.style).position='fixed';X.left=X.top=0;X.background='#FFF%22;x.innerHTML=%22%3Cp%3E%3C/p%3E%3Ccanvas%3E%22;v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext(%222d%22);%20onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0%3Ee?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++%20+10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert(%22Game%20Over%22)):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):%22Press%20P%22)):-e?(y=(a[e]=e%3CQ|e%3E=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle=%22hsl(%22+99*!a[e]+%22,%22+2*m+%22%,%22+50*y+%22%)%22,c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1):%20p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void%20F(-1);");
add_mark("2048", "javascript:(t=>{var s=document.createElement(t);s.type='text/java'+t;s.src='https://sheeptester.github.io/javascripts/2048.js';document.body.appendChild(s);})('script')");
add_label("Useful");
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
add_mark("FPS", "javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()");
add_mark("Dragon", 'javascript:var b=X=Y=T=L=0;document.addEventListener("click",function(a){a.preventDefault()},!0);document.addEventListener("mousedown",c);document.addEventListener("touchstart",c);function c(a){a.preventDefault();a.target!==document.documentElement&&a.target!==document.body&&(b=Date.now(),a.target.setAttribute("data-drag",b),a.target.style.position="relative",T=a.target.style.top.split("px")[0]||0,L=a.target.style.left.split("px")[0]||0);X=a.clientX||a.touches[0].clientX;Y=a.clientY||a.touches[0].clientY}document.addEventListener("mousemove",d);document.addEventListener("touchmove",d);function d(a){if(""!==b){var e=document.querySelector('[data-drag="'+b+'"]');e.style.top=parseInt(T)+parseInt((a.clientY||a.touches[0].clientY)-Y)+"px";e.style.left=parseInt(L)+parseInt((a.clientX||a.touches[0].clientX)-X)+"px"}}document.addEventListener("mouseup",f);document.addEventListener("touchend",f);function f(){b=""}document.addEventListener("mouseover",g);function g(a){a.target.style.cursor="move";a.target.style.boxShadow="inset lime 0 0 1px,lime 0 0 1px"}document.addEventListener("mouseout",h);function h(a){a.target.style.cursor=a.target.style.boxShadow=""};');
add_mark("Github Search", 'javascript:var query = prompt("Search GitHub.com");user_search_ary = /%5Eu:(.*)/g.exec(query);if (user_search_ary) %7Bwindow.location = "https://github.com/" + user_search_ary%5B1%5D;%7Delse if (query) %7Bwindow.location = "https://github.com/search?q=" + query;%7D');
add_mark("Inject JQuery", "javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();");
add_mark("Web Stack", "javascript: (function() { var d = document, e = d.getElementById('wappalyzer-container'); if (e !== null) { d.body.removeChild(e); } var u = 'https://www.wappalyzer.com/', t = new Date().getTime(), c = d.createElement('div'), p = d.createElement('div'), l = d.createElement('link'), s = d.createElement('script'); c.setAttribute('id', 'wappalyzer-container'); l.setAttribute('rel', 'stylesheet'); l.setAttribute('href', u + 'css/bookmarklet.css'); d.head.appendChild(l); p.setAttribute('id', 'wappalyzer-pending'); p.setAttribute('style', 'background-image: url(' + u + 'images/spinner.gif) !important'); c.appendChild(p); s.setAttribute('src', u + 'bookmarklet/wappalyzer.js'); s.onload = function() { window.wappalyzer = new Wappalyzer(); s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/apps.js'); s.onload = function() { s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/driver.js'); c.appendChild(s); }; c.appendChild(s); }; c.appendChild(s); d.body.appendChild(c); })();");
add_mark("Preformance Analyzer", 'javascript:(function(){eljs = document.createElement("script");eljs.src="https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js";document.body.appendChild(eljs)}())');
add_mark("Run Functional.js",
"javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://caiorss.github.io/functional.js' })();");
add_mark("Execute HTML", "javascript:var txt='';function getSelText(wndw){var sel='';if(document.all){sel=wndw.document.selection.createRange().text;}else{sel=wndw.window.getSelection();}return sel;}void(frms=window.frames);if(frms.length==0){txt=getSelText(window);}else{for(iQA=0;iQA&lt;frms.length;iQA++){void(txt=getSelText(frms[iQA]));if(txt.length&gt;0){break;}}}while(txt.length==0){txt=promt('Input:');}win=window.open('','','');void(win.document.write(txt));void(win.document.close())");
add_mark("Show Cookies", ShowCookies);
//==================
add_label("Security and Auditing");
add_mark("Remove Cookies", "javascript:void(document.cookie=null)");
add_mark("PwnYoutube", "javascript:(function(){url='http://deturl.com/download-video.js';document.body.appendChild(document.createElement('script')).src=url+'?'+new Date().getTime();})();");
add_mark("Full URLs", fullUrls)
add_label("Proxy");
add_mark("Interstellar", "https://gointerstellar.app/");
add_mark("Close", remove_panel);

subpanel.appendChild(UL);
subpan2.appendChild(UL2);
