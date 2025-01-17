require('./bootstrap');

//REQUIRE VUE
window.Vue = require('vue')
import router from './router.js'

//ANIMATE ON SCROLL
import AOS from 'aos'
import 'aos/dist/aos.css'

//VUEX - STATEMANAGEMENT
import store from './store'

//VUE DATATABLE
import DataTable from '@andresouzaabreu/vue-data-table'
import '@andresouzaabreu/vue-data-table/dist/DataTable.css'
Vue.component("data-table", DataTable)

//VUE 2 EDITOR
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

//VUE TAGS
import InputTag from 'vue-input-tag'
Vue.component('input-tag', InputTag)

//VUE TOAST 
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true
});

//VUE UPLOAD FILE AGENT
import VueFileAgent from 'vue-file-agent';
import 'vue-file-agent/dist/vue-file-agent.css';
Vue.use(VueFileAgent);

//LOAD VUE COMPONENTS
Vue.component('updates', () => import('./pages/Updates.vue'))
Vue.component('schedules', () => import('./pages/Schedules.vue'))
Vue.component('log-in', () => import('./pages/Login.vue'))
Vue.component('resources', () => import('./pages/Resources.vue'))
Vue.component('blog', () => import('./pages/Blog.vue'))

//ADMIN
Vue.component('admin-main', () =>import('./pages/admin/Admin.vue'))

//VUE FILTER
import moment from 'moment'

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format('MMMM Do YYYY, h:mm a');
    }
})

Vue.filter('relativeTime', function (value) {
    if (value) {
        return moment(String(value), "MMMM Do YYYY, h:mm:ss a").fromNow();
    }
})

//COMMON METHODS (Dialog,AxiosApi,etc)
import common from './common'
Vue.mixin(common)

const app = new Vue({
    el: '#app',
    created() {
        AOS.init()
    },
    router,
    store
});







