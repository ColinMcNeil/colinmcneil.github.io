import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title.vue'
import Menu from '@/components/Menu.vue'
import Projects from '@/components/Projects.vue'
import ContributionsGrid from '@/components/ContributionsGrid.vue'

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
      component: Menu,
      props: true
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contributions',
      name: 'Contributions',
      component: ContributionsGrid
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path.includes('resume')) next({ path: '/menu', name: 'Menu', params: { skip: true } })
  next()
})
export default router
