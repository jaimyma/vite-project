<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
import LandingPage from './components/LandingPage.vue'
import Stats from './components/Stats.vue' 
import Content from './components/Content.vue'  
import carousel from './components/carousel.vue'

export default {
  components: {
    LandingPage,
    Stats,
    Content,
    carousel,
  },
}
</script>

