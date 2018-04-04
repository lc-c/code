import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import login from '@/components/login'
import advertising from "@/components/advertising";
import recruit from '@/components/recruit'
import apply from '@/components/apply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout,
      children: [
        {
          path: "advertising",
          name: "advertising",
          alias: "/",
          component: advertising
        },
        {
          path: "recruit",
          name: "recruit",
          component: recruit
        },
        {
          path: "apply",
          name: "apply",
          component: apply
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
