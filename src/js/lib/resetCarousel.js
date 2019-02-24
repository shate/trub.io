/*
* Created by shate@ya.ru on 19.02.2019
*/

import {isTablet, isMobil} from './consts';

document.addEventListener('DOMContentLoaded', function () {

    const carousel =  document.getElementById('mainCarousel');
    const carouselParent = carousel.parentNode;
    const header = document.querySelector('header');



    if(isMobil && carousel ){

        carousel.remove();
    }
    if(isTablet && carousel ){
        const removeCarousel = carouselParent.removeChild(carousel);

        const handler = () =>{
            if(document.documentElement.clientWidth >= 576 ){
                carousel.remove();
            }
            else{
                header.append(removeCarousel);

            }
        }
        if(document.documentElement.clientWidth >= 576 ){
            carousel.classList.remove('mb-4');
            header.append(removeCarousel);
        }
     if( screen.onorientationchange){
         screen.onorientationchange = handler;
     }
     else{
         window.addEventListener( 'orientationchange', handler);
     }


    }

});