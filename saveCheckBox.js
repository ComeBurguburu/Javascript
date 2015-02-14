"use strict";
/*global $, alert, prompt, console*/

var domaine = "******************";

function fetch() {
    
	if (localStorage === undefined) { return null; }
	
	var config, list;
    config = localStorage.getItem(domaine);
	
	if (config === null) { return {}; }
    
    try {
		list = JSON.parse(config);
		return list;
	} catch (e) {
		console.error("no JSON");
		return null;
	}
}

function configDisplay() {
	
    var load = function (event) {
        var name = event.data.name, list = event.data.list, i;
        if (list === null) {console.error("list null"); return; }

	    for (i = 0; i < list[name].length; i = i + 1) {
		    $("#" + list[name][i]).prop("checked", true).trigger("change");
	    }
    }, list = fetch();
    
    if (list === null) {
        return;
    }
	
	if (Object.keys(list).length) {
		$("#list").html("<u>Bookmarked Configuration</u><ul></ul>");
	} else {
		$("#list").empty();
	}
	
    Object.keys(list).forEach(function (name) {
	    $("#list ul").append($(document.createElement("li")).css({cursor: "pointer"}).text(name).on("click", {name: name, list: list}, function (event) {load(event); }));
	});
}
function configSave() {

    var list = fetch(), name, insert = function (value) {
	
	    localStorage.setItem(domaine, value);
	
	
	};
    if (list === null) { return; }

	name = prompt("choose a name");
	
	if (name === null || name === "") {
		return;
	}
	
	if (list[name] !== undefined) {
		alert("already exist");
		return;
	}
	
	list[name] = $("#options input[type='checkbox']:checked").map(function () { return $(this).prop("id"); }).get();
	
	insert(JSON.stringify(list));
    configDisplay();

}
