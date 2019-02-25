/*
* Created by shate@ya.ru on 19.02.2019
*/
import {aside} from './consts';

document.addEventListener('DOMContentLoaded', function() {
    const btnMobil = document.getElementById('btn-mobil');

    btnMobil.addEventListener('click', function () {
            aside.classList.add('mobil-toggled');
    });
});