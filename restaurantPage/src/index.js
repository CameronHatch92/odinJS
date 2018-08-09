import {createHomePage, reloadHome} from './createHeading';
import {menuBar} from './menuBar';
import {menu} from './menu';
import {addAddress} from './contactPage';

menuBar('menu');
createHomePage('content');

document.getElementById('Menu').onclick = function(){
    menu('content');};

document.getElementById('Contact').onclick = function(){
    addAddress('content');};

document.getElementById('Home').onclick = function(){
    reloadHome('content');};    