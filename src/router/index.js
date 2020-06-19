import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(["@/pages/home"], resolve)
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: resolve => require(["@/pages/productDetail"], resolve)
  },
  {
    path: '/comInfo',
    name: 'comInfo',
    component: resolve => require(["@/pages/comInfo"], resolve)
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: resolve => require(["@/pages/aboutUs"], resolve)
  }
]
export default new VueRouter({
  routes,
})
