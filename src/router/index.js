import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import home from '@/components/homepage/home'
import job_detail from '@/components/homepage/job_detail'
import applyJob from '@/components/homepage/applyjob'
import personal from '@/components/mypage/personal'
import my_info from '@/components/mypage/my_info'
import auth from '@/components/mypage/my_info/auth'
import perAuthList from '@/components/mypage/my_info/perAuthList'
import username from '@/components/mypage/edituser/username'
import email from '@/components/mypage/edituser/email'
import myapply from '@/components/mypage/myapply'
import favorite from '@/components/mypage/favorite'
import release from '@/components/mypage/release'
import myjobper from '@/components/mypage/myjobper'
import joboperation from '@/components/mypage/joboperation'
import editoperation from '@/components/mypage/editoperation'
import feedback from '@/components/mypage/feedback'
import list from '@/components/message/list'
import modify from '@/components/modify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/jobDetail',
      name: 'job_detail',
      component: job_detail,
    },
    {
      path: '/myInfo',
      name: 'my_info',
      component: my_info
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/perAuthList',
      name: 'perAuthList',
      component:perAuthList
    },
    {
      path: '/applyJob',
      name: 'applyJob',
      component: applyJob
    },
    {
      path: '/myapply',
      name: 'myapply',
      component: myapply
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: favorite
    },
    {
      path: '/release',
      name: 'release',
      component: release
    },
    {
      path: '/myjobper',
      name: 'myjobper',
      component: myjobper
    },
    {
      path: '/joboperation',
      name: 'jobOperation',
      component: joboperation
    },
    {
      path: '/editoperation',
      name: 'editOperation',
      component: editoperation
    },
    {
      path: '/username',
      name: 'info_name',
      component: username
    },
    {
      path: '/email',
      name: 'info_email',
      component: email
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    }
  ]
})
