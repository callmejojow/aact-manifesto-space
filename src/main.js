import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from '@/router/router'
import VueKinesis from "vue-kinesis"
import 'aos/dist/aos.css'

createApp(App).use(router).use(VueKinesis).mount("#app");