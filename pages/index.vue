<template>
  <div>
    <header-section></header-section>
    <section class="main full-section-container">
      <div class="logo-container">
        <div class="logo-wrapper">
          <!-- <img src="~/assets/images/logo.svg" alt="MSCC Logo" class="logo-svg"> -->
          <h1 class="title">Developers Conference</h1>
          <div class="year-wrapper">
            2018
          </div>
        </div>
        <div class="description-wrapper">
          The biggest tech event in Mauritius!
        </div>
        <div class="timer-wrapper">
          <div class="timer">
            <no-ssr>
              <Countdown deadline="May 17, 2018"></Countdown>
            </no-ssr>
          </div>
          <div class="register">
            <nuxt-link to="/">Register</nuxt-link> 
          </div>
        </div>

        <div class="footer-text-wrapper">
          <h3>17 - 19 May — Voila Hotel & Flying Dodo, Bagatelle</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/*
  * tejas@pagooah.com 
*/

import headerSection from '~/components/header.vue'
import Countdown from '~/components/Countdown.vue'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    headerSection,
    Countdown,
    'no-ssr': NoSSR
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

:root {
  --color-green: #31e8b7;
  --color-blue: #2847d9;
  --color-white: #fff;
  --color-black: #333;
  --font-glacial: "GlacialIndifference";
  --font-shentox: "Shentox";
  --gutter: 20px;
}

$tablet: 1024px;
$tablet-portrait: 768px;
$mobiie: 540px;

.full-section-container {
  display: grid;
  grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];
}

* {
  box-sizing: border-box;
}

@keyframes home {
	0% {
		background-position: 0% 50%, center center;
	}
	50% {
		background-position: 100% 50%, center center;
	}
	100% {
		background-position: 0% 50%, center center;
	}
}

.main {
  background: linear-gradient(135deg, rgba(49,232,183, 0.9) 0%, rgba(40,71,217, 0.4) 50%), url(~/static/images/home-bg-2.jpg);
  background-size: 100%, cover;
  background-position: center center;
  height: 100vh;

  // animation-name: home;
  // animation-timing-function: ease-in-out;
  // animation-iteration-count: infinite;
  // animation-duration: 5s;

  .logo-container {
    grid-column: container;    
    display: grid;
    grid-auto-rows: auto;
    height: calc( 100vh - 80px);
    margin-top: 80px;

    .logo-wrapper {
      text-align: left;
      align-self: end;
      display: flex;
      align-items: center;
      margin-bottom: calc(var(--gutter) * 2);

      .logo-svg {
        height: 40px;
        margin-right: calc(var(--gutter) / 1);
      }

      .title {
        font-family: var(--font-shentox);
        text-transform: uppercase;
        color: var(--color-white);
        font-size: 40px;
        line-height: 60px;
        font-weight: 500;
        margin: 0;
        text-shadow: 0 10px 50px rgba(0, 0, 0, 0.05);
        margin-right: calc(var(--gutter) / 1);
      }

      .year-wrapper {
        display: inline-flex;
        font-family: var(--font-shentox);
        text-transform: uppercase;
        color: var(--color-white);
        font-size: 50px;
        line-height: 30px;
        padding: 21px 15px 16px 15px;
        height: 68px;
        font-weight: 700;
        background: linear-gradient(135deg, rgba(49,232,183, 1) 0%, rgba(40,71,217, 1) 100%);
        border-radius: 5px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
      }
    }

    .description-wrapper {
      color: var(--color-white);
      font-size: 100px;
      font-family: var(--font-glacial);
      text-transform: uppercase;
    }

    .timer-wrapper {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-gap: calc(var(--gutter) * 2);
      align-items: center;

      .timer {
        grid-column: 1 / 2;
        justify-self: end;
      }

      .register {
        grid-column: 2 / 3;
        justify-self: start;
        width: 100%;

        
        a {
          height: 70px;
          background: var(--color-blue);
          border-radius: 3px;
          font-family: var(--font-shentox);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          color: var(--color-white);
          text-transform: uppercase;
          font-size: 30px;
          text-decoration: none;
          width: 60%;
        }
      }

      .vue-countdown {
        font-family: var(--font-glacial);
        color: var(--color-green);
      }
    }

    .footer-text-wrapper {
      align-self: end;
      text-align: center;
      padding-bottom: calc(var(--gutter) + 10px);

      h3 {
        color: var(--color-white);
        font-family: var(--font-shentox);
        font-weight: 500;
        text-transform: uppercase;
        font-size: 30px;
      }
    }
  }
}


@media (max-width: $tablet-portrait) {
  .main {
    .logo-container {
      .logo-wrapper {
        .logo-svg {
          max-height: 140px;
        }
        .title {
          font-size: 50px;
        }
        .year-wrapper {
          font-size: 50px;
          line-height: 30px;
          padding-top: calc(var(--gutter) + 5px);
        }
      }
      .footer-text-wrapper {
        h3 {
          font-size: 25px;
        }
      }
    }
  }
}

</style>
