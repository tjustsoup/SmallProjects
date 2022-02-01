let add = document.getElementById("increase");
let sub = document.getElementById("decrease");
let zero = document.getElementById("zero");
let count = 0;

add.onclick = function () {
  count += 1;
  value.innerHTML = count;
  return count;
};

sub.onclick = function () {
  count -= 1;
  value.innerHTML = count;
  return count;
};

zero.onclick = function () {
  count = 0;
  value.innerHTML = count;
  return count;
};

if (count > 0) {
    document.getElementById("value").style.color = "green";
};
if (count < 0) {
    document.getElementById("value").style.color = "red";
};