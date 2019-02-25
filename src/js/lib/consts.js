/*
* Created by shate@ya.ru on 19.02.2019
*/

export const  isMobil = (document.documentElement.clientWidth < 576 && document.documentElement.clientHeight < 768 || document.documentElement.clientHeight < 576 && document.documentElement.clientWidth < 768) ? true : false,
              isTablet= (document.documentElement.clientWidth < 992 && document.documentElement.clientHeight >= 576 && document.documentElement.clientHeight < 992   || document.documentElement.clientHeight < 992 && document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth < 992) ? true : false,
                        aside = document.querySelector('aside');