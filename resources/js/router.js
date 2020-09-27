import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import anncm from './pages/admin/layouts/Updates'
import sched from './pages/admin/layouts/Schedules'
import resource from './pages/admin/layouts/Resources'
import acc from './pages/admin/layouts/Accounts'
import create_announcement from './pages/admin/layouts/Create'
import edit_announcement from './pages/admin/layouts/Edit'

const routes = [
    {
        path: '/manage/Updates',
        component: anncm,
    },
    {
        path: '/manage/create',
        component: create_announcement,
    },
    {
        path: '/manage/edit',
        component: edit_announcement,
    },
    {
        path: '/manage/schedule',
        component: sched,
    },
    {
        path: '/manage/resources',
        component: resource,
    },
    {
        path: '/manage/accounts',
        component: acc,
    },
]

export default new Router({
    mode: 'history',
    routes
})