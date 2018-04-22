import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title.vue'
import Menu from '@/components/Menu.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/menu' && from.name !== 'Title') next({ path: '/', replace: true, href: '/' })
  next()
})
export default router
