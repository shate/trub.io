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


    new MetisMenu("#menu", {
        //toggle: false
    });

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