let menuArr = ['Home', 'Menu', 'Contact'];
function menuBar(divId){
    for (let i=0; i<menuArr.length; i++){
       let tab = document.createElement('p');
       tab.innerHTML = menuArr[i];
       tab.className = 'navButton';
       document.getElementById(divId).appendChild(tab); 
    }
}

export{
    menuBar
}
