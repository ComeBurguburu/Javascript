function time(callback) {
    var i, end, start = new Date().getTime();
    for (i = 0; i < 100000; i = i + 1) {
        callback();
    }
    end = new Date().getTime();
    console.log((end - start) / 1000);
}
