import Vue from 'vue'
import VueRouter from 'vue-router'
import Services from '../views/Services.vue'
import LogIn from '../views/Login.vue'
import SignUp from '../views/Signup.vue'
import InfoUser from '../views/InfoUser.vue'
import Schedule from '../views/Schedule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Services',
    component: Services
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/InfoUser',
    name: 'InfoUser',
    component: InfoUser
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: Schedule
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
