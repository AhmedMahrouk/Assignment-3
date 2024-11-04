var a = document.getElementById('aInput');//cosine law
var b = document.getElementById('bInput');
var c = document.getElementById('cInput');
var result = document.getElementById('result');

document.getElementById("coSine").addEventListener("click", function() {
    var aValue = parseFloat(a.value);
    var bValue = parseFloat(b.value);
    var cValue = parseFloat(c.value);

    var angleInRadians = cValue * (Math.PI / 180);

    result.value = Math.sqrt(aValue * aValue + bValue * bValue-2*bValue*aValue*Math.cos(angleInRadians));
});

var a1 = document.getElementById('aInput1');
var b1 = document.getElementById('bInput1');
var result1 = document.getElementById('result1');


document.getElementById("Asymptote").addEventListener("click", function() {
    var m = parseFloat(a1.value);
    var n = parseFloat(b1.value);


    if (m === n) {
        result1.value = "The asymptote is horizontal";
    } else if (n > m) {
        result1.value = "The asymptote is the x-axis";
    } else {
        let difference = m - n;
        result1.value = `The asymptote difference is ${difference}.`;
    }
});

var a2 = document.getElementById('aInput2');
var result2 = document.getElementById('result2');

document.getElementById("piApproximation").addEventListener("click", function() {
    var n = parseFloat(a2.value);

    let piApproximation = 0;
    for (let i = 0; i < n; i++) {
        piApproximation += (Math.pow(-1, i)) / (2 * i + 1);
    }
    piApproximation *= 4;
    result2.value = `The value of π approximation is ${piApproximation}.`;
})