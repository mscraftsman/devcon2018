<template>
<div>
  <div class="full-section-container dark">
    <div class="description-container">
      <div class="image-wrapper">
      </div>
      <div class="content-wrapper">
        <div class="section-title-wrapper white-title">
          <small>What's up for 2018?</small>
          <h2>Some amazing title goes here!</h2>
        </div>
        <div class="section-description-wrapper">
          <p>After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the third edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event.</p>
          <p>After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the third edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event.</p>
          <p>After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the third edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>

</script>
<style lang="scss" scoped>
  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobile: 540px;

  .full-section-container {
    display: grid;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];

    &.dark {
      background: #000000;
    }
  }

  * {
    box-sizing: border-box;
  }

  .description-container {
    grid-column: full;
    display: grid;
    grid-template-columns: 0.6fr 1fr 0.1fr;
    grid-template-rows: 1fr;

    .content-wrapper {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);
      z-index: 1;
    }

    .image-wrapper {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      background: linear-gradient(135deg, transparent, rgba(0, 0, 0, 1)), url(~/static/images/home-bg-2.jpg);
      background-size: cover, cover;
      height: 100%;
      width: 100%;
      clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
    }
  }

  .section-title-wrapper {
    margin-bottom: calc(var(--gutter));
    grid-column: container;

    &.white-title {
      h2 {
        color: var(--color-white);
      }
    }

    small {
      margin: 0 0 10px 0;
      text-transform: uppercase;
      color: var(--color-green);
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

    &.page-heading-wrapper {
      small {
        margin-bottom: 7px;
        display: block;
      }
      h2 {
        font-size: 80px;
        line-height: 80px;
      }
    }
  }

  .section-description-wrapper {

    p {
      font-family: var(--font-glacial);
      color: var(--color-white);
      font-weight: 300;
      font-size: 19px;
      line-height: 28px;
      margin-bottom: var(--gutter);
      color: rgba(255, 255, 255, 1);
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.99);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

</style>
