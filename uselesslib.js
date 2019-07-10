// Rounding input to precision decimal places
function roundUp(input, precision){
    return Math.round(input*Math.pow(10, precision)) / p;
}

// Clock with refreshfreq refresh frequency and output text
function clock(refreshfreq){
    var output = new Date().toLocaleTimeString();
    setTimeout(clock, refreshfreq);
}

//Conversion Number->Array of 0-9 and Array of 0-9->Number
function arrayToNumber(inarray){
    var output = 0;
    for(i=0; i<inarray.length; i++) output+=[inarray.length-1-i] * Math.pow(10,i);
    return output;
}

function numberToArray(inNumber){
    var output = Array.from(String(inNumber), Number);
    return output;
}
