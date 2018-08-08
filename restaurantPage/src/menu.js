'use strict';

function menuHeader(){
    let menuHeader = document.createElement('h1');
    menuHeader.innerHTML = 'Menu';
    return menuHeader;
}

function actualMenu(){
    let menu = document.createElement('img');
    menu.src = 'https://b.zmtcdn.com/data/menus/597/17075597/92c39729a162d1e79c9aa261348168eb.jpg'
    menu.alt = 'menu full of eggs benedict';
    return menu;
}
function menu(divId){
    document.getElementById(divId).innerHTML = '';
    document.getElementById(divId).appendChild(menuHeader());
    document.getElementById(divId).appendChild(actualMenu());
    document.getElementById('Menu').className = 'currentTab';
    document.getElementById('Home').className = 'navButton';
    document.getElementById('Contact').className = 'navButton';
}

export{
    menu
}