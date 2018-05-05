<template>
  <div>
    <header-section></header-section>
    <extra-main></extra-main>
    <extra-community></extra-community>
    <sponsorship></sponsorship>
    <footer-common></footer-common>
  </div>
</template>
<script>
  import headerSection from '~/components/common/header.vue'
  import extraMain from '~/components/extra-main.vue'
  import extraCommunity from '~/components/extra-community.vue'
  import sponsorship from '~/components/sponsorship.vue'
  import footerCommon from '~/components/common/footer.vue'
  // import NoSSR from 'vue-no-ssr'

  export default {
    components: {
      headerSection,
      // 'no-ssr': NoSSR,
      extraMain,
      extraCommunity,
      sponsorship,
      footerCommon      
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
