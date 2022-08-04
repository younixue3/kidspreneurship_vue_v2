import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from "@/views/Front/Auth/Signin";
import HomePage from "@/views/Front/HomePage";
import LayoutPage from "@/views/Front/Layout/LayoutPage";
import GalleryPage from "@/views/Front/GalleryPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutPage,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'gallery',
        component: GalleryPage
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
