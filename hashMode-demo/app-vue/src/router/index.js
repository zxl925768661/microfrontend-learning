import Home from '@/pages/home/index.vue';

let prefix = window.__POWERED_BY_QIANKUN__ ? '/microApp/vue/' : '/';

const routes = [
  {
    path: prefix == '/' ? prefix : prefix.substring(0, prefix.length - 1),
    name: 'Home',
    component: Home
  },
  {
    path: prefix + 'about',
    name: 'About',
    component: () => import('@/pages/about/index.vue')
  }
]

export default routes;
