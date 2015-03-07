// ==UserScript==
//
//Displayable Name of your script 
// @name           Linkedin Sort
//
// brief description
// @description    Sort contacts on linkedin's people you might know page by number of common contacts.
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      http://erepublik.eksi273.com/
//
// Your name, userscript userid link (optional)   
// @author         Fatih Kurt (http://userscripts.org:8080/users/598254) 
//
// If you want to license out
// @license        GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html) 
//
//(optional) may be used by browsers to display an about link
// @homepage       http://www.eksi273.com/
//
//Version Number
// @version        1.00
//
// Urls process this user script on
// @include        http://www.linkedin.com/people/pymk?*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
//
// @history        1.0 first version
//
// ==/UserScript==

function start(){
insertButtons();
window.setInterval(function(){
	$("#sortcontacts").html("Sort All " + $(".card").length + " Contacts");
	},100);
}

function insertButtons(){
$("body").append('<button id="sortcontacts" style="position: fixed;bottom: 40px;right: 40px;width: 7em;font-size: 16px;cursor: pointer;background-color: rgba(204, 204, 204, 0.37);font-weight: 700;padding: 8px;">Sort Contacts</button>');
document.getElementById("sortcontacts").onclick = function(){
	var contacts = sortContacts(getContacts());
	var parent = $("#control_gen_4");
	parent.empty();
	for(var i=0;i<contacts.length;i++) parent.append(contacts[i]);
	window.scrollTo(0,0);
	};
	return;
$("#sortcontacts").on("click",function(){
	var contacts = sortContacts(getContacts());
	var parent = $("#control_gen_4");
	parent.empty();
	for(var i=0;i<contacts.length;i++) parent.append(contacts[i]);
	window.scrollTo(0,0);
	});
}

function getContacts(){
var c = $(".card");
for(var i=0;i<c.length;i++){
	if(c[i].getElementsByClassName("glyph-text")[0]) c[i]["noc"] = c[i].getElementsByClassName("glyph-text")[0].innerHTML*1;
	else c[i]["noc"] =  0;	
	}
return c;
}

function sortContacts(cnts){
return cnts.sort(function(a,b){
	if(a.noc<b.noc) return 1;
	else return -1;
	});
}

start();