let result=document.getElementById("result");
let input=document.getElementById("input");
let select=document.getElementById("select");
let enc=document.getElementById("enc");
let dec=document.getElementById("dec");

let clear=document.getElementById("clear");



// function Encrypt(txt) {
// txt=btoa(txt);
// }
// function Decrypt(txt) {
//     txt=atob(txt);
//THE RIGHT IS  WINDOW.BTOA/ATOB
// }
enc.addEventListener("click",()=>{

    console.log(input.value);
result.value=window.btoa(input.value);
});
clear.addEventListener("click",()=>{
input.value="";
input.placeholder="Enter text here";

result.value=" ";
})
dec.addEventListener("click",()=>{
result.value=window.atob(input.value);

});
