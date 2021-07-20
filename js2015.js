 export default class taha{
    constructor(famname){
        this.famname = famname;
    }
    getName(){
        return this.famname;
    }
    skills(){   
        return "I am a javascript developer";
    }
}
export class gamil{
    //create constructor    
    constructor(){
        console.log("allow ");
    }
};
var tahaObj = new taha('Taha');
var tahaObj2 = new taha('Taha2');

console.log(tahaObj.getName());
// Language: javascript
// Path: js2016.js
// create class jmail extes taha 
class jmail extends taha{
    //create constructor
    // constructor(famname){  
    //     super(famname);
      
    // }
     

    getName(){
        return this.name;
    }
}
const khay=new jmail("zalzali");
console.log("jamil "+khay.famname);
var jmailObj = new jmail('Jmail'); 
var jmailObj2 = new jmail('Jmail2');
console.log(jmailObj.getName());
console.log(tahaObj2.skills());

class student {
    constructor(name , age, id){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getId(){
        return this.id;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setId(id){
        this.id = id;
    }
major(){
    console.log("I am a CCE student");}
};
var tahaZ=new student('taha',20,12010015);
console.log("the student name is :"+ tahaZ.getName()); 
tahaZ.setName("taha2");
console.log("the student name is :"+ tahaZ.getName());
tahaZ.major("CCE");
console.log("the student major is :"+ tahaZ.major());
class transferedStudents extends student{
pastUni(){
    console.log("I am a transfered student");
}
}
var tahazTransfered =new transferedStudents("name",212,12010115);
console.log(tahazTransfered.getName());
