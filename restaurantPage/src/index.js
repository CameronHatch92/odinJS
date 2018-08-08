import {createHomePage} from './createHeading';
import {menuBar} from './menuBar';
import {menu} from './menu';

menuBar('menu');
createHomePage('content');

document.getElementById('Menu').onclick = function(){
    menu('content');};
