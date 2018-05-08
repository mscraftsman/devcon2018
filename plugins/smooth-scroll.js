import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease',
  offset: -65,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
