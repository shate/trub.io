/*
* Created by shate@ya.ru on 19.02.2019
*/

document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('share')){
        new SocialButtons({
            services: ['vkontakte',  'lj'],
            id : 'share',
            theme: 'color',
            url: '',
            components: ['icon'],
        });
    }

});