var code = document.getElementById("code");
var htm = document.getElementById("html");


var result = document.getElementById("result");
function onrun() {
    localStorage.setItem("Scode", code.value);
    result.innerHTML = code.value;
}

function onHTML() {
    code.value = htm.innerText;
}
onload = () => {
    code.value = localStorage.getItem("Scode");
}

function ondelete() {
    code.value = "";
    result.innerHTML = "results appear here";
    localStorage.removeItem("thecode");
}
