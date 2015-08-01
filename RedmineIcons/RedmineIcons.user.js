// ==UserScript==
// @name         Redmine Icons
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @include      http*://*
// require		 https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css
// require		 https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css
// require		 https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js
// @grant        none
// ==/UserScript==

function start(){
	//$("head").append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>');
	if($("[name=description]").attr("content") != "Redmine") return;
    $("li>.overview").attr("title",$("li>.overview").html()).html('<span class="glyphicon glyphicon-home"></span>');
    $("li>.requirements").attr("title",$("li>.requirements").html()).html('<span class="glyphicon glyphicon-asterisk"></span>');
    $("li>.activity").attr("title",$("li>.activity").html()).html('<span class="glyphicon glyphicon-time"></span>');
    $("li>.project-reports").attr("title",$("li>.project-reports").html()).html('<span class="glyphicon glyphicon-folder-open"></span>');
    $("li>.issues").attr("title",$("li>.issues").html()).html('<span class="glyphicon glyphicon-flag"></span>');
    $("li>.new-issue").attr("title",$("li>.new-issue").html()).html('<span class="glyphicon glyphicon-plus"></span>');
    $("li>.gantt").attr("title",$("li>.gantt").html()).html('<span class="glyphicon glyphicon-tasks"></span>');
    $("li>.calendar").attr("title",$("li>.calendar").html()).html('<span class="glyphicon glyphicon-calendar"></span>');
    $("li>.news").attr("title",$("li>.news").html()).html('<span class="glyphicon glyphicon-bullhorn"></span>');
    $("li>.documents").attr("title",$("li>.documents").html()).html('<span class="glyphicon glyphicon-duplicate"></span>');
    $("li>.wiki").attr("title",$("li>.wiki").html()).html('<span class="glyphicon glyphicon-info-sign"></span>');
    $("li>.extended-wiki").attr("title",$("li>.extended-wiki").html()).html('<span class="glyphicon glyphicon-education"></span>');
    $("li>.files").attr("title",$("li>.files").html()).html('<span class="glyphicon glyphicon-file"></span>');
    $("li>.risk-assessment").attr("title",$("li>.risk-assessment").html()).html('<span class="glyphicon glyphicon-alert"></span>');
    $("li>.settings").attr("title",$("li>.settings").html()).html('<span class="glyphicon glyphicon-cog"></span>');
    $('#main-menu-sub>ul').find("a").attr("style","font-size:22px;margin-right:13px;");
    $("#main-menu").tooltip();
    $("#main-menu>ul").remove();
}
var a = document.createElement("link");
a.rel = "stylesheet";
a.href = href="https://dl.dropboxusercontent.com/u/87240333/WEB/libs/bootstrap/bootstrapicons.css";
document.head.appendChild(a);
//$("head").append('<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/87240333/WEB/libs/bootstrap/bootstrapicons.css">');

document.addEventListener('DOMContentLoaded', function (){start();})
//start();

