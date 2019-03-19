<template>
  <div class="footer">
    <button class="btn-flag" :class="{ selected: updatedCountry === 'de' }" @click="updateCountry('de')">
      <img src="../assets/flags/flag_de.png">
    </button>
    <button class="btn-flag" :class="{ selected: updatedCountry === 'br' }" @click="updateCountry('br')">
      <img src="../assets/flags/flag_br.png">
    </button>
    <button class="btn-flag" :class="{ selected: updatedCountry === 'us' }" @click="updateCountry('us')">
      <img src="../assets/flags/flag_us.png">
    </button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        updatedCountry: this.country
      }
    },
    props: [
      'country'
    ],
    methods: {
      updateCountry: function (newCountry) {
        this.updatedCountry = newCountry
        localStorage.country = newCountry
        this.$emit('update-country', newCountry)
      }
    },
    mounted: function () {
      console.log(this.$route)
      if (this.$route.query.co) {
        this.updateCountry(this.$route.query.co)
      } else if (localStorage.country) {
        this.updateCountry(localStorage.country)
      }
    }
  }
</script>
