<template>
  <div class="full-section-container fixed">
    <header class="main-header">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.svg" alt="MSCC Logo" class="logo-svg">
        </nuxt-link>
      </div>
      <div class="menu-wrapper">
        <ul class="menu-items">
          <li class="menu-item" :key="index" v-for="(item, index) in menuItems"><nuxt-link :to="item.url">{{item.name}}</nuxt-link></li>
        </ul>
      </div>
      <div class="register-button">
        <nuxt-link to="/">
          <span>Register</span>
        </nuxt-link>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Sessions',
          url: '/'
        },
        {
          name: 'Speakers',
          url: '/'
        },
        {
          name: 'Extras',
          url: '/'
        },
        {
          name: 'Hackathon',
          url: '/'
        },
        {
          name: 'Sponsors',
          url: '/'
        },
        {
          name: 'Contact',
          url: '/'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>


  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobiie: 540px;

  .full-section-container {
    display: grid;
    width: 100%;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];

    &.fixed {
      position: fixed;
      top: 0px;   
    }
  }

  .main-header {
    width: 100%;
    display: grid;
    height: 80px;
    grid-column: full;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1;
    align-items: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

    .logo-wrapper {
      grid-column: 1 / 2;
      height: 80px;
      background: linear-gradient(135deg, rgba(49,232,183, 1), rgba(40,71,217, 1));
      display: grid;
      align-items: center;
      justify-content: center;
      transform: skewX(-15deg) scaleX(1.1);
      

      a {
        display: block;
        height: 60px;
        transform: skewX(15deg) scaleX(0.95);

        img {
          height: 60px;
        }
      }
    }

    .menu-wrapper {
      grid-column: 2 / 3;
      text-align: right;
      height: 80px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      

      .menu-items {
        &, .menu-item {
          display: inline-block;
          margin: 0;
          padding: 0;
          list-style-type: none;
          align-self: center;
        }
        
        .menu-item {
          font-size: 23px;

          &:after {
            content: '/';
            padding: 0 calc(var(--gutter) / 1);
            font-family: var(--font-shentox);            
            color: #ccc;
          }

          a {
            color: var(--color-black);
            font-family: var(--font-shentox);
            text-transform: uppercase;
            font-weight: 400;
            text-decoration: none;
            //text-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
          }

          &:last-child {
            margin-right: 0;

            &:after {
              content: none;
            }
          }
        }
      }
    }

    .register-button {
      grid-column: 3 / 4;
      background: var(--color-blue);
      transform: skewX(-15deg) scaleX(1.1);
      
      a {
        color: var(--color-white);
        font-family: var(--font-shentox);
        text-transform: uppercase;
        font-weight: 400;
        text-decoration: none;
        font-size: 23px;
        display: block;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        transform: skewX(15deg) scaleX(0.95);
        
      }
    }
  }
</style>
