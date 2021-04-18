import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import fileData from '../components/fileData'
import featureSelection from '../components/featureSelection'
import modelTraining from '../components/modelTraining'
import home from '../components/home'
import modelValidation from '../components/modelValidation'
import fileReadDemo from '../components/fileReadDemo'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: login },
    { path: '/', redirect: '/login' },
    {
      path: '/home',
      component: home,
      redirect: '/fileData',
      children: [
        { path: '/fileData', component: fileData },
        { path: '/modelTraining', component: modelTraining },
        { path: '/featureSelection', component: featureSelection },
        { path: '/modelValidation', component: modelValidation },
        { path: '/fileReadDemo', component: fileReadDemo }
      ]
    },
  ]
})

// 挂载路由导航守卫（作用：想访问除登录页面之外得其他页面，必须路由是从登录页面跳转来的才行，要不不能放行）
// router.beforeEach((to, from, next) => {
// to代表将要访问得路径
// from代表从哪个路径跳转而来
// next() 放行函数 next('/home') 强制放行
//   if(to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next() 
// })

export default router