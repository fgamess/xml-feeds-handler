import Vue from 'vue'
import VueRouter from 'vue-router'
import productFeedFormRoute from './productFeedForm'

Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
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
