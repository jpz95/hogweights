/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
const routes = [
  {
    name: 'default',
    path: '',
    component: () => import(/* webpackChunkName: "default" */ '@/features/home/home.vue'),
    title: 'Home',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/features/home/home.vue'),
    title: 'Home',
    layout: 'DefaultLayout',
    isPublic: true
  }
]

export default routes
