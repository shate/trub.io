/*
* Created by shate@ya.ru on 19.02.2019
*/

export const  isMobil = (document.documentElement.clientWidth >= 576) ? false : true,
              isTablet= (document.documentElement.clientWidth < 992 && document.documentElement.clientWidth >= 576) ? true : false,
                        aside = document.querySelector('aside');