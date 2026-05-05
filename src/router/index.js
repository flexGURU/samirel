// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import GetQuotePage from "../pages/GetQuotePage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Services", component: ServicesPage },
  { path: "/products", name: "Products", component: ProductsPage },
  { path: "/contact", name: "Contact", component: ContactPage },
//   { path: "/get-quote", name: "GetQuote", component: GetQuotePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
