/*
* Created by shate@ya.ru on 20.02.2019
*/

import ymaps from 'ymaps';


document.addEventListener('DOMContentLoaded', function () {

    const mapContainer = document.getElementById('map');
    const mapStorageContainer = document.getElementById('mapStorage');
    if( mapContainer || mapStorageContainer){

        ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
            const placemark = new maps.Placemark([55.895404, 37.522585], {
                balloonContent : 'ул. Ижорская д.15 этаж 1, помещение 2, офис 3/1'
            }, {});

           const map = new maps.Map(mapContainer, {
                center: [55.895404, 37.522585],
                zoom : 15,
            });

           const mapStr = new maps.Map(mapStorageContainer, {
                center: [55.256750, 39.670097],
                zoom : 15,
            });

            map.geoObjects.add(placemark);
        })
            .catch(error => console.log('Failed to load Yandex Maps', error));

    }

});