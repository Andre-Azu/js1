/*var username;
username=prompt();
message = "Hello " +username+ " thanks for ordering with Zamz"
console.log(message)

document.getElementById("button").onclick=function(){
    // .innerHTML Changes the content of the page 
    document.getElementById("confirm").innerHTML=message;

    // Make the button dissapear
    document.getElementById("button").style.display='none';
}*/

// Grouping variables
let person={
    name:"Andre",
    age: 21,
    favfood:"fries",
    fun:function(){
        console.log("Yayy");
    }
}

person.name
person.fun();