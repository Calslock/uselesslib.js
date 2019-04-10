function roundUp(input, precision){
    var p = Math.pow(10, precision);
    return Math.round(input*p) / p;
}