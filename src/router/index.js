import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from "@/views/Front/Auth/Signin";
import HomePage from "@/views/Front/HomePage";
import LayoutPage from "@/views/Front/Layout/LayoutPage";
import GalleryPage from "@/views/Front/Gallery/GalleryPage";
import GalleryDetailPage from "@/views/Front/Gallery/GalleryDetailPage";
import BeritaPage from "@/views/Front/Berita/BeritaPage";
import BeritaDetailPage from "@/views/Front/Berita/BeritaDetailPage";
import EventDetailPage from "@/views/Front/Event/EventDetailPage";

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
      },
      {
        path: 'gallery/:id',
        component: GalleryDetailPage
      },
      {
        path: 'berita',
        component: BeritaPage
      },
      {
        path: 'berita/:slug',
        component: BeritaDetailPage
      },
      {
        path: 'event/:slug',
        component: EventDetailPage
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
