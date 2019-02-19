/*
* Created by shate@ya.ru on 19.02.2019
*/

import {isTablet, isMobil} from './consts';

document.addEventListener('DOMContentLoaded', function () {

    const carousel =  document.getElementById('mainCarousel');
    const continer = document.querySelector('.container-fluid.page-wrapper');

    if(isMobil && carousel ){
        carousel.remove();
    }
    if(isTablet && carousel ){
        carousel.classList.remove('mb-4');
        document.body.insertBefore(carousel, continer);
    }

});