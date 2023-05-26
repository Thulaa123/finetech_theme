var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) { //6:00 pm
    greeting = '<h3>Hi, Good evening !';
}else if(hourNow > 12 ){ //12:00 pm
    greeting = '<h3>Hi, Good afternoon !';
}else if(hourNow > 0){ // 12:00 midnight
    greeting = '<h3>Hi, Good morning !';
}else {
    greeting = 'Hi, Welcome back!';
}

document.write('<h3>' + greeting + '</h3>');