<template>
  <div>
    <header-section></header-section>
    <home-main></home-main>
  </div>
</template>

<script>
/*
  * tejas@pagooah.com
*/

import headerSection from '~/components/header.vue'
import homeMain from '~/components/home-main.vue'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    headerSection,
    'no-ssr': NoSSR,
    homeMain
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
