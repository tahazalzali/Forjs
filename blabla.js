window.console&&console.log("jlkjdf");
function counter(){
    this.x=0;
    console.log("counter started");
    this.add=function(){
       console.log("adding value...");
     this.x+=1;
     console.log("x= "+this.x);
    }
    this.sub=function(){
     
        console.log("subtracting value...")
    this.x-=1;
    console.log("x= "+this.x);
    }
}
function forReload(){
 location.reload();
}
document.querySelector("#ar").onclick=()=>{
// alert("ar clicked"); true
    setLang("ar");
localStorage.setItem("lang","ar");
}
document.querySelector("#en").onclick=()=>{
setLang("en");
localStorage.setItem("lang","en");
document.getElementById("ttl").innerHTML="first project";
}
onload=()=>{
 console.log("743");
   setLang(localStorage.getItem("lang"));
}
function setLang(lang){
if(lang=="en"){

}
else if (lang=="ar"){
document.title.innerHTML="طه زلزلي";
document.getElementById("ttl").innerHTML="طه زلزلي"
}
}
var path =location.pathname;
var index=path.lastIndexOf("/")+1;
var finalLocation=path.substring(index);
console.log(finalLocation);
console.log(index);
console.log("543");
document.body.onload= () =>{
  
        console.log("body is loading");
}
function beforeunloads(){
return"empty";
}
function beforeprints(){
    alert("Print is ON");
    
    }
    function afterPrint(){
        alert("printing...");
    }

function togetotherWebsite(){
    location.assign("https://www.youtube.com/watch?v=QZxgjWanxIw&list=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D&index=52");
}
// document.getElementById("alet").addEventListener("click",function(){
//     alert("This slide will be removed");
// })\
// mouseenter mouseleave mousemove
document.getElementById("cus").addEventListener("click",()=>{
    location.assign("https://www.youtube.com/watch?v=QZxgjWanxIw&list=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D&index=52");

});
function keySelection(event){
if(event.key=="t"){
    alert("t for taha");
}
}
function forAhmad(event){
    if(event.key=="a"){
        alert("for ahmad");
    }
}
document.addEventListener("load",function(){
    alert("HI AHMAD");
})
// document.addEventListener('copy',function coppeid(){
//     alert("coppied");
// });
class forcoppy{
    constructor(){
   document.addEventListener("copy",function(){
    alert("coppeid");   });
document.getElementById("allot").addEventListener("paste",function(){
    alert("paste");
});

    }
 oncut() { 
        alert("cut");
     }
}

onload =new forcoppy();

function oncute(){
    alert("cutted");
}
$("#formcheck").submit(function () { 
alert("submitted");
    
});
// function forcopy(){
//     alert("coppied");
// }
//document.title="Taha zalzali";
var a=document.getElementById("third");
console.log(a.innerHTML);
var txt34="DKL ddl $ ajax $ dfj $ ajax dkp ajax ";
console.log(txt34.length);
txt34=txt34.toLowerCase();
console.log("search result for ajax : "+ txt34.search("ajax"))

console.log("index of  "+ txt34.indexOf("d"));
 console.log("statswith method: "+txt34.startsWith("d"));
console.log("endswith method : "+txt34.endsWith(" "))

console.log(" last index of"+ txt34.lastIndexOf("d"));
txt34=txt34.replace(/\$/gi,"tt");
console.log("replace method :"+txt34)+" (we just delete the $ sign ) ";
txt34=txt34.replace(/d/gi,function(x){
    return x.toUpperCase();
})
console.log("replace with function to upperCase for (d) "+ txt34);
var taxoti="Allow taha zalzali";
console.log(taxoti+"before substring "+"getting taha from substring method : "+ taxoti.substring(5,10))
var datasave1={name:"taha",arrayOfLanguages:["html","css","javascript"],age:12,toUpperCase3:function(x){
return  x.toUpperCase();   
}}
var xato=102;
if( xato  >=110){
    console.log("given x is > 110  ");
}
else if(xato>=100){
    console.log("given x is >100 (after checking if its>110 , its no so it will search HERE!)");
}

