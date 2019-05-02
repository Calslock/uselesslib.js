// Rounding input to precision decimal places
function roundUp(input, precision){
    var p = Math.pow(10, precision);
    return Math.round(input*p) / p;
}

// Clock with refreshfreq refresh frequency and output text
function clock(refreshfreq){
    var dt = new Date();
    var output = dt.toLocaleTimeString();
    setTimeout(clock, refreshfreq)
}
