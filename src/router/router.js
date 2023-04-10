import {createWebHistory, createRouter} from 'vue-router';
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ExhibitionPage from '@/components/ExhibitionPage.vue'
import ArtistPage from '@/components/ArtistPage.vue'

const history = createWebHistory();
const router = createRouter({
	history,
	routes:[
		{
			path:'/',
			component: HomePage
		},
		{
			path:'/about_us',
			component: AboutPage
		},
		{
			path:'/exhibitions',
			component: ExhibitionPage
		},
		{
			path:'/artists',
			component: ArtistPage
		}
	]
});

export default router;

