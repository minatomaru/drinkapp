<template>
  <section class="work">
    <BackgroundHolder :title="title"/>
    <div id="work-1">
      <h2>Work-1</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
    <div id="work-2">
      <h2>Work-2</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
    <div id="work-3">
      <h2>Work-3</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
  </section>
</template>
<script>
import BackgroundHolder from '../components/BackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Work'
    }
  },
  components: {
    BackgroundHolder
  }
}
</script>
<style lang="scss" scoped>
#work-1 {
  height: 1000px;
}

#work-2 {
  height: 1000px;
}

#work-3 {
  height: 1000px;
}
</style>