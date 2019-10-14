import * as xd from "./App"

var tmp = new Array;

export default function clickButton (buttonName) {
    if(buttonName === "allStudents"){
        tmp.length=0;
        tmp = xd.data.map(function (item) {
            var tmptmp = new Array;
            item.students.forEach(function(element){
                tmptmp.push(element.name);
            });
            return tmptmp;
        });
        // console.log("allstudents tmp arrary:");
        // console.log(tmp);
        document.getElementById('textfield').textContent = null;
        document.getElementById('textfield').innerHTML += ("<li>"+"List of all students:"+"</li><br>");
        tmp.forEach(function(element,index,arr){
            element.forEach(function(element){
                document.getElementById('textfield').innerHTML += ("<li>"+element+"</li>"); 
            });
        }) ;
    }
    else if(buttonName === "sortStudents"){
        tmp.length=0;
        xd.data.forEach(function(element){
            element.students.forEach(function(elementelement){
                tmp.push(elementelement.name);
            });
        });
        tmp.sort();
        document.getElementById('textfield').textContent = null;
        document.getElementById('textfield').innerHTML += ("<li>"+"List of all students: (sorted alphabetically)"+"</li><br>");
        tmp.forEach(function(element){
            document.getElementById('textfield').innerHTML += ("<li>"+element+"</li>"); 
        });
    }
    else if(buttonName === "oldStudents"){
       tmp.length=0;
       xd.data.forEach(function(element){
           if(element.active){
               element.students.forEach(function(elementinceptionlol){
                   if(elementinceptionlol.age>20){
                       tmp.push(elementinceptionlol.name + ", " + elementinceptionlol.age.toString() + " years old");
                   }
               });
           }
       });
        //console.log(tmp);
        document.getElementById('textfield').textContent = null;
        document.getElementById('textfield').innerHTML += ("<li>"+"List of all students older than 20 from active teachers:"+"</li><br>");
        tmp.forEach(function(element){
            document.getElementById('textfield').innerHTML += ("<li>"+element+"</li>"); 
        });
    }
}

