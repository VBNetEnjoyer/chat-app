import FirstAccount from "@/pages/FirstAccount.vue";
import SecondAccount from "@/pages/SecondAccount.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {path: "/", component: FirstAccount},
    {path: "/second-account", component: SecondAccount},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
