import { createRouter, createWebHistory } from 'vue-router'
import Game from '/src/components/Game.vue'

const locations = ['legacy', 'ridge', 'billing', 'lobby', 'vista', 'summit']
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
]
console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router