import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Cart from '../views/Cart.vue'
import Category from '../views/Category.vue'
// import ProductList from '../views/ProductList.vue'
// import ProductDetail from '../views/ProductDetail.vue'
// import User from '../views/User/Person.vue'
// import Order from '../views/Order.vue'
// import OrderDetail from '../views/OrderDetail.vue'
// import Setting from '../views/Setting.vue'
// import Address from '../views/Address.vue'
// import AddressEdit from '../views/AddressEdit.vue'
import Login from '../views/Login.vue'
// import About from '../views/About.vue'
// import CreateOrder from '../views/CreateOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 2
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      index: 1
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      index: 1
    },
    component: () => import('../views/Category.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      index: 1
    },
    component: () => import('../views/Cart/Cart.vue'),
  },
 
  {
    path: '/product-list',
    name: 'product-list',
    meta: {
      index: 2
    },
    component: () => import('../views/Search/ProductList.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    meta: {
      index: 3
    },
    component: () => import('../views/Search/ProductDetail.vue'),
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      index: 1
    },
    component: () => import('../views/Person.vue'),
  },
  {
	  path: '/vip',
	  name: 'user-vip',
	  meta: {
	    index: 2
	  },
	  component: () => import('../views/User/VIP.vue'),
  },
  {
  	  path: '/discount',
  	  name: 'user-discount',
  	  meta: {
  	    index: 2
  	  },
  	  component: () => import('../views/User/DisCount.vue'),
  },
  {
  	  path: '/map',
  	  name: 'user-map',
  	  meta: {
  	    index: 2
  	  },
  	  component: () => import('../views/User/Map.vue'),
  },
  {
  	  path: '/gift',
  	  name: 'user-gift',
  	  meta: {
  	    index: 2
  	  },
  	  component: () => import('../views/User/Gift.vue'),
  },
	{
		  path: '/setup',
		  name: 'user-setup',
		  meta: {
		    index: 2
		  },
		  component: () => import('../views/User/setUp.vue'),
	},
  {
    path: '/order',
    name: 'order',
    meta: {
      index: 2
    },
    component: () => import('../views/User/Order.vue'),
  },
  {
    path: '/order-detail',
    name: 'order-detail',
    meta: {
      index: 3
    },
    component: () => import('../views/User/OrderDetail.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      index: 2
    },
    component: () => import('../views/User/Setting.vue'),
  },
  {
    path: '/address',
    name: 'address',
    meta: {
      index: 2
    },
    component: () => import('../views/User/Address.vue'),
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    meta: {
      index: 3
    },
    component: () => import('../views/Cart/AddressEdit.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      index: 2
    },
    component: () => import('../views/User/About.vue'),
  },
  {
    path: '/create-order',
    name: 'create-order',
    meta: {
      index: 2
    },
    component: () => import('../views/Cart/CreateOrder.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
