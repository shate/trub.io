/*
* Created by shate@ya.ru on 19.02.2019
*/
import {isMobil, aside} from './consts';

document.addEventListener('DOMContentLoaded', function() {

    const toggledButton = document.getElementById('toggled');

    toggledButton.addEventListener(
        'click', function () {

            if (document.documentElement.clientWidth >= 992) {
                aside.classList.remove('tablet-toggled');
                aside.classList.toggle('toggled');
            } else {
                if (isMobil) {
                    aside.classList.remove('mobil-toggled');
                } else {
                    aside.classList.remove('toggled');
                    aside.classList.toggle('tablet-toggled');
                }

            }

        }
    )

});