// import { def } from "@vue/shared";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeComp from "../components/HomeComp";
import ProductComp from '../components/ProductComp';
import CartComp from "../components/CartComp";
import LoginComp from "../components/LoginComp";
import store from "@/Store/store";

let router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: "/",
            component: HomeComp
        },
        {
            path: "/products",
            component: ProductComp
        },
        {
            path: "/cart",
            component: CartComp
        },
        {
            path: "/login",
            component: LoginComp
        },

    ]
})
router.beforeEach((to, from) => {
    console.log("to", to);
    console.log("from", from);
    //return true
    if (to.path === "/cart" && store.state.isAuthenticated) {
        return true
    } else if (to.path === "/cart" && !store.state.isAuthenticated) {
        return "/login"
    }
    if (to.path === "/products" && store.state.isAuthenticated) {
        return true
    } else if (to.path === "/products" && !store.state.isAuthenticated) {
        return "/login"
    }
})
export default router