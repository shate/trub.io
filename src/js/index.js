/**
 * Created by Пользователь on 19.03.2018.
 */
window.$ = window.jQuery = require('jquery');
//require('slick-carousel');
require ('popper.js');
require ('bootstrap');
require ('social-buttons/src/js/SocialButtons');
require ('social-buttons/src/js/es6-promise');
import MetisMenu from 'metismenujs';

document.addEventListener('DOMContentLoaded', function() {
    const toggledButton = document.getElementById('toggled');


    toggledButton.addEventListener(
        'click', function () {
            const aside = document.querySelector('aside');
            if(document.documentElement.clientWidth >= 992){
                aside .classList.remove('tablet-toggled');
                aside .classList.toggle('toggled');
            }
            else{
                aside .classList.remove('toggled');
                aside .classList.toggle('tablet-toggled');
            }

        }
    );
   if(document.getElementById('menu')){
       new MetisMenu("#menu", {        
       });
   }
  

    if(document.getElementById('share')){
        new SocialButtons({
            services: ['vkontakte',  'lj'],
            id : 'share',
            theme: 'color',
            url: '',
            components: ['icon'],
        });
    }

})