const totalResult = document.getElementById('totalResult');
const tipResult = document.getElementById('tipResult');

function fairTip() {
    let total = document.getElementById('billTotal').value;
    let totalDollars = total*1.15
    totalResult.innerHTML = "$" + totalDollars.toFixed(2);
    let tip = totalDollars - total;
    tipResult.innerHTML = "$" + tip.toFixed(2);
}

function goodTip() {
    let total = document.getElementById('billTotal').value;
    let totalDollars = total*1.20
    totalResult.innerHTML = "$" + totalDollars.toFixed(2);
    let tip = totalDollars - total;
    tipResult.innerHTML = "$" + tip.toFixed(2);
}

function greatTip() {
    let total = document.getElementById('billTotal').value;
    let totalDollars = total*1.25
    totalResult.innerHTML = "$" + totalDollars.toFixed(2);
    let tip = totalDollars - total;
    tipResult.innerHTML = "$" + tip.toFixed(2);
}
