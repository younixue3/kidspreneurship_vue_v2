import { createRouter, createWebHistory } from 'vue-router'
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
import BackBeritaPage from "@/views/Back/Publikasi/Berita/BackBeritaPage";
import BackPengumumanPage from "@/views/Back/Publikasi/Pengumuman/BackPengumumanPage";
import BackGaleriPage from "@/views/Back/Publikasi/Galeri/BackGaleriPage";

import store from "@/store";
import BackEventPage from "@/views/Back/Event/BackEventPage";
import PesertaPage from "@/views/Back/Admin/PesertaPage";

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
    meta: {requiresAuth: true},
    children: [
      {
        path: '',
        component: DashboardPage
      },
      {
        path: 'publikasi',
        name: 'publikasi',
        children: [
          {
            path: 'berita',
            component: BackBeritaPage
          },
          {
            path: 'pengumuman',
            component: BackPengumumanPage
          },
          {
            path: 'galeri',
            component: BackGaleriPage
          }
        ]
      },
      {
        path: 'event',
        name: 'event',
        children: [
          {
            path: '',
            component: BackEventPage
          }
        ]
      },
      {
        path: 'admin',
        name: 'admin',
        children: [
          {
            path: 'peserta',
            component: PesertaPage
          }
        ]
      }
    ]
  },
  {
    path: '/tentang',
    name: 'tentang',
    component: SignUpPage
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

index.beforeEach((to, from, next) => {
  store.commit('removeFormSide')
  // if (vuex.state.modal.status) {
  //   vuex.state.modal.status = false
  // }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.access && store.state.auth.refresh && store.state.profile.is_staff) {
      next()
    } else {
      next({
        path: '/signin'
      })
    }
    next()
  } else {
    next()
  }
})

export default index
