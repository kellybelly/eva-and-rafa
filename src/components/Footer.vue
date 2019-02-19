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
        updatedCountry: this.country,
      }
    },
    props: ['country'],
    methods: {
      updateCountry: function (newCountry) {
        this.updatedCountry = newCountry
        this.$emit('update-country', newCountry)
      }
    },
  }
</script>
