import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title.vue'
import Menu from '@/components/Menu.vue'
import Projects from '@/components/Projects.vue'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

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
      component: Menu,
      props: true
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/resume') next({ path: '/menu', name: 'Menu', params: { skip: true } })
  
  if (process.env.NODE_ENV == 'production') {
    if (to.path !== '/' && !from.name) next({ path: '/', replace: true, href: '/' })
  }
  next()
  
})
export default router
