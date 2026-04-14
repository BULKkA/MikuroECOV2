import { createRouter, createWebHistory } from 'vue-router'

// Import views
import IndexView from '../components/Common/IndexView.vue'
import RollView from '../components/Common/RollView.vue'
import LoginView from '../components/Common/LoginView.vue'
import RegisterView from '../components/Common/RegisterView.vue'
import ProfileView from '../components/Common/ProfileView.vue'
import PostDetailView from '../components/Common/PostDetailView.vue'
import AdminView from '../components/Common/AdminView.vue'
import AboutView from '../components/Common/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/roll',
      name: 'roll',
      component: RollView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/posts/:id',
      name: 'post-detail',
      component: PostDetailView,
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/Common/NotFoundView.vue')
    }
  ],
})

export default router
