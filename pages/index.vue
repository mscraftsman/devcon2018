<template>
  <div>
    <header-section></header-section>
    <home-main></home-main>
    <home-intro></home-intro>
    <home-video></home-video>
  </div>
</template>

<script>
/*
  * tejas@pagooah.com
*/

import headerSection from '~/components/header.vue'
import homeMain from '~/components/home-main.vue'
import homeIntro from '~/components/home-intro.vue'
import homeVideo from '~/components/home-Video.vue'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    headerSection,
    'no-ssr': NoSSR,
    homeMain,
    homeIntro,
    homeVideo
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
