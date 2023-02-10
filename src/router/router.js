import {createWebHistory, createRouter} from 'vue-router';
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import GalleryPage from '@/components/GalleryPage.vue'
import ContactPage from '@/components/ContactPage.vue'

const history = createWebHistory();
const router = createRouter({
	history,
	routes:[
		{
			path:'/',
			component: HomePage
		},
		{
			path:'/about',
			component: AboutPage
		},
		{
			path:'/gallery',
			component: GalleryPage
		},
		{
			path:'/contact',
			component: ContactPage
		}
	]
});

export default router;

