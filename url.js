function hash() {
    var obj = {};
    $(location).prop("hash").slice(1).split("&").forEach(function (param) {var tab = param.split("="); if (tab.length === 2) {obj[tab[0]] = tab[1]; } });
    return obj;
}
function param() {
    var obj = {};
    $(location).prop("search").slice(1).split("&").forEach(function (param) {var tab = param.split("="); if (tab.length === 2) {obj[tab[0]] = tab[1]; } });
    return obj;
}
