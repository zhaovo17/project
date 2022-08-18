import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../view/home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/view/home/index'),
        },
        {
            path: '/about',
            component: () => import('@/view/about/index'),
            children:[
                { path: '/about/news',component: () => import('@/view/about/news'), },
                { path: '/about/contact', component: () => import('@/view/about/contact'), },
                {
                  path: '/about/donate',
                  component: () => import('@/view/about/donate'),
                  children: [
                    { path: '/about/donate/wechat', component: () => import('@/view/about/donate/wechat'), },
                    { path: '/about/donate/alipay', component: () => import('@/view/about/donate/alipay'), },
                    { path: '/about/donate*', redirect: '/about/donate/wechat' }
                  ]
                },
                { path: '/about/guide', component: () => import('@/view/about/guide'), },
                { path: '/about*', redirect: '/about/news' }
            ]
        },
        {
            path: '/last',
            component: () => import('@/view/last/index'),
        },
    ]
})


export default router