<template>
  <section class="service">
    <BackgroundHolder :title="title"/>
    <div id="direction">
      <h2>ディレクション</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
    <div id="coding">
      <h2>コーディング</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
    <div id="design">
      <h2>デザイン</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
  </section>
</template>
<script>
import BackgroundHolder from '../components/BackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Service'
    }
  },
  components: {
    BackgroundHolder
  }
}
</script>
<style lang="scss" scoped>
#direction {
  height: 1000px;
}

#coding {
  height: 1000px;
}

#design {
  height: 1000px;
}
</style>