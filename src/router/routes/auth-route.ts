import {RouteConstantUtil} from "../../util/constant/RouteConstantUtil.ts";
import {BaseRouteProps} from "./base-route.ts";
export const authRoute: BaseRouteProps[] = [
    {
        name: RouteConstantUtil.auth.login,
        path: '/login',
        component: () => import("@/view/auth/LoginView.vue"),
        meta: {authRequired:RouteConstantUtil.auth.authRequired, layout:'auth',sub_title:''}
    },
    {
        name: RouteConstantUtil.auth.initiateForgotPassword,
        path: "/initiate/forgetPassword",
        component: () => import("../../view/auth/InitiateForgotPasswordView.vue"),
        meta: {authRequired: RouteConstantUtil.auth.authRequired,layout:'auth',sub_title:''}
    },
]