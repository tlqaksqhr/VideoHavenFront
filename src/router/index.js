import Vue from 'vue'
import VueRouter from 'vue-router'
import SeriesListView from '@/views/SeriesListView'
import VideoListView from '@/views/VideoListView'
import VideoPageView from '@/views/VideoPageView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SeriesListView',
    component: SeriesListView
  },
  {
    path: '/series/:id',
    name: 'VideoListView',
    component: VideoListView
  },
  {
    path: '/video/:id',
    name: 'VideoPageView',
    component: VideoPageView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
