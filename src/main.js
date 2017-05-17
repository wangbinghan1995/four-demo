// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import header from '@/components/common/Header.vue'
import footer from '@/components/common/Footer.vue'
import content from '@/components/common/Content.vue'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
Vue.prototype.$http=axios
Vue.prototype.fetchJsonp=fetchJsonp
Vue.config.productionTip = false

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.component(SwipeItem.name, SwipeItem);
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
/* eslint-disable no-new */
Vue.component(header.name,header)
Vue.component(footer.name,footer)
Vue.component(content.name,content);

import store from "./store.js"  
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
