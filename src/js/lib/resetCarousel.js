/*
* Created by shate@ya.ru on 19.02.2019
*/

import {isTablet, isMobil} from './consts';

document.addEventListener('DOMContentLoaded', function () {

    const carousel =  document.getElementById('mainCarousel');
    const header = document.querySelector('header');

    if(isMobil && carousel ){
        carousel.remove();
         return;
    }
    if(isTablet && carousel ){
        carousel.classList.remove('mb-4');
        header.append(carousel);
     }
});