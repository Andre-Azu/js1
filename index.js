document.getElementById("button").onclick=function(){
    // .innerHTML Changes the content of the page 
    document.getElementById("confirm").innerHTML="Order placed await email confirmation";

    // Make the button dissapear
    document.getElementById("button").style.display='none';
}

var username;
username=prompt();
message = "Your name is " + username
console.log(message)