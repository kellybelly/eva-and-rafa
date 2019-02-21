<template>
  <div class="main home">
    <div class="content">
      <h1>Eva<span>&</span>Rafa</h1>

      <h2 v-if="country === 'br'">
        31 de Agosto<span>|</span>Salvador, Bahia
      </h2>
      <h2 v-else>
        August 31st<span>|</span>Salvador da Bahia, Brasil
      </h2>

      <router-link to="/rsvp" class="rsvp-btn">RSVP</router-link>
    </div>

    <div class="bg-imgs" :class="'show-bg-' + bgCount">
      <img class="bg-img" v-for="(bgImg, index) in bgImgs" :key="bgImg.id" :class="'bg-' + (index+1)" :src="bgImg.src">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        timer: null,
        bgCount: null,
        bgImgs: [
          { src: require('../assets/backgrounds/bg_2.jpg') },
          { src: require('../assets/backgrounds/bg_3.jpg') },
          { src: require('../assets/backgrounds/bg_4.jpg') },
          { src: require('../assets/backgrounds/bg_5.jpg') },
          { src: require('../assets/backgrounds/bg_6.jpg') },
          { src: require('../assets/backgrounds/bg_7.jpg') },
          { src: require('../assets/backgrounds/bg_8.jpg') },
          { src: require('../assets/backgrounds/bg_9.jpg') },
          { src: require('../assets/backgrounds/bg_10.jpg') },
          { src: require('../assets/backgrounds/bg_11.jpg') },
          { src: require('../assets/backgrounds/bg_12.jpg') },
          { src: require('../assets/backgrounds/bg_13.jpg') },
          { src: require('../assets/backgrounds/bg_14.jpg') },
          { src: require('../assets/backgrounds/bg_15.jpg') },
          { src: require('../assets/backgrounds/bg_16.jpg') },
          { src: require('../assets/backgrounds/bg_17.jpg') },
          { src: require('../assets/backgrounds/bg_18.jpg') },
          { src: require('../assets/backgrounds/bg_19.jpg') },
          { src: require('../assets/backgrounds/bg_20.jpg') },
          { src: require('../assets/backgrounds/bg_21.jpg') },
          { src: require('../assets/backgrounds/bg_22.jpg') },
          { src: require('../assets/backgrounds/bg_23.jpg') },
          { src: require('../assets/backgrounds/bg_24.jpg') },
          { src: require('../assets/backgrounds/bg_25.jpg') },
          { src: require('../assets/backgrounds/bg_26.jpg') },
          { src: require('../assets/backgrounds/bg_27.jpg') },
          { src: require('../assets/backgrounds/bg_28.jpg') },
          { src: require('../assets/backgrounds/bg_29.jpg') },
          { src: require('../assets/backgrounds/bg_30.jpg') },
          { src: require('../assets/backgrounds/bg_31.jpg') },
          { src: require('../assets/backgrounds/bg_32.jpg') },
          { src: require('../assets/backgrounds/bg_33.jpg') },
          { src: require('../assets/backgrounds/bg_34.jpg') },
          { src: require('../assets/backgrounds/bg_35.jpg') },
          { src: require('../assets/backgrounds/bg_36.jpg') },
          { src: require('../assets/backgrounds/bg_37.jpg') },
          { src: require('../assets/backgrounds/bg_38.jpg') },
          { src: require('../assets/backgrounds/bg_39.jpg') },
          { src: require('../assets/backgrounds/bg_40.jpg') },
          { src: require('../assets/backgrounds/bg_41.jpg') },
          { src: require('../assets/backgrounds/bg_42.jpg') },
          { src: require('../assets/backgrounds/bg_43.jpg') },
          { src: require('../assets/backgrounds/bg_44.jpg') }
        ]
      }
    },
    props: [
      'country'
    ],
    methods: {
      getNewBgCount: function () {
        this.bgCount = Math.floor(Math.random() * 43) + 1 // number of background images is hard coded!!
      }
    },
    created: function () {
      this.getNewBgCount()
      this.timer = setInterval(this.getNewBgCount, 5000)
    },
    beforeDestroy: function () {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/home.scss'
</style>
