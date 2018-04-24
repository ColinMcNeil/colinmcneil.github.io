import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title.vue'
import Menu from '@/components/Menu.vue'
import Projects from '@/components/Projects.vue'

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
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !from.name && process.env.NODE_ENV=='production') next({ path: '/', replace: true, href: '/' })
  next()
})
export default router
