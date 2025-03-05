// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Form from '../views/Form.vue'

// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/form', component: Form }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: SignUp },
  {
    path: '/dashboard',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('user');
      if (!isAuthenticated) {
        next('/');
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
