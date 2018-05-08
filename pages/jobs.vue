<template>
  <div>
    <header-section></header-section>
    <div class="full-section-container">
      <div class="container">
        <div class="page-title-wrapper">
          <small>Looking for opportunities?</small>
          <h1>Jobs</h1>
          <p></p>
        </div>
      </div>
    </div>

    <div class="full-section-container" id="jobs" v-if="hasjobs">
      <div class="section-title-wrapper">
        <small>Current job listings from our Sponsors</small>
        <h2>Apply Now</h2>
        <div class="jobs-container">
          <div class="jobs-wrapper">
            <div v-for="(job, index) in jobs" :key="index">
              <div class="job-wrapper" v-if="job.gsx$approved.$t == 1">
                <div class="title-company-wrapper">
                  <div class="job-company">{{job.gsx$companyemployer.$t}}</div>
                  <div class="job-title">{{job.gsx$jobtitle.$t}}</div>
                </div>
                <div class="apply-wrapper">
                  <div class="job-apply">
                    <a v-bind:href="job.gsx$linktojoblisting.$t + '?utm_source=devconmru&utm_medium=link&utm_campaign=job'" target="_blank" rel="noopener">
                      Apply <i class="fa fa-chevron-right"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <sponsorship></sponsorship>
    <footer-common></footer-common>
  </div>
</template>
<script>
  import headerSection from '~/components/common/header.vue'
  import sponsorship from '~/components/sponsorship.vue'
  import footerCommon from '~/components/common/footer.vue'
  // import NoSSR from 'vue-no-ssr'

  import _ from 'lodash'
  import axios from 'axios'

  export default {
    components: {
        headerSection,
        // 'no-ssr': NoSSR,
        sponsorship,
        footerCommon
    },
    data () {
        return {
            jobs: []
        }
    },
    mounted () {
        axios.get("https://spreadsheets.google.com/feeds/list/1TeZ1LzcsWpm8Md87YgSmJn3cgMYM08M1TYvuOH-thOM/odl5e2a/public/values?alt=json")
            .then( response => { this.jobs = (response.data.feed.entry).reverse(); })
            .catch( error => { console.log(error); })
    },
    computed: {
        hasjobs () {
          let active = []

          if (this.jobs && this.jobs.length) {
            let activeJobs = this.jobs.filter(job => {
              return job.gsx$approved.$t === "1";
            })

            if (activeJobs && activeJobs.length) {
              return true;
            }
          }
        }
    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobile: 540px;

  .full-section-container {
    display: grid;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];
    background: transparent;
    background-size: cover, cover;

    .container {
      grid-column: container;
      padding: calc(var(--gutter) * 2) calc(var(--gutter) / 2);
    }

    &[data-bg="grey"] {
      background: rgba(0,0,0,.05);
    }
  }

  * {
    box-sizing: border-box;
  }

  .page-title-wrapper {
    padding: calc(var(--gutter) * 2.5) 0;
    grid-column: container;
    margin-top: 80px;

    small {
      margin: 0 0 10px 0;
      text-transform: uppercase;
      color: var(--color-green);
      font-family: var(--font-shentox);
      font-size: 18px;
      display: block;
    }

    h1 {
      margin: 0 0 calc(var(--gutter) / 2) 0;
      text-transform: uppercase;
      font-size: 65px;
      line-height: 55px;
      font-family: var(--font-shentox);
    }

    p {
      line-height: 27px;
      font-size: 20px;
      font-family: var(--font-glacial);
      font-weight: 300;
      color: #47494e;
    }
  }

  .section-title-wrapper {
    margin-bottom: calc(var(--gutter) * 3);
    grid-column: container;

    small {
      margin: 0 0 10px 0;
      text-transform: uppercase;
      color: var(--color-blue);
      font-family: var(--font-shentox);
      font-size: 18px;
    }

    h2 {
      margin: 0;
      text-transform: uppercase;
      font-size: 53px;
      line-height: 55px;
      font-family: var(--font-glacial);

    }

    p {
      line-height: 25px;
      font-size: 18px;
      font-family: var(--font-glacial);
      font-weight: 300;
    }
  }

  .jobs-container {
    padding-right: 25px;
  }

  .jobs-container:before {
    content: '';
    display: table;
  }

  .jobs-container:after {
    content: '';
    display: table;
    clear: both;
  }

  .jobs-container::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  }

  .jobs-container::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  .jobs-container::-webkit-scrollbar-thumb {
    background-color: #000000;
  }

  .jobs-container .job-wrapper {
    width: calc(99.9% * 1 - (40px - 40px * 1));
    margin-bottom: 20px;
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }

  .jobs-container .job-wrapper:nth-child(1n) {
    float: left;
    margin-right: 40px;
    clear: none;
  }

  .jobs-container .job-wrapper:last-child {
    margin-right: 0;
  }

  .jobs-container .job-wrapper:nth-child(undefinedn) {
    margin-right: 0;
    float: right;
  }

  .jobs-container .job-wrapper:nth-child(undefinedn + 1) {
    clear: both;
  }

  .jobs-container .job-wrapper:before {
    content: '';
    display: table;
  }

  .jobs-container .job-wrapper:after {
    content: '';
    display: table;
    clear: both;
  }

  .jobs-container .job-wrapper .title-company-wrapper {
    width: calc(99.9% * 3/4 - (20px - 20px * 3/4));
  }

  .jobs-container .job-wrapper .title-company-wrapper:nth-child(1n) {
    float: left;
    margin-right: 20px;
    clear: none;
  }

  .jobs-container .job-wrapper .title-company-wrapper:last-child {
    margin-right: 0;
  }

  .jobs-container .job-wrapper .title-company-wrapper:nth-child(4n) {
    margin-right: 0;
    float: right;
  }

  .jobs-container .job-wrapper .title-company-wrapper:nth-child(4n + 1) {
    clear: both;
  }

  .jobs-container .job-wrapper .apply-wrapper {
    width: calc(99.9% * 1/4 - (20px - 20px * 1/4));
    text-align: right;
  }

  .jobs-container .job-wrapper .apply-wrapper:nth-child(1n) {
    float: left;
    margin-right: 20px;
    clear: none;
  }

  .jobs-container .job-wrapper .apply-wrapper:last-child {
    margin-right: 0;
  }

  .jobs-container .job-wrapper .apply-wrapper:nth-child(4n) {
    margin-right: 0;
    float: right;
  }

  .jobs-container .job-wrapper .apply-wrapper:nth-child(4n + 1) {
    clear: both;
  }

  .jobs-container .job-wrapper .job-company {
    font-family: "Shentox", Helvetica, Arial;
    color: rgba(0, 0, 0, .5);
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
  }

  .jobs-container .job-wrapper .job-title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 13.33333px;
  }

  .jobs-container .job-wrapper .job-apply a {
    display: inline-block;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 3px;
    background: transparent;
    border: 2px solid #FF3A00;
    color: #FF3A00;
    text-decoration: none;
    font-size: 15px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .jobs-container .job-wrapper .job-apply a i {
    margin-left: 5px;
  }

  .jobs-container .job-wrapper .job-apply a:hover {
    background: #FF3A00;
    color: #ffffff;
  }

  .jobs-container .job-wrapper .job-apply a:hover i {
    color: #ffffff;
  }

  .jobs-container .job-wrapper:last-child {
    border-bottom: 0;
  }
</style>
