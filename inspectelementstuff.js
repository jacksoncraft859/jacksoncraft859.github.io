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
 
}


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
    if (subpanel.hidden ==false){
        subpanel.hidden = true;
    }else{
        subpanel.hidden = false;
    }
};

panel = create_tag("div")

panelbar = create_tag("div")

//panelbar.innerHTML = "<a href='#' onclick='hide_panel()' id='panel_switch' >Hide Panel<a>"
panelbar.innerHTML = "JS PANEL" ;

// panelbar.style.position = "fixed"
panelbar.style.height = "20px";
panelbar.style["background-color"] = "yellow";
panelbar.style["z-index"] = 10e5;
panelbar.onclick = hide_panel ;

subpanel = create_tag("div")


panel.id = "InjectorPanel";
panel.style.position = "fixed";
panel.style.width = "150px";
//panel.style.height = "500px";
panel.style.top = "0px";
panel.style["background-color"] = "lightblue";


panel.appendChild(panelbar);
panel.appendChild(subpanel);

document.querySelector("body").appendChild(panel);

 
// Serch Web Archive
//htmlcode =  "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()' > Web Archive</a></ul>" ;

//==================
add_label("Inspect Element");
add_mark("eInfo", "javascript:(function()%7B(function()%7B%0A    function sanitize(arg) %7B%0A        return(arg.replace(%2F<%2Fg%2C"%26lt%3B").replace(%2F>%2Fg%2C"%26gt%3B"))%3B%0A    %7D%0A%0A    const version %3D "1.0.3"%3B%0A%0A    var einfo %3D %7B%0A        "window"%3A ""%2C%0A        "display"%3A ""%2C%0A        "editor"%3A ""%2C%0A        "selected"%3A ""%2C%0A        "esaves"%3A %5B%5D%2C%0A        "config"%3A %7B%0A            "element"%3A ""%2C%0A            "showBr"%3A false%2C%0A            "showScript"%3A false%2C%0A            "eLock"%3A true%0A        %7D%2C%0A    "addAttr"%3A (function(attr_name%2Cattr_value) %7B%0A        newvalue %3D %60<span id%3D"einfo_protect" style%3D"color%3Apurple%3B">%24%7Bsanitize(attr_name)%7D<%2Fspan>%3D<span id%3D"einfo_protect" style%3D"color%3Adarkgoldenrod%3B">"%24%7Bsanitize(attr_value)%7D"<%2Fspan>%60%3B%0A        einfo.display.innerHTML %2B%3D "<br id%3D%5C"einfo_br%5C">" %2B newvalue%3B%0A    %7D)%0A    %7D%0A    einfo.window %3D document.createElement("div")%3B%0A    einfo.window.id %3D "einfo_window"%3B%0A    einfo.window.style %3D "width%3A500px%3Bheight%3A400px%3Bbackground%3Alightgray%3Bborder%3A10px solid gray%3Bborder-radius%3A10px%3Bfont-family%3Amonospace%3Btext-align%3Acenter%3Bfont-style%3Aoblique%3Bdisplay%3Ainline-block%3Boverflow-x%3Ascroll%3Boverflow-y%3Ascroll%3Bwhite-space%3Anowrap%3Bresize%3Aboth%3Bz-index%3A10000%3Bcolor%3Ablack%3Bposition%3Afixed%3Btop%3A1px%3Bright%3A1px%3B"%3B%0A    einfo.window.innerHTML %3D "<br id%3D%5C"einfo_br%5C"><h1 id%3D%5C"einfo_header_h1%5C" style%3D%5C"display%3Ainline%3B%5C">eInfo<%2Fh1>%26nbsp%3B<p id%3D%5C"einfo_header_p%5C" style%3D%5C"display%3Ainline%3B%5C">" %2B version %2B "<%2Fp><br id%3D%5C"einfo_br%5C"><sup id%3D%5C"einfo_header_sup%5C">An HTML debugging tool<%2Fsup><br id%3D%5C"einfo_br%5C">By%3A <a style%3D%5C"color%3Ablue%3B%5C" href%3D%5C"https%3A%2F%2Frepl.it%2F%40ChezCoder%5C" target%3D%5C"_blank%5C" id%3D%5C"einfo_creator%5C" style%3D%5C"text-decoration%3Anone%3B%5C">%40ChezCoder<%2Fa><br id%3D%5C"einfo_br%5C"><br id%3D%5C"einfo_br%5C">"%3B%0A%0A    einfo.display %3D document.createElement("div")%3B%0A    einfo.display.id %3D "einfo_display"%3B%0A    einfo.display.style %3D "text-align%3Aleft%3Bwidth%3Acalc(100%25-5)%3Bheight%3A100px%3Bbackground%3Atransparent%3Bborder-top%3A10px darkgray solid%3Bborder-bottom%3A10px darkgray solid%3Boverflow-x%3Ascroll%3Boverflow-y%3Ascroll%3Bwhite-space%3Anowrap%3Bmargin-top%3A10px%3Bpadding%3A5px%3Bfont-style%3Anormal%3Bfont-weight%3Anone%3Bfont-size%3A15px%3B"%3B%0A    einfo.display.innerHTML %3D sanitize("<") %2B "<span id%3D%5C"einfo_protect%5C" style%3D%5C"color%3Ablue%3B%5C">element<%2Fspan>" %2B sanitize(">") %2B "<br id%3D%5C"einfo_br%5C"><span id%3D%5C"einfo_protect%5C" style%3D%5C"color%3Apurple%3B%5C">name<%2Fspan>%3D<span id%3D%5C"einfo_protect%5C" style%3D%5C"color%3Adarkgoldenrod%3B%5C">%5C"value%5C"<%2Fspan>"%0A%0A    einfo.editor %3D document.createElement("div")%3B%0A    einfo.editor.id %3D "einfo_editor"%3B%0A    einfo.editor.style %3D "text-align%3Aleft%3Bwidth%3Acalc(100%25-5)%3Bheight%3A100px%3Bbackground%3Awhite%3Boverflow-x"%0A%0A    einfo.config.element %3D document.createElement("div")%3B%0A    einfo.config.element.id %3D "einfo_config_editor"%0A    einfo.config.element.innerHTML %3D %60<span id%3D"einfo_protect" style%3D"font-size%3A20px%3B">Settings<%2Fspan><br id%3D%5C"einfo_br%5C"><input type%3D"checkbox" id%3D"einfo_config_elock" checked>eLock<br id%3D%5C"einfo_br%5C"><input type%3D"checkbox" id%3D"einfo_config_br">%26lt%3Bbr%26gt%3B Visibility<br id%3D%5C"einfo_br%5C"><input type%3D"checkbox" id%3D"einfo_config_script">%26lt%3Bscript%26gt%3B Visibility%60%3B%0A    einfo.config.element.style %3D "text-align%3Acenter%3Bfont-size%3A15px%3Bborder-top%3A10px solid darkgray%3B"%0A%0A    einfo.window.appendChild(einfo.config.element)%3B%0A    einfo.window.appendChild(einfo.display)%3B%0A    document.body.appendChild(einfo.window)%3B%0A%0A    document.body.addEventListener("mouseover"%2Cfunction(e)%7B%0A        %2F%2F console.log(einfo)%0A        if (!e.target.id.startsWith("einfo_") %26%26 !e.target.id.startsWith("pipejs_") %26%26 e.target.nodeName !%3D "BODY" %26%26 !e.target.parentElement.id.startsWith("einfo_") %26%26 !einfo.selected %26%26 !e.target.getAttribute("einfo_protect")) %7B%0A            einfo.display.innerHTML %3D %60%26lt%3B<span id%3D"einfo_protect" style%3D"color%3Ablue%3B">%24%7Bsanitize(e.target.nodeName)%7D<%2Fspan>%26gt%3B%60%3B%0A            Array.from(e.target.attributes).forEach(function(attrObj)%7B%0A                einfo.addAttr(attrObj.name%2CattrObj.value)%3B%0A            %7D)%3B%0A        %7D else %7B%0A            einfo.display.innerHTML %3D einfo.display.innerHTML%3B%0A        %7D%0A    %7D)%3B%0A%0A    document.body.addEventListener("mousedown"%2Cfunction(e)%7B%0A        %2F%2F console.log(einfo)%0A        if (einfo.config.eLock) %7B%0A%0A            if (!e.target.id.startsWith("einfo_") %26%26 !e.target.id.startsWith("pipejs_") %26%26 e.target.nodeName !%3D "BODY" %26%26 !e.target.parentElement.id.startsWith("einfo_") %26%26 !einfo.selected) %7B%0A                e.preventDefault()%3B%0A                e.stopPropagation()%3B%0A                e.stopImmediatePropagation()%3B%0A                einfo.esaves.push(e.target.style.background)%3B%0A                e.target.style.background %3D "yellow"%3B%0A                einfo.selected %3D e.target%3B%0A            %7D else %7B%0A                einfo.selected.style.background %3D einfo.esaves%5B0%5D%3B%0A                einfo.esaves %3D %5B%5D%3B%0A                einfo.selected %3D ""%3B%0A            %7D%0A        %7D%0A    %7D)%3B%0A%0A    document.body.addEventListener("keyup"%2Cfunction(e)%7B%0A        console.log(e.key)%0A        %2F%2F if (e.key %3D%3D " " %26%26 einfo.config.eLock) %7B%0A        %2F%2F     if (!e.target.id.startsWith("einfo_") %26%26 !e.target.id.startsWith("pipejs_") %26%26 e.target.nodeName !%3D "BODY" %26%26 !e.target.parentElement.id.startsWith("einfo_") %26%26 !einfo.selected) %7B%0A        %2F%2F         e.preventDefault()%3B%0A        %2F%2F         e.stopPropagation()%3B%0A        %2F%2F         e.stopImmediatePropagation()%3B%0A        %2F%2F         einfo.esaves.push(e.target.style.background)%3B%0A        %2F%2F         e.target.style.background %3D "yellow"%3B%0A        %2F%2F         einfo.selected %3D e.target%3B%0A        %2F%2F     %7D else %7B%0A        %2F%2F         einfo.selected.style.background %3D einfo.esaves%5B0%5D%3B%0A        %2F%2F         einfo.esaves %3D %5B%5D%3B%0A        %2F%2F         einfo.selected %3D ""%3B%0A        %2F%2F     %7D%0A        %2F%2F %7D%0A    %7D)%3B%0A%0A    setInterval(function()%7B%0A        einfo.config.eLock %3D document.getElementById("einfo_config_elock").checked%3B%0A        einfo.config.showScript %3D document.getElementById("einfo_config_script").checked%3B%0A        einfo.config.showBr %3D document.getElementById("einfo_config_br").checked%3B%0A        if (einfo.config.showBr) %7B%0A            Array.from(document.querySelectorAll('br')).forEach(function(el) %7B%0A                if (el.id !%3D "einfo_br") %7B%0A                    let showBr %3D document.createElement("div")%3B%0A                    showBr.id %3D "einfo_dummybr"%3B%0A                    showBr.style.display %3D "inline"%3B%0A                    showBr.innerHTML %3D "<span id%3D%5C"einfo_protect%5C" style%3D%5C"color%3Agray%3Bfont-family%3Amonospace%3Bbackground%3Awhite%3B%5C">%26ltbr%26gt%3B<%2Fspan><br id%3D%5C"einfo_br%5C">"%3B%0A                    el.replaceWith(showBr)%3B%0A                %7D%0A            %7D)%3B%0A        %7D else if (!einfo.config.showBr) %7B%0A            Array.from(document.querySelectorAll('div')).forEach(function(el) %7B%0A                if (el.id %3D%3D "einfo_dummybr") %7B%0A                    let hideBr %3D document.createElement("br")%3B%0A                    el.replaceWith(hideBr)%3B%0A                %7D%0A            %7D)%3B%0A        %7D%0A%0A        if (einfo.config.showScript) %7B%0A            Array.from(document.querySelectorAll("script")).forEach(function(el)%7B%0A                el.style %3D "display%3Ablock%3Bcolor%3Agray%3Bfont-family%3Amonospace%3B"%3B%0A                el.innerHTML %3D el.innerHTML.replace(%2F%5C%5Cn%2Fg%2C"<br>")%3B%0A                el.setAttribute("einfo_protect"%2C"true")%0A            %7D)%3B%0A        %7D else if (!einfo.config.showScript) %7B%0A            Array.from(document.querySelectorAll("script")).forEach(function(el)%7B%0A                el.style.display %3D "none"%3B%0A                el.innerHTML %3D el.innerHTML.replace(%2F%5C<br%5C>%2Fg%2C"%5C%5Cn")%3B%0A            %7D)%3B%0A        %7D%0A    %7D%2C1000)%3B%0A%7D())%3B%7D)()%3B");
add_mark("JS Shell", "javascript:(function(){pipejs = document.createElement("script");pipejs.src='https://chezmarklets--chezcoder.repl.co/scripts/pipe.js';document.body.appendChild(pipejs)}())");
add_mark("DOM Editor", "javascript:(function()%7B(function () %7B%0A  var changeDom %3D (() %3D> %7B%0A    document.body.parentElement.innerHTML %3D document.getElementById("dom_edit_drag_modal_code_editor").textContent%3B%0A%0A    document.getElementById("dom_edit_drag_modal_code_editor").textContent %3D document.body.parentElement.innerHTML%3B%0A  %7D)%3B%0A  document.body.parentElement.innerHTML %2B%3D '<div id%3D"dom_edit_drag_modal">       <div id%3D"dom_edit_drag_modal_header">DOM Editor<%2Fdiv><textarea id%3D"dom_edit_drag_modal_code_editor" cols%3D"50" rows%3D"25"><%2Ftextarea><br><button onclick%3D"changeDom()">Run %26gt%3B<%2Fbutton><br><br><%2Fdiv>'%3B%0A  document.getElementById("dom_edit_drag_modal").style %3D "position%3Aabsolute%3Bz - index%3A 9%3Bbackground - color%3A %23f1f1f1%3Btext - align%3A center%3Bborder%3A 1px solid %23d3d3d3%3B"%3B%0A  document.getElementById("dom_edit_drag_modal_header").style %3D "padding%3A10px%3Bcursor%3A move%3Bz - index%3A 10%3Bbackground - color%3A orange%3Bcolor%3A %23fff%3Bfont - family%3A monospace%3Bfont - size%3A 50px%3B"%3B%0A  document.getElementById("dom_edit_drag_modal_code_editor").style %3D "resize%3A vertical%3B"%3B%0A  dragElement(document.getElementById("dom_edit_drag_modal"))%3B%0A  function dragElement(e) %7B%0A    var n %3D 0%2C t %3D 0%2C o %3D 0%2C l %3D 0%3B%0A    document.getElementById(e.id %2B "_header").onmousedown %3D (u %3D> %7B (u %3D u %7C%7C window.event).preventDefault()%2C o %3D u.clientX%2C l %3D u.clientY%2C document.onmouseup %3D (() %3D> %7B document.onmouseup %3D null%2C document.onmousemove %3D null %7D)%2C document.onmousemove %3D (u %3D> %7B (u %3D u %7C%7C window.event).preventDefault()%2C n %3D o - u.clientX%2C t %3D l - u.clientY%2C o %3D u.clientX%2C l %3D u.clientY%2C e.style.top %3D e.offsetTop - t %2B "px"%2C e.style.left %3D e.offsetLeft - n %2B "px" %7D) %7D)%0A  %7D%3B%0A  document.getElementById("dom_edit_drag_modal_code_editor").textContent %3D document.body.parentElement.innerHTML%0A%7D)()%7D)()%3B");
add_label("Useful");
add_mark("Tiny URL", "javascript:void(open('http://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))");
add_mark("QR Code", "javascript:(function(){if(document.getElementById){var x=document.body;var o=document.createElement('script');if(typeof(o)!='object') o=document.standardCreateElement('script');o.setAttribute('src','http://qrbookmarklet.googlecode.com/svn/trunk/qr.js');o.setAttribute('type','text/javascript');x.appendChild(o);}})();");
add_mark("Web Archive", "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()");
add_mark("Image Search" , "javascript:void((function(){var sir=document.createElement('script');sir.setAttribute('src','http://cdnjs.cloudflare.com/ajax/libs/require.js/0.26.0/require.min.js');sir.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sir);var sib=document.createElement('script');sib.setAttribute('src','http://jarred.github.com/src-img/js/app/bookmarklet.js?version=0.66');sib.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sib);})());") ;
//add_mark("Show All Links", "#",  showAllLinks)
//add_mark("Show All Links", "javascript:" + showAllLinks.toString())
add_mark("Show All Links", showAllLinks)
//==================
add_label("Web Dev");
add_mark("Inject JQuery", "javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();");
add_mark("Close", remove_panel)


subpanel.appendChild(UL);
