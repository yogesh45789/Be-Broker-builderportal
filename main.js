import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import urls from "./api/urls"
import request from "./api/request"
import keys from "./helper/keys"
import * as VueGoogleMaps from 'vue2-google-maps'
// import VueGeolocation from 'vue-browser-geolocation';
// Vue.use(VueGeolocation);
Vue.config.productionTip = false
Vue.prototype.$request = request;
Vue.prototype.$urls = urls;
Vue.prototype.$keys = keys;
 Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAWFZTsJEB_sQjgA4V9kGqJyLd90J-JJMg',
     libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
