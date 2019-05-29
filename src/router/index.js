import Vue from 'vue'
import Router from 'vue-router'
import APP from '@/App'
import Main from "@/components/Main"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
