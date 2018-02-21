<template>
  <div class="full-section-container" id="sponsors">
    <div class="section-title-wrapper">
      <small>We're backed by some big players!</small>
      <h2>Sponsors</h2>
    </div>
    <div class="section-description-wrapper">
      <div class="sponsors-container" v-if="hassponsors">
        <div class="sponsor-wrapper" v-for="(sponsor, index) in sponsors" :key="index">
          <div class="image-wrapper">
            <a target="_blank" :href="sponsor.url">
              <img :src="sponsorImage(sponsor)" :alt="sponsor.name">
            </a>
          </div>
        </div>
      </div>
      <div class="button-container">
        <a href="/DevCon2018-SponsorshipProposal.pdf" target="_blank" class="button">Become a sponsor</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sponsors: [
        {
          name: 'IOS Indian Ocean Software Ltd.',
          image: 'ios.jpg',
          url: 'http://ios.mu/'
        },
        {
          name: 'LSL Digital',
          image: 'lsldigital.png',
          url: 'http://lsl.digital'
        },
        {
          name: 'Extension Interactive',
          image: 'extension_interactive.png',
          url: 'http://maurice.extension-interactive.com/'
        },
        {
          name: 'Graphics Temple',
          image: 'Graphics_Temple.jpg',
          url: 'http://graphicstemple.io'
        }
      ]
    }
  },
  computed: {
    hassponsors () {
      if (this.sponsors && this.sponsors.length) {
        return true
      }
    }
  },
  methods: {
    sponsorImage (sponsor) {
      if (sponsor && sponsor.image && sponsor.image !== null) {
        return '/images/sponsors/' + sponsor.image
      } else {
        return '/images/sponsors/default.jpg'
      }
    }
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
    padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);
  }

  * {
    box-sizing: border-box;
  }

  .section-title-wrapper {
    margin-bottom: calc(var(--gutter) * 3);
    grid-column: container;
    text-align: center;

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
    }
  }

  .section-description-wrapper {
    grid-column: container;

    .sponsors-container {
      display: flex;
      margin-bottom: calc(var(--gutter) * 2);
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .sponsor-wrapper {
        margin-bottom: calc(var(--gutter) / 1);
        width: calc(100% * 1/5);


        .image-wrapper {
          text-align: center;
          margin-bottom: calc(var(--gutter) / 2);

          a {
            display: block;
            

            &:hover {
              img {
                opacity: 1;
                filter: grayscale(0);
              }
            }

            img {
              max-width: 70%;
              margin: 0 auto;
              filter: grayscale(100%);
              opacity: 0.6;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }

    .button-container {
      text-align: center;

      .button {
        height: 45px;
        border-radius: 5px;
        border: 3px solid var(--color-blue);
        color: var(--color-blue);
        font-family: var(--font-shentox);
        padding: 0 calc(var(--gutter));
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: $tablet) {
    .section-title-wrapper {
      h2 {
        font-size: 45px;
        line-height: 50px;
      }
    }

    .section-description-wrapper {
      .sponsors-container {
        grid-template-columns: repeat(4, 1fr);

        .sponsor-wrapper {
          width: calc(100% * 1/4);
        }
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    .section-description-wrapper {
      .sponsors-container {
        .sponsor-wrapper {
          width: calc(100% * 1/2);

          .image-wrapper {
            a {
              img {
                max-width: 65%;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: $mobile) {
    .section-title-wrapper {
      h2 {
        font-size: 35px;
        line-height: 40px;
      }
    }

    .section-description-wrapper {
      .sponsors-container {
        .sponsor-wrapper {

          .image-wrapper {
            a {
              img {
                max-width: 70%;
              }
            }
          }
        }
      }
    }
  }
</style>

