import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Weather from '@/components/Weather'
import Output from '@/components/Output' // 1. import

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },

    {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})
