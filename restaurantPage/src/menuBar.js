let menuArr = ['Home', 'Menu', 'Contact'];
function menuBar(divId){
        let homeTab = document.createElement('p');
        homeTab.innerHTML = menuArr[0];
        homeTab.className = 'currentTab';
        homeTab.id = menuArr[0];
        document.getElementById(divId).appendChild(homeTab);
    for (let i=1; i<menuArr.length; i++){ 
       let tab = document.createElement('p');
       tab.innerHTML = menuArr[i];
       tab.className = 'navButton';
       tab.id = menuArr[i];
       document.getElementById(divId).appendChild(tab); 
    }
}

export{
    menuBar
}
