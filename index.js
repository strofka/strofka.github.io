let initialSource = 'Latin';

let initialTarget = 'Elbasani Script';

$(document).ready(function() {
    $(".subheader.source").html(initialSource);
    $(".subheader.target").html(initialTarget);
    $(".textarea.source").val('');
    $(".textarea.target").val('');
});

function switchLanguage() {
    let target = initialSource;
    initialSource = initialTarget;
    initialTarget = target;

    $(".subheader.source").html(initialSource);
    $(".subheader.target").html(initialTarget);

    const input = $(".textarea.source").val();
    const output = $(".textarea.target").val();

    if (output) {
        $(".textarea.source").val(output);
        $(".textarea.target").val(input);
    }
}

let forwardMap = new Map();

forwardMap.set("\ud801\udd00", "A");
forwardMap.set("\ud801\udd01", "B");
forwardMap.set("\ud801\udd02", "C");
forwardMap.set("\ud801\udd03", "Ç");
forwardMap.set("\ud801\udd04", "D");
forwardMap.set("\ud801\udd07", "E");
forwardMap.set("\ud801\udd08", "Ë");
forwardMap.set("\ud801\udd09", "F");
forwardMap.set("\ud801\udd0A", "G");
forwardMap.set("\ud801\udd0C", "H");
forwardMap.set("\ud801\udd0D", "I");
forwardMap.set("\ud801\udd0E", "J");
forwardMap.set("\ud801\udd0F", "K");
forwardMap.set("\ud801\udd10", "L");
forwardMap.set("\ud801\udd12", "M");
forwardMap.set("\ud801\udd13", "N");
forwardMap.set("\ud801\udd16", "O");
forwardMap.set("\ud801\udd17", "P");
forwardMap.set("\ud801\udd18", "Q");
forwardMap.set("\ud801\udd19", "R");
forwardMap.set("\ud801\udd1B", "S");
forwardMap.set("\ud801\udd1D", "T");
forwardMap.set("\ud801\udd1F", "U");
forwardMap.set("\ud801\udd20", "V");
forwardMap.set("\ud801\udd21", "X");
forwardMap.set("\ud801\udd22", "Y");
forwardMap.set("\ud801\udd23", "Z");

let reverseMap = new Map();
for (let key of forwardMap.keys()) {
    reverseMap.set(forwardMap.get(key), key);
}

forwardMap.set("\ud801\udd05", "ND");
forwardMap.set("\ud801\udd06", "DH");
forwardMap.set("\ud801\udd0B", "GJ");
forwardMap.set("\ud801\udd11", "LL");
forwardMap.set("\ud801\udd14", "NA");
forwardMap.set("\ud801\udd15", "NJ");
forwardMap.set("\ud801\udd1A", "RR");
forwardMap.set("\ud801\udd1C", "SH");
forwardMap.set("\ud801\udd1E", "TH");
forwardMap.set("\ud801\udd24", "ZH");
forwardMap.set("\ud801\udd25", "XH");
forwardMap.set("\ud801\udd26", "GH");
forwardMap.set("\ud801\udd27", "KH");

$(function(){
    $('#translate').click(function() {
        translate();
    });

    $('#switch').click(function() {
        switchLanguage();
    });
});

function translate() {
    let usedMap = initialSource === 'Latin' ? reverseMap : forwardMap;
    let input = $(".textarea.source").val();

    if(initialSource === 'Latin') {
        input = input.toUpperCase();
    }

    let output = "";
    for (let c of input) {
        if (usedMap.has(c)) {
            output = output + usedMap.get(c);
        } else {
            output = output + c;
        }
    }

    $(".textarea.target").val(output);
}
