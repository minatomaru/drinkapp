<template>
  <section class="home">
    <TopView/>
    <HometoAbout/>
    <HometoWork/>
    <HometoService/>
  </section>
</template>
<script>
import TopView from '../components/TopView.vue'
import HometoAbout from '../components/HometoAbout.vue'
import HometoWork from '../components/HometoWork.vue'
import HometoService from '../components/HometoService.vue'

export default {
  components: {
    TopView,
    HometoAbout,
    HometoWork,
    HometoService,
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>