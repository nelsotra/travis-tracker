import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/home'
import pacificCoast2014 from './components/pacificCoast-2014'
import japan2015 from './components/japan-2015'
import korea2015 from './components/korea-2015'
import iceland2016 from './components/iceland-2016'
import pct2016 from './components/pct-2016'
import at2016 from './components/at-2016'
import peru2017 from './components/peru-2017'
import beijing2018 from './components/beijing-2018'
import cambodia2019 from './components/cambodia-2019'
import wonderland2012 from './components/wonderland-2012'
import pct2008 from './components/pct-2008'
import seattleMaine2013 from './components/seattle-maine-2013'
import breckSeattle2011 from './components/breck-seattle-2011'

Vue.use(Router)

export default new Router({
  // without the 'history' mode you'll get a # in the url, but refreshes work, so i'm leaving it out
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomePage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pacificCoast-2014',
      name: 'pacificCoast-2014',
      component: pacificCoast2014
    },
    {
      path: '/japan-2015',
      name: 'japan-2015',
      component: japan2015
    },
    {
      path: '/korea-2015',
      name: 'korea-2015',
      component: korea2015
    },
    {
      path: '/iceland-2016',
      name: 'iceland-2016',
      component: iceland2016
    },
    {
      path: '/pct-2016',
      name: 'pct-2016',
      component: pct2016
    },
    {
      path: '/at-2016',
      name: 'at-2016',
      component: at2016
    },
    {
      path: '/peru-2017',
      name: 'peru-2017',
      component: peru2017
    },
    {
      path: '/beijing-2018',
      name: 'beijing-2018',
      component: beijing2018
    },
    {
      path: '/cambodia-2019',
      name: 'cambodia-2019',
      component: cambodia2019
    },
    {
      path: '/wonderland-2012',
      name: 'wonderland-2012',
      component: wonderland2012
    },
    {
      path: '/pct-2008',
      name: 'pct-2008',
      component: pct2008
    },
    {
      path: '/seattle-maine-2013',
      name: 'seattle-maine-2013',
      component: seattleMaine2013
    },
    {
      path: '/breck-seattle-2011',
      name: 'breck-seattle-2011',
      component: breckSeattle2011
    }

    
  ]
})
