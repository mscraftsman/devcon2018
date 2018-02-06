<template>
  <div>
    <section class="main full-section-container">
      <div class="logo-container">
        <div class="logo-wrapper">
          <img src="~/assets/images/logo.svg" alt="MSCC Logo" class="logo-svg">
          <h1 class="title">Developers Conference</h1>
          <div class="year-wrapper">
            2018
          </div>
        </div>

        <div class="footer-text-wrapper">
          <h3>Coming soon!</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/*
  * tejas@pagooah.com 
*/
export default {
  components: {

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

.main {
  background: linear-gradient(135deg, rgba(49,232,183, 0.8) 0%, rgba(40,71,217, 0.8) 100%), url(~/static/images/home-bg-2.jpg);
  background-size: cover, cover;
  background-position: center center;
  height: 100vh;

  .logo-container {
    grid-column: container;    
    display: grid;
    height: 100vh;

    .logo-wrapper {
      text-align: center;
      align-self: end;

      .logo-svg {
        height: 200px;
      }

      .title {
        font-family: var(--font-glacial);
        text-transform: uppercase;
        color: var(--color-white);
        font-size: 80px;
        font-weight: 500;
        margin: calc(var(--gutter) / 1);
        text-shadow: 0 10px 50px rgba(0, 0, 0, 0.05);
      }

      .year-wrapper {
        display: inline-block;
        font-family: var(--font-shentox);
        text-transform: uppercase;
        color: var(--color-white);
        font-size: 80px;
        line-height: 50px;
        padding: var(--gutter);
        
        padding-top: calc(var(--gutter) + 10px);
        font-weight: 700;
        background: linear-gradient(135deg, rgba(49,232,183, 1) 0%, rgba(40,71,217, 1) 100%);
        border-radius: 5px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
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
        font-size: 40px;
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