else{console.log("x<100")}


console.log(datasave1);
datasave1.nationasion="Lebanese";
console.log(datasave1);
console.log("alown");
var json231={"name ":"taha","skills ":{"html":"4/5","css ":"4/5","JAVASCRISPT":"4/5"},"hobbies":["swimming ","flying ","making mone[top]","being rich[condition to let phone and sex]"]}
for (let index = 0; index <json231.length ; index++) {
console.log(json231["name"]);

    
}
var major ="CCE";
switch(major){
    case("CCE") :
    console.log("You choose computer engineering major (detected by switch case method)");
    break;
    case("EEE"):
    console.log("you choose electrical engineer (detected by switch case method)");
    break;
    default:
        console.log("you dont choose the correct available major");
    break;
    
} 
for(let i in document.images){
document.images[i].width="10%";
}
console.log(document.links.length);
console.log(666);
var counte=1;
while(counte<=10){ 
// var ees= document.getElementById("fourthat").innerHTML+="Allow taha num: "+counte;
// console.log(ees);
++counte;
} 
function getval(id){
    console.log(43)
    console.log( document.getElementById(id).value);
} ;

var objectsForUsers={
user1:{email:"tatf#",pass:"jdkfj",ip:"43.55.454.1"},
user2:{email:"tDCatf#",pass:"jfbhtrfj",ip:"45.545.454.1"},
user3:{email:"tatfX#",pass:"kffj",ip:"43.5.454.1"},
user4:{email:"tatXf#",pass:"fjad",ip:"43.45.454.1"},
user5:{email:"tatXfsd#",pass:"jsddkfj",ip:"45545.454.1"},
};
// for(var i in objectsForUsers){
//     document.getElementById("jstbody").innerHTML+="<tr>"
//     +"<td>"+ objectsForUsers[i].email+"</td>"
//     +"<td>"+ objectsForUsers[i].pass+"</td>"
//     +"<td>"+objectsForUsers[i].ip +"</td>"
//     +"</tr>"
// };
console.log(objectsForUsers.user1.ip+"  SEARCH HERE");

console.log(datasave1.toUpperCase3(txt34));
var sus="LLA";
var whyimdothis=sus+txt34;
Object.keys(objectsForUsers).forEach(element=>{
console.log(objectsForUsers[element].pass);
});
var valueFtry=document.querySelector("#allot").value;
console.log("Here search for value  :"+valueFtry);
let Taha1Skills=["html","css","javascript","git","bootstrap","java","Mysql"];
// for(var i in Taha1Skills){
//     console.log(Taha1Skills[i]);
//     console.log("fasle no2ta fasle quote ");
// }
// Taha1Skills.forEach(element => {
// for (let index = 0; index < Taha1Skills.length; index++) {
   
      
  



//  document.querySelector("#treeForeach").innerHTML+="<td>"+index+": "+element+"</td>" ;


// }});
var palapel={taha:{"pass":"tshaah","ip":"192.168.1.1"},nour:{"pass":"thaadh","ip":"192.168.1.1"},
jaafar:{pass:"thaah",ip:"192.168.1.1"}
}; 
console.log(232);

// for(var i in palapel){
//     console.log(palapel[i].ip);

