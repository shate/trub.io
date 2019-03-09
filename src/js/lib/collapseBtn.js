/*
* Created by shate@ya.ru on 19.02.2019
*/
import {isMobil, isTablet, aside} from './consts';

document.addEventListener('DOMContentLoaded', function() {

    const toggledButton = document.getElementById('toggled');
    const btnMobil = document.getElementById('btn-mobil');



    toggledButton.addEventListener(
        'click', function () {
            const parentStyle =  getComputedStyle(btnMobil.parentElement);
            const btnMobilVisible  = ( parentStyle.display == 'block')? true : false;

                if(btnMobilVisible ){
                    aside.classList.remove('mobil-toggled', 'tablet-toggled');
                }
                if( !btnMobilVisible && (isMobil || isTablet)){
                    aside.classList.remove('mobil-toggled');
                    aside.classList.toggle('tablet-toggled');

                }


        }
    )
});