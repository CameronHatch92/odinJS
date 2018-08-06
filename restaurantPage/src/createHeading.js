'use strict';
function heading(){
    let header = document.createElement('h1');
    header.innerHTML='Snooze:';
    return header;
}

function subheading(){
    let subheader = document.createElement('h2');
    subheader.innerHTML = 'An A.M. Eatery';
}

function addImage(){
    let foodImage = document.createElement('img');
    foodImage.src = 'http://www.restaurantnutrition.com/getattachment/Insights/Snooze-Eatery-How-a-Moment-Makes-the-Difference/Snooze-meal-min.jpg.aspx?width=600&height=287';
    foodImage.alt = 'picture of delicious breakfast food';
    return foodImage;
}

function addBlurb(){
    let blurb = document.createElement('p');
    blurb.innerHTML = "The best breakfast you've ever had!";
    return blurb;
}

function createHomePage(divId){
    document.getElementById(divId).appendChild(heading());
    document.getElementById(divId).appendChild(subheading());
    document.getElementById(divId).appendChild(addImage());
    document.getElementById(divId).appendChild(addBlurb());
}
export{
    createHomePage
}