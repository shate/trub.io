/**
 * Created by Пользователь on 19.03.2018.
 */
require ('./lib/resetCarousel');
window.$ = window.jQuery = require('jquery');
//require('slick-carousel');
require ('popper.js');
require ('bootstrap');
require ('social-buttons/src/js/SocialButtons');
require ('social-buttons/src/js/es6-promise');

require('./lib/metisMenu')
require('./lib/collapseBtn');
require('./lib/btnMobil');
require('./lib/socialButtons');
require('./lib/lazyLoad');
require('./lib/initYmaps');
require('./lib/uploadInput');

require('./lib/loader');


