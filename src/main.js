import Vue from 'vue';
import Ui from '@/ui';
import App from './App';
import router from './router';
import '@aoping/theme/src/index.less';
import '@/assets/icon/css/font-awesome.min.css';

Vue.use(Ui);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
