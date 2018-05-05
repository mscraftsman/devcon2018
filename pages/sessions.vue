<template>
  <div>
    <header-section></header-section>
    <footer-common></footer-common>
  </div>
</template>
<script>
    import headerSection from '~/components/common/header.vue'
    import footerCommon from '~/components/common/footer.vue'
    // import NoSSR from 'vue-no-ssr'

    export default {
    components: {
        headerSection,
        // 'no-ssr': NoSSR,
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
