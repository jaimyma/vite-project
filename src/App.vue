<template>
  <LandingPage />
  <Stats />
  <Content />
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import Stats from './components/Stats.vue' 
import Content from './components/Content.vue'

export default {
  components: {
    LandingPage,
    Stats,
    Content,
  },
}
</script>

