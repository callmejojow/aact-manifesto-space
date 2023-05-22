import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from '@/router/router'
import VueKinesis from "vue-kinesis"
import 'aos/dist/aos.css'
import VueGtag from "vue-gtag";
createApp(App).use(router).use(VueKinesis).use(VueGtag, {
  appName: 'Manifesto Space',
  pageTrackerScreenviewEnabled: true,
  config: { id: "G-JJRF0356EC" }
}, router).mount("#app");