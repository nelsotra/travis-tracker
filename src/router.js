import Vue from 'vue'
import Router from 'vue-router'
import MainHome from './components/main-home'
import TrackerHome from './components/tracker/tracker-home'
import PortfolioHome from './components/portfolio/portfolio-home'
import SpanishHome from './components/spanish/spanish-home'

Vue.use(Router)

export default new Router({
  // without the 'history' mode you'll get a # in the url, but refreshes work, so i'm leaving it out
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainHome
    },
    {
      path: '/mainhome',
      name: 'mainhome',
      component: MainHome
    },
    {
      path: '/trackerhome',
      name: 'trackerhome',
      component: TrackerHome
    },
    {
      path: '/portfoliohome',
      name: 'portfoliohome',
      component: PortfolioHome
    },
    {
      path: '/spanishhome',
      name: 'spanishhome',
      component: SpanishHome
    }
  ]
})
