/*
* Created by shate@ya.ru on 19.02.2019
*/
let Mobil, Tablet;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   Mobil = (document.documentElement.clientWidth >= 576 || document.documentElement.clientHeight >= 576) ? false : true;
   Tablet= (document.documentElement.clientWidth < 992 && document.documentElement.clientWidth >= 576  || document.documentElement.clientHeight < 992 && document.documentElement.clientHeight >= 576) ? true : false;
}

export const  aside = document.querySelector('aside');
export const  isMobil = Mobil ;
export const isTablet = Tablet;
