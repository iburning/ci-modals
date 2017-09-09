/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CIUIBase from 'ci-ui-base'
import CIButton from 'ci-button'
import CIModals from 'ci-modals'

Vue.use(VueRouter)
Vue.use(CIUIBase.plugin)
Vue.use(CIButton.plugin)
Vue.use(CIModals.plugin)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Default',
      path: '/',
      component: resolve => require(['./views/Index.vue'], resolve)
    },

    {
      name: 'Index',
      path: '/index',
      component: resolve => require(['./views/Index.vue'], resolve)
    },

    {
      name: 'Modals',
      path: '/modals',
      component: resolve => require(['./views/Modals.vue'], resolve)
    },

    {
      name: 'Toast',
      path: '/toast',
      component: resolve => require(['./views/Toast.vue'], resolve)
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')
