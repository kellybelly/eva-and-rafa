<template>
  <div class="main home">
    <div class="content">
      <h1>Eva<span>&</span>Rafa</h1>
      <h2>August 31st<span>|</span>Salvador da Bahia, Brasil</h2>
      <router-link to="/rsvp" class="rsvp-btn">RSVP</router-link>
    </div>
    <transition name="fade">
      <div class="bg-img" v-bind:class="'bg-' + bgCount"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        bgCount: 0,
        timer: ''
      }
    },
    methods: {
      getNewBackgroundImage: function () {
        this.bgCount = Math.floor(Math.random() * 42) // number of background images is hard coded!!
      }
    },
    created: function () {
      this.getNewBackgroundImage()
      this.timer = setInterval(this.getNewBackgroundImage, 5000)
    },
    beforeDestroy: function () {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/home.scss'
</style>
