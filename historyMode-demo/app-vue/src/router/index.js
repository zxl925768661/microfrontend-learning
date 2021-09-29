import Home from '@/pages/home/index.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about/index.vue')
  }
]

export default routes;
