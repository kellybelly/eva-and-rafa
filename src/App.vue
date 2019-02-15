<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/details">Party Details</router-link>
      <router-link to="/travel">Travel Info</router-link>
      <router-link to="/tips">Tips About Brasil</router-link>
      <router-link to="/rsvp">RSVP</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './styles/base.scss'
</style>
