<template>
  <div class="main rsvp">
    <div class="content">
      <!-- DEUTSCH -->
      <div class="typeform-widget" data-url="https://rafaelcastro3.typeform.com/to/cGSa5f" data-transparency="50" v-if="country === 'de'"></div>

      <!-- PORTUGUÊS -->
      <div class="typeform-widget" data-url="https://rafaelcastro3.typeform.com/to/Fcad6a" data-transparency="50" v-else-if="country === 'br'"></div>

      <!-- ENGLISH -->
      <div class="typeform-widget" data-url="https://rafaelcastro3.typeform.com/to/R3tkct" data-transparency="50" v-else></div>
    </div>

    <div class="bg-imgs">
      <img class="bg-img" src="../assets/backgrounds/bg_1.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rsvp',
    props: [
      'country'
    ],
    mounted: function t() {
      var q,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/";
      var js = gi.call(d,id);
      if (js) {
        // TypeForm JS has already been loaded -- we need to re-trigger building the widget in the right DIV.
        var el = d.getElementsByClassName("typeform-widget")[0];
        var url = el.getAttribute("data-url");
        var options = {opacity: parseInt(el.getAttribute("data-transparency"))};
        window.typeformEmbed.makeWidget(el, url, options);
      } else {
        // Load the TypeForm JS. 
        js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/rsvp.scss'
</style>
