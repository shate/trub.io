/*
* Created by shate@ya.ru on 19.02.2019
*/
import {isMobil, isTablet, aside} from './consts';

document.addEventListener('DOMContentLoaded', function() {

    const toggledButton = document.getElementById('toggled');
    const btnMobil = document.getElementById('btn-mobil');

    console.log(isMobil, isTablet)

    toggledButton.addEventListener(
        'click', function () {
            const parentStyle =  getComputedStyle(btnMobil.parentElement);
            const asideStyle =  getComputedStyle(aside);
            const btnMobilVisible  = ( parentStyle.display == 'block')? true : false;
            const asideWidth = parseInt(asideStyle.width);

            console.log( asideWidth)



            if ( !isMobil && !isTablet) {
                  if( asideWidth < 100){
                      aside.classList.remove('toggled');
                      aside.classList.toggle('tablet-toggled');
                  }
                  else{
                      aside.classList.remove('tablet-toggled');
                      aside.classList.toggle('toggled');
                  }

               }

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