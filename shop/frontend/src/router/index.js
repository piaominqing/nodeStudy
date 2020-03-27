import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from "@/views/Shop.vue";
import Cart from "@/views/Cart.vue";
import Orders from "@/views/Orders.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "shop",
    component: Shop
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
