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
import LombaPage from "@/views/Front/Event/Lomba/LombaPage";
import LombaDetailPage from "@/views/Front/Event/Lomba/LombaDetailPage";
import AnnouncementPage from "@/views/Front/Announcement/AnnouncementPage";
import AnnouncementDetailPage from "@/views/Front/Announcement/AnnouncementDetailPage";
import DashboardPage from "@/views/Back/Dashboard/DashboardPage";
import LayoutDashboardPage from "@/views/Back/Layout/LayoutDashboardPage";
import SignUpPage from "@/views/Auth/SignUpPage";
import SignInPage from "@/views/Auth/SignInPage";

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
        path: 'pengumuman',
        component: AnnouncementPage
      },
      {
        path: 'pengumuman/:slug',
        component: AnnouncementDetailPage
      },
      {
        path: 'event/:slug',
        component: EventDetailPage
      },
      {
        path: 'event/:slug/lomba',
        component: LombaPage
      },
      {
        path: 'event/:slug/lomba/:id',
        component: LombaDetailPage
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: LayoutDashboardPage,
    children: [
      {
        path: '',
        component: DashboardPage
      },
    ]
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInPage
  },
]

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default index
