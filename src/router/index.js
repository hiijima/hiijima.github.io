import Vue from 'vue'
import VueRouter from 'vue-router'
import SmoothScroll from 'vue-smoothscroll'
import About from '../views/About.vue'
import Content from '../views/Content'
import Portfolio from '../views/Portfolio.vue'
import Skillset from '../views/Skillset.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter, SmoothScroll)

const routes = [
  {
    path: '/',
    name: 'content',
    component: Content
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/skillset',
    name: 'skillset',
    component: Skillset
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = new VueRouter({
  routes
})

export default router
