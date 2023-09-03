import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SinglePost from '../components/SinglePost.vue'
import PostByCategory from '../components/PostByCategory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/posts/:id',
      name: 'singlePost',
      component: SinglePost
    },

    {
      path: '/posts/:category/:id',
      name: 'postCategory',
      component: PostByCategory
    }
  ]
})

export default router
