import { createRouter, createWebHistory } from 'vue-router'
import Game from '/src/components/Game.vue'
import Wrong from '/src/components/Wrong.vue'

const locations = ['library', 'study', 'ballroom', 'lounge', 'hall', 'conservatory']
const locationRoutes = locations.map(location => ({
  path: `/${location}`,
  name: location,
  component: Game,
}))

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game,
  },
  ...locationRoutes,
  {
    path: '/kitchen',
    name: 'Wrong',
    component: Wrong
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router