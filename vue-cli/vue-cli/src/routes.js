// default 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages 
import home from '@/pages/home'
import NotFound from '@/pages/404'
import Example from '@/pages/Example'

//Routering
export default new Router ({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component: home
        },
        {
            path:'/example',
            name:'example',
            component: example
        },
        {
            path:'*',
            name:'notFound',
            component: NotFound
        },
    ]
})