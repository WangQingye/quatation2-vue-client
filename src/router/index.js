import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import GoodList from '@/components/GoodList'
import AddGood from '@/components/AddGood'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Main',
        redirect: '/goods',
        component: Main,
        children: [{
            path: '/goods',
            component: GoodList
        }, {
            path: '/addGood',
            component: AddGood
        }, ]
    }]
})
