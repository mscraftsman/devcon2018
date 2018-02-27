<template>
  <div>
    <header-section></header-section>
    <home-main></home-main>
    <home-intro></home-intro>
    <home-video></home-video>
    <home-cfp></home-cfp>
    <home-sponsors></home-sponsors>
    <home-gallery></home-gallery>
    <footer-common></footer-common>
  </div>
</template>

<script>
/*
  * tejas@pagooah.com
*/

import headerSection from '~/components/header.vue'
import homeMain from '~/components/home-main.vue'
import homeIntro from '~/components/home-intro.vue'
import homeVideo from '~/components/home-video.vue'
import homeCfp from '~/components/home-cfp.vue'
import homeSponsors from '~/components/home-sponsors.vue'
import homeGallery from '~/components/home-gallery.vue'
import footerCommon from '~/components/common/footer.vue'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    headerSection,
    'no-ssr': NoSSR,
    homeMain,
    homeIntro,
    homeVideo,
    homeCfp,
    homeSponsors,
    homeGallery,
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
