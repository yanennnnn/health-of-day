// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//router
import router from './router'

//Bootsrtap
import 'bootstrap';

//currency
import currencyFilter from './filters/currency';
import timeFilter from './filters/getTime';

//loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

//bus
import './bus';

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import swiper style
import 'swiper/css/swiper.css'

//vee-validate,vee-validate中文
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 
library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false //官方已設定

//cookies使用
axios.defaults.withCredentials = true
//axios
Vue.use(VueAxios, axios)
//currency
Vue.filter('currency', currencyFilter);
Vue.filter('getTime', timeFilter);
//loading
Vue.component('Loading', Loading);
//Swiper
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//vee-validate中文
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  i18n,
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
      const api=`${process.env.APIPATH}/api/user/check`;
        axios.post(api).then((response) => {      
          if (response.data.success){
              next();
          }
          else{
            next({  
              path:'/login',
            })
           
          }
        });
    }else{
      
      next();
    }
})