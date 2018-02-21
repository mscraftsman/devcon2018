<template>
  <div>
    <header-section></header-section>
    <extra-main></extra-main>
    <extra-community></extra-community>
    <sponsorship></sponsorship>
  </div>
</template>

<script>

import headerSection from '~/components/header.vue'
import extraMain from '~/components/extra-main.vue'
import extraCommunity from '~/components/extra-community.vue'
import sponsorship from '~/components/sponsorship.vue'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    headerSection,
    'no-ssr': NoSSR,
    extraMain,
    extraCommunity,
    sponsorship
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
