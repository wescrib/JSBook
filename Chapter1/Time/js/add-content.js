var today = new Date();
var hourNow = today.getHours();
var greeting;

//if the hour is after 6PM
if(hourNow > 18) {
    //greeting is 'good evening'
    greeting = "Good evening!";

    //if it is after noon
}else if (hourNow > 12){
    greeting = "Good afternoon!";

    //if it is after midnight
}else if(hourNow > 0) {

    greeting = "Good morning!";
}else{
    greeting = "Welcome!";
}

document.write('<h3>' + greeting + "</h3>");