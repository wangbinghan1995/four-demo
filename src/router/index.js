import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List/list'
import Index from '@/components/Index/index'
import indexType from '@/components/Index/indexType'
import Mine from '@/components/Mine/Mine'
import Regist from "@/components/Regist/Regist"
import Regist1 from "@/components/Regist/Regist1"
import Login from "@/components/Login/Login"
import Detail from "@/components/Detail/Detail"
import Cart from "@/components/Cart/Cart"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list/:proname/:proID',
      name: 'List',
      component: List
    },
    {
      path: '/indexType/:proid',
      name: 'indexType',
      component: indexType
    },
    {
      path: '/1_1',
      name: 'Index',
      component: Index
    },
    {
    	path: '/5_1',
    	name: 'Mine',
    	component: Mine
    },
    {
    	path: '/4_1',
    	name: 'Cart',
    	component: Cart
    },
    {
    	path: '/regist',
    	name: 'Regist',
    	component: Regist
    },
     {
    	path: '/regist1',
    	name: 'Regist1',
    	component: Regist1
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/detail',
    	name: 'Detail',
    	component: Detail
    },
     {
    	path: '/list',
    	name: 'List',
    	component: List
    }
    
  ]
})
