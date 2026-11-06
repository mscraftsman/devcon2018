<template>
  <div>
    <header-section></header-section>
    <venue-main></venue-main>
    <venue-voila></venue-voila>
    <venue-flying></venue-flying>
    <venue-map></venue-map>
    <sponsorship></sponsorship>
    <footer-common></footer-common>
  </div>
</template>
<script>
  import headerSection from '~/components/common/header.vue'
  import venueMain from '~/components/venue-main.vue'
  import venueVoila from '~/components/venue-voila.vue'
  import venueFlying from '~/components/venue-flyingdodo.vue'
  import venueMap from '~/components/venue-map.vue'
  import sponsorship from '~/components/sponsorship.vue'
  import footerCommon from '~/components/common/footer.vue'
  // import NoSSR from 'vue-no-ssr'

  export default {
    components: {
      headerSection,
      // 'no-ssr': NoSSR,
      venueMain,
      venueVoila,
      venueFlying,
      venueMap,
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
