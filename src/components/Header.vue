<template>
  <div class="header" v-if="country === 'de'">
    <router-link to="/">Home</router-link>
    <router-link to="/details">Party Info</router-link>
    <router-link to="/travel">Reise Info</router-link>
    <router-link to="/tips">Tipps Zu Brasilien</router-link>
    <router-link to="/rsvp">RSVP</router-link>
  </div>
  <div class="header" v-else-if="country === 'br'">
    <router-link to="/">Início</router-link>
    <router-link to="/details">Detalhes da Festa</router-link>
    <router-link to="/travel">Informações pra Viagem</router-link>
    <router-link to="/rsvp">RSVP</router-link>
  </div>
  <div class="header" v-else>
    <router-link to="/">Home</router-link>
    <router-link to="/details">Party Details</router-link>
    <router-link to="/travel">Travel Info</router-link>
    <router-link to="/tips">Tips About Brasil</router-link>
    <router-link to="/rsvp">RSVP</router-link>
  </div>
</template>

<script>
  export default {
    props: [
      'country'
    ]
  }
</script>
