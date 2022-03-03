import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34bfa074 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _ea879564 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _4720c0a2 = () => interopDefault(import('../pages/tg.vue' /* webpackChunkName: "pages/tg" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _34bfa074,
    name: "index___en"
  }, {
    path: "/test",
    component: _ea879564,
    name: "test___ar"
  }, {
    path: "/tg",
    component: _4720c0a2,
    name: "tg___ar"
  }, {
    path: "/en/test",
    component: _ea879564,
    name: "test___en"
  }, {
    path: "/en/tg",
    component: _4720c0a2,
    name: "tg___en"
  }, {
    path: "/",
    component: _34bfa074,
    name: "index___ar"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
