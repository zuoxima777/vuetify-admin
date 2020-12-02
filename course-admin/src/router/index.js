import Vue from 'vue'
// import VueRouter from 'vue-router'
import Router from 'vue-router'
// 导入组件
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Welcome from '../views/admin/welcome.vue'
// Vue.use(VueRouter);
Vue.use(Router);

// const routes = [
	
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
export default new Router(
    {
        mode: 'history', // history hash 推荐使用history hash 的话前面由前缀，url形式不美观，history推荐使用，路由前面只有以恶搞#
        base: process.env.BASE_URL,
        routes: [{
            path: '*',
            redirect: "/login",
        }, {
            path: "/login",
            component: Login
        }, {
            path: "/",
            name: "admin", 
            // name属性后面会用到
            component: Admin,
            children: [{
                path: 'welcome',
                name: 'welcome',
                component: Welcome
            }]
        }]
    }

)