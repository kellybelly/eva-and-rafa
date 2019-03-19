<template>
  <div class="main tips">
    <!-- DEUTSCH -->
    <div class="content content-text" v-if="country === 'de'">
      <h3>Wenn ihr an den Hochzeitstrip noch eine kleine Reise anhängen wollt, hier sind ein paar Tipps:</h3>
      <p>
        <ul>
        <li>Salvador selbst hat genug zu bieten für ein zwei Tage, siehe <a href="https://globetrotter.expedia.de/brasilien/salvador-da-bahia/">hier</a></li>
        <li>Morro de São Paulo ist eine süsse kleine Insel in der Nähe von Salvador, die also sehr beliebt ist bei den Brasilianern</li>
        <li>Rio de Janeiro ist immer einen Besuch wert</li>
        <li>Fernando de Noronha ist ein wunderschönes Naturreservat auf einer Insel, perfekt zu Tauchen und mit Traumstränden</li>
        </ul>
      </p>
      <p>Mehr Tipps folgen bald :)</p>
    </div>

    <!-- ENGLISH -->
    <div class="content content-text" v-else>
      <h3>If you want to add a little travelling to the wedding trip, here are some tips:</h3>
      <p>
      <ul>
        <li>Salvador is one of NYT's top destinations for 2019, see the <a href="https://www.nytimes.com/2019/01/24/travel/what-to-do-in-salvador-brazil.html">article</a>!</li>
        <li>Morro de São Paulo for a stay on a little island close to Salvador that is also very popular with the Brazilians themselves.</li>
        <li>Rio de Janeiro for some interesting days in the city.</li>
        <li>Fernando de Noronha for a stay on a beautiful natural island with amazing diving and splendid beaches.</li>
      </ul>
      </p>
      <p>More to follow soon :)</p>
    </div>

    <div class="bg-imgs">
      <img class="bg-img" src="../assets/backgrounds/bg_1.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tips',
    props: [
      'country'
    ]
  }
</script>

<style lang="scss" scoped>
  @import '../styles/info.scss'
</style>
