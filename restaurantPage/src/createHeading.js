'use strict';
function heading(divId){
    let header = document.createElement('h1');
    header.innerHTML='Snooze:';
    document.getElementById(divId).appendChild(header);
}

function subheading(divId){
    let subheader = document.createElement('h2');
    subheader.innerHTML = 'An A.M. Eatery';
    document.getElementById(divId).appendChild(subheader);
}

function addImage(divId){
    let foodImage = document.createElement('img');
    foodImage.src = 'http://www.restaurantnutrition.com/getattachment/Insights/Snooze-Eatery-How-a-Moment-Makes-the-Difference/Snooze-meal-min.jpg.aspx?width=600&height=287';
    foodImage.alt = 'picture of delicious breakfast food';
    document.getElementById(divId).appendChild(foodImage);
}

function addBlurb(divId){
    let blurb = document.createElement('p');
    blurb.innerHTML = "The best breakfast you've ever had!";
    document.getElementById(divId).appendChild(blurb);
}

export{
    heading,
    subheading,
    addImage,
    addBlurb
}