<template>
  <div id="app">
    <app-header :country="country"></app-header>
    <router-view :country="country" />
    <app-footer :country="country" @update-country="updateCountry"></app-footer>
  </div>
</template>

<script>
  import appHeader from './components/Header.vue'
  import appFooter from './components/Footer.vue'

  export default {
    data: function () {
      return {
        country: 'us'
      }
    },
    components: {
      'app-header': appHeader,
      'app-footer': appFooter
    },
    methods: {
      updateCountry: function (country) {
        this.country = country
      }
    },
    beforeMount: function () {
      if(localStorage.country) {
        this.country = localStorage.country
      }
    }
  }
</script>

<style lang="scss">
  @import './styles/base.scss'
</style>
