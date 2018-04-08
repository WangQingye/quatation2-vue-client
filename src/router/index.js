import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import GoodList from '@/components/GoodList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Main',
        component: Main,
        children: [{
            path: '/goods',
            component: GoodList
        }, ]
    }]
})
