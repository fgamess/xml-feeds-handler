import Vue from 'vue'
import Router from 'vue-router'
import productFeedFormRoute from './productFeedForm'

Vue.use(Router)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Foo
    // },
    // {
    //   path: '/home',
    //   component: Bar
    // },
    productFeedFormRoute
    // reportRoutes,
    // fieldProcessRoutes
  ]
})

export default router