// }
//for nothing 
Object.keys(palapel).forEach(element => {
    console.log(palapel[element].pass);
    console.log(30);
});
 (function taharab(xz){
    console.log(993);
    let x=30;
        return console.log(xz*5);
   ;
})(4);
//document.querySelector("#treeForeach").style.color="red";
class tatool{
 constructor (){
     console.log("hello my name is suzi");
document.getElementById("li3").innerHTML+=this.gitHiTahaz();
 }   
 gitHiTahaz(){
return "gdfdffsdsdfdfssdaftgfi";
 }
}
onload =new tatool();
// var tahaOwnCard= document.getElementById("taha own card");
// tahaOwnCard.style.backgroundColor="red";
// var tahaOwnCard2=document.querySelectorAll("#taha own card,body");
// for (var i=0;i<=tahaOwnCard2.length;i++){
//     tahaOwnCard2[i].style.color="white";
// }
class jafe{
constructor(){
this.dothi("li2","taha","zalzali");
}
dothi(id,name,family,){
    let counter=0;
var eleForJafe= document.getElementById(id);
eleForJafe.innerHTML+="<h3>"+name+"</h3>";
eleForJafe.innerHTML+="<p>"+" ("+family+") "+"</p>"+"<br>";
eleForJafe.innerHTML+= "count ="+ counter;
counter++;}
}
console.log("here you can check all elements");
document.getElementById("selectC").addEventListener("change",()=>{
    document.body.style.background=document.getElementById("selectC").value});


newwEmployee ={ "name":"any one have the requirments ","skills":{"years of experience ":18,"html":"8/10","css ":8/10},"arrayList":"['many objects are accepted ','']"}
console.log(newwEmployee);
class Taha{
        Constructor(){
            document.querySelector("#anItem").innerHTML+="jellow";
        }
}
onload=new Taha();
// class Jaf{
// constructor(){
//    document.querySelector("#pCon").innerHTML+="<br>"+"the constructor has been loaded succesfully";
//    document.querySelector("#pCon").style.color="red";
// }

// }
// var callin =new Jaf();
//on calling new taha the constructor will run ;
 taha=new counter();
taha.add();
taha.add();
taha.add();
taha.sub();
// class jackov{
//     constructor(){
//         this.oncliss("h2kk");
//     }
//     oncliss(id){
//     let d=document.getElementById(id);
//     d.onclick=() =>{
// alert("you just click "+d.innerText);
//     }
//     }
// }
// onload= new jackov();  
// $(document).ready(
// function(){
//     alert("allow jquery");
// window.console&&console.log("by taha");
// }

// );
// if(screen.orientation.type=="landscape-primary"){
//     document.body.style.background="yellow";
// }
// else if(screen.orientation.type=="portrait-primary"){
// document.body.style.background="red";
// };
// addEventListener("orientationchange",()=>{});
//you can use addeventlistener without document          
if((/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(navigator.userAgent))){
console.log("phone user");
}
else{
    console.log("copmuter user")
};
// var taha=new counter();   
// taha.add();
// taha.add();
// taha.add();
// taha.sub();
// var taha=new counter();
// taha.add();
// taha.add();
// taha.add();
function process() {
    console.log("hello world");
}
//find all inputs in the page


//create class TMAS with constructor    
class TMAS{
    constructor(){
        this.name="taha";
        this.age=25;
        this.city="tahaz";
        this.job="developer";
    }   
}
//create an instance of TMAS class
var taha=new TMAS();




//create function to encrypt text
function encrypt(text) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        encryptedText += text[i] + (text[i] + 1) % 10;
    }
    return encryptedText;
}
//create function to decrypt text
function decrypt(text) {
    var decryptedText = "";
    for (var i = 0; i < text.length; i++) {
        decryptedText += text[i] - (text[i] + 1) % 10;
    }
    return decryptedText;
}
console.log(encrypt("taha"));
console.log(445);
console.log(decrypt("tNaNaNaNhNaNaNaN"));


//create function to see 
var userInfo=navigator.userAgent.toLocaleLowerCase();

//get the browser name
var browserName=userInfo.match(/msie|firefox|chrome|safari|opera/i);
if(browserName=="msie"){
    console.log("ie");
}
else if(browserName=="firefox"){
    console.log("firefox");
}
else if(browserName=="chrome"){
    console.log("chrome");
}   
else if(browserName=="safari"){
    console.log("safari");
}
else if(browserName=="opera"){
    console.log("opera");
}
else{
    console.log("not supported");
}

