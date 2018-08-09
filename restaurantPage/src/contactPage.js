'use strict';

function contactHeader(){
    let header = document.createElement('h1');
    header.innerHTML = 'Contact Information';
    return header;
}

let week = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];

function hours(){
    let hours = document.createElement('div');
    let hourTitle = document.createElement('h3');
    hourTitle.innerHTML = 'Hours';
    hours.appendChild(hourTitle);
    for (let i=0; i<week.length; i++){
        let day = document.createElement('p');
        day.innerHTML = `${week[i]}: 6:30 AM - 2:30 PM`;
        hours.appendChild(day);
    } return hours;
}

function address(){
    let address = document.createElement('div');
    let addressTitle = document.createElement('h3');
    addressTitle.innerHTML = 'Address';
    let streetAdd = document.createElement('p');
    streetAdd.innerHTML =  `5100 Belt Line Rd Suite 824
    Addison, TX 75254`;
    address.appendChild(addressTitle);
    address.appendChild(streetAdd);
    return address;
}

function addAddress(divId){
    document.getElementById(divId).innerHTML = '';
    document.getElementById(divId).appendChild(contactHeader());
    document.getElementById(divId).appendChild(hours());
    document.getElementById(divId).appendChild(address());
    document.getElementById('Contact').className = 'currentTab';
    document.getElementById('Home').className = 'navButton';
    document.getElementById('Menu').className = 'navButton';

}

export{
    addAddress
}