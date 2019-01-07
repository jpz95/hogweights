/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/features/home/Home.vue'),
    title: 'Home',
    layout: 'DefaultLayout',
    isPublic: true
  }
]

export default routes
