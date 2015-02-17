function hash() {
    var obj = {};
    $(location).prop("hash").slice(1).split("&").forEach(function (param) {var tab = param.split("="); if (tab.length === 2) {if (obj[tab[0]] === undefined) {obj[tab[0]] = tab[1]; } else {if (typeof obj[tab[0]] !== "object") {obj[tab[0]] = [obj[tab[0]]]; obj[tab[0]].push(tab[1]); } } } });
    return obj;
}
function param() {
   var obj = {};
   $(location).prop("search").slice(1).split("&").forEach(function (param) {var tab = param.split("="); if (tab.length === 2) {if (obj[tab[0]] === undefined) {obj[tab[0]] = [tab[1]]; } else { obj[tab[0]].push(tab[1]); } } });
   return obj;
}
