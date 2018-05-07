<template>
  <div>
    <header-section></header-section>
    <div class="full-section-container">
      <div class="container">
        <div class="page-title-wrapper">
          <small>Plan your attendance to your liking</small>
          <h1>Agenda</h1>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>

    <div class="full-section-container" id="sessions" v-if="hasSessions">
      <div class="sessiondays-wrapper" v-for="(day, index) in sessions" :key="index">
          <div class="section-title-wrapper">
              <small>{{day.date | moment("Do MMMM YYYY")}}</small>
              <h2>{{day.date | moment("dddd")}}</h2>
          </div>
          <div class="section-content-wrapper">
              <div class="session-table-container heading">
                  <div class="session-table-row-wrapper">
                  <div class="session-table-cell time">Time</div>
                  <div class="session-table-cell educator-1">Educator 1</div>
                  <div class="session-table-cell educator-2">Educator 2</div>
                  <div class="session-table-cell accelerator">Accelerator</div>
                  <div class="session-table-cell flying">Flying Dodo</div>
                  </div>
              </div>
          </div>
          <div class="section-description-wrapper">
              <div class="sessions-container">
                  <div class="session-wrapper" v-for="(session, index) in day" :key="index">
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div class="full-section-container" v-if="!hasSessions">
      <div class="section-title-wrapper">
      <div class="section-content-wrapper">
        <div class="sessions-container">
          <div class="sessionize-loader" data-sessionize-load-url="https://sessionize.com/api/v2/mkv9lwxo/view/Grid?under=True"><div class="sz-spinner"></div></div>
        </div>
      </div>
      </div>
    </div>

    <footer-common></footer-common>
  </div>
</template>
<script>
import headerSection from '~/components/common/header.vue'
import footerCommon from '~/components/common/footer.vue'
// import NoSSR from 'vue-no-ssr'

import axios from 'axios'

export default {
  head: {
    script: [
      { src: '/sessionize.js', type: 'text/javascript' }
    ]
  },
  components: {
      headerSection,
      // 'no-ssr': NoSSR,
      footerCommon
  },
  data () {
      return {
          sessions: [],
      }
  },
  mounted() {
      axios.get("https://sessionize.com/api/v2/m1l86vhf/view/grid")
        .then( response => { this.sessions = response.data })
        .catch( error => { console.log(error); });
  },
  computed: {
    hasSessions () {
      return false
      // if (this.sessions && this.sessions.length) {
      //     return true
      // }
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

  .logos-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: calc(var(--gutter) / 1);

    .logo-wrapper {
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
      background: transparent;
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
        transform: translateY(-20px);
      }

      .image {
        padding: var(--gutter);
        background: rgba(0, 0, 0, 0.1);
        img {
          width: 100%;
        }
      }

      .details {
        background: var(--color-blue);
        padding: calc(var(--gutter) / 2);
        font-family: var(--font-glacial);
        font-size: 17px;
        text-transform: uppercase;

        .row {
          width: 100%;
          display: flex;

          label {
            width: 35%;
            margin-right: calc(var(--gutter) / 2);
            color: var(--color-white);
            display: block;
          }

          span {
            display: block;
            font-weight: 300;
            text-transform: capitalize;
            color: rgba(255, 255, 255, 0.8);
          }
        }

        .download-button {
          width: 100%;
          margin-top: calc(var(--gutter) / 2);

          .download {
            width: 100%;
            height: 45px;
            background: var(--color-green);
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: var(--color-white);
          }
        }
      }
    }
  }

  .banners-container {
    width: 100%;

    .banner-wrapper {
      background: transparent;
      transition: all 0.3s ease-in-out;
      width: 100%;
      margin-bottom: var(--gutter);

      .image {
        padding: var(--gutter);
        background: rgba(0, 0, 0, 0.1);
        text-align: center;

        img {
          max-width: 100%;
          margin: 0 auto;
        }
      }

      .details {
        background: var(--color-blue);
        padding: calc(var(--gutter) / 2);
        font-family: var(--font-glacial);
        font-size: 17px;
        text-transform: uppercase;

        .row {
          width: 100%;
          display: flex;

          label {
            width: 100px;
            margin-right: calc(var(--gutter) / 2);
            color: var(--color-white);
            display: block;
          }

          span {
            display: block;
            font-weight: 300;
            text-transform: capitalize;
            color: rgba(255, 255, 255, 0.8);
          }
        }

        .code {
          text-transform: initial;
          padding: calc(var(--gutter) / 2);
          background: rgba(255, 255, 255, 0.2);
          margin-top: calc(var(--gutter) / 2);
          border-radius: 3px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
  .sz-spinner { width: 40px; height: 40px; margin: 100px auto; background-color: #1ab394; border-radius: 100%;   -webkit-animation: sz-scaleout 1.0s infinite ease-in-out; animation: sz-scaleout 1.0s infinite ease-in-out; } @-webkit-keyframes sz-scaleout {0% { -webkit-transform: scale(0) }100% { -webkit-transform: scale(1.0); opacity: 0; } } @keyframes sz-scaleout { 0% { -webkit-transform: scale(0); transform: scale(0); } 100% { -webkit-transform: scale(1.0);  transform: scale(1.0); opacity: 0; } }
</style>