//get the user info
var userInfo1=navigator.userAgent.toLocaleLowerCase();
// function to display for android user


if(userInfo.includes("android")){
        
document.getElementById("downloadAndroid").style.visibility="visible";
//get the yesterdays date
var yesterday=new Date();
yesterday.setDate(yesterday.getDate()-1);
document.getElementById("dateTest").innerHTML+=yesterday.toDateString();

console.log(yesterday);

;
}                            
else if(userInfo.includes("windows")&&userInfo.includes("10.0")){
alert("HEY WINDOWS 10");
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
document.getElementById("subtst").addEventListener("click",()=>{
document.getElementById("formtest").submit();
});
document.getElementById("restst").addEventListener("click",()=>{
    document.getElementById("formtest").reset();

});
document.getElementById("em").addEventListener("mouseover",()=>{
    document.getElementById("em").focus();
});
document.getElementById("em").addEventListener("mouseout",()=>{
    document.getElementById("em").blur();
});
document.getElementById("psd").addEventListener("mouseover",()=>{
    document.getElementById("psd").focus();
});
document.getElementById("psd").addEventListener("mouseout",()=>{
    document.getElementById("psd").blur();
});

class tmaz{
constructor(){
    var allotid=document.getElementById("allot").value;
    localStorage.setItem("name",allotid);

  
    if(allotid==null){
        alert("empty value");
    }
}}
var wantjstToprov=function(){
    alert("hi "+localStorage.getItem("name"));
}
var useratNew={user1:{},user2:{name:"taha ",natinality:"lebene ",age:4},user3:{name:"jaafar",age:3}}
var rich="taha";
var ismarried= true;
var cusage=19;
var cusNationality="Lebanese";
var id_1=[rich,ismarried,cusage,cusNationality];
for(var i=0;i<=id_1.length;i++){
console.log("all array list element using for loop: "+id_1[i-1]);
}
console.log("isMarried "+ id_1[1]);
console.log(id_1.indexOf(19));
console.log("Name "+id_1[0]+"\n Married "+id_1[1]+"\n Age "+id_1[2]+"\n Nationality"+ id_1[3]);

$(window).ready(resize=function(){
console.log("size : x=" +$(window).width()+"y= "+$(window).height());    

})
let text_before_incript="hi Im Taha";
text_before_incript=btoa(text_before_incript);
let jdksj="hi Im Taha";
jdksj=btoa(jdksj);
console.log(jdksj);
console.log(1);
jdksj=atob(jdksj)
console.log(jdksj);
console.log(text_before_incript);
console.log(693);
$("#ttf").click(function(){
$("#tax").css("color", "red");

})
$(document).ready(function(){
    $.getJSON("jsonTest.js",function(data){
        // $("#taha").append(data);
        window.console&&console.log(data);
    });
})

// $("#alsho").change(function(event){
// $("#spinner").show();
// var form=$("#alsho");
// var inuttxt=form.find('input[name="one"]').val();
// window.console&&console.log("sending post...);
// $.post('demo2.html' ,function(data,status){
//     window.console&&console.log(status);
//     $("#result").empty().append(data);
//     $("#spinner").hide();})
//     .error(function(){
//         $("#alsho").css("color","red" );
//         alert("error");
//     });
// });

// $("#al").click(function(){
//   $.ajax({url:"demo2.html",success:function(result){
// $("#toshow").html(result)
// }
//   })  
// })   
// $("#blab").change(function(event){
//   $("#spinner").show();
//   var form=$("#blab");
//   var inuttxt=form.find('input[name="one"]').val();
//   window.console&&console.log("sending post");
//   $.post('demo2.html' ,function(data,status){
//       window.console&&console.log(status);
//       $("#res").empty().append(data);
//       $("#spinner").hide();})
//       .error(function(){
//           $("#blab").css("color","red" );
//           alert("error");
//       });
//   });
