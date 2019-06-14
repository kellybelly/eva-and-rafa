<template>
  <div class="main travel">
    <!-- DEUTSCH -->
    <div class="content content-text" v-if="country === 'de'">
      <h2>Wo findet der Spass statt</h2>
      <a href="https://www.booking.com/hotel/br/b-blue-beachouses.html">BBlue Beachouses</a>, Avenida Principal s/n, Itacimirim, Brazil

      <h2>Wie kommt man dorthin</h2>
      Flug nach Salvador da Bahia (nicht San Salvador, nicht El Salvador!) und dann ein Taxi zum Hotel (dauert etwa 50 min).

      <br /><br />
      <h4>Wenn ihr aus Deutschland kommt:</h4>
      <ul>
        <li>Flug über Lissabon nach Salvador mit TAP Portugal.</li>
        <li>Es gibt immer einen mehr oder weniger langen Aufenthalt in Lissabon. Daher empfehlen wir, einfach einen ganzen Tag oder sogar eine Nacht Zwischenstopp dort einzulegen und dann weiter zu fliegen.</li>
        <li>Wenn ihr Tipps zu Lissabon braucht, hat Eva eine lange Liste an spannenden Dingen und Orten parat :)</li>
      </ul>

      <h2>Wo wird übernachtet</h2>
      Im Resort ist Platz für etwa 50 Gäste, die Zimmer sind inzwischen alle vergeben.

      <h4>Andere schöne Orte zum Übernachten in der Nähe des Resorts:</h4>
      <ul>
        <li><a href="https://goo.gl/maps/hZ5eArMQY7K2">Pousada Praia das Ondas</a></li>
	<li><a href="https://goo.gl/maps/KLRu4c3Ap4HVEGXw7">Pousada Jambo</a></li>
      </ul>

      <h2>Wichtiges bevor ihr nach Brasilien kommt</h2>
      <h4>Visa:</h4>
      Mit einem europäischen Pass könnt ihr ohne Visa bis zu 3 Monate in Brasilien bleiben.

      <h4>Zika:</h4>
      Mehr Informationen findet ihr <a href="https://www.auswaertiges-amt.de/blob/200190/322053258788965790e4296e4be48727/zika-virus-data.pdf">hier</a>.

      <h4>Impfungen:</h4>
      Lasst euch auf jeden Fall rechtzeitig gegen Gelbfieber impfen. Tetanus, Diphterie und Hepatitis A sind auch empfehlenswert.

      <p>Mehr Informationen findet ihr <a href="https://www.auswaertiges-amt.de/de/aussenpolitik/laender/brasilien-node/brasiliensicherheit/201092#content_5">hier</a> und <a href="https://tropeninstitut.de/ihr-reiseziel/brasilien">hier</a>.</p>
    </div>

    <!-- PORTUGUÊS -->
    <div class="content content-text" v-else-if="country === 'br'">
      <h2>Onde vai ser a festa</h2>
      <a href="https://www.booking.com/hotel/br/b-blue-beachouses.html">BBlue Beachouses</a>, Avenida Principal s/n, Itacimirim, Brazil

      <h2>Como chegar</h2>
      Vôo para Salvador, e depois um taxi/uber para o hotel (~50 min).

      <h2>Onde ficar</h2>
        No resort tem espaço para 50 convidados, mas a gente deu prioridade pra quem vem de longe pro Brasil (Europa, EUA) e agora está lotado.
      <h4>Tem várias pousadas legais perto do hotel, por exemplo:</h4>
      <ul>
        <li><a href="https://goo.gl/maps/hZ5eArMQY7K2">Pousada Praia das Ondas</a></li>
	<li><a href="https://goo.gl/maps/KLRu4c3Ap4HVEGXw7">Pousada Jambo</a></li>
      </ul>
    </div>

    <!-- ENGLISH -->
    <div class="content content-text" v-else>
      <h2>Where the fun happens</h2>
      <a href="https://www.booking.com/hotel/br/b-blue-beachouses.html">BBlue Beachouses</a>, Avenida Principal s/n, Itacimirim, Brazil

      <h2>How to get there</h2>
      Fly to Salvador da Bahia (not San Salvador, not El Salvador!) and then take a taxi to     the hotel (will take around 50 mins)

      <br /><br />
      <h4>If you’re coming from Germany:</h4>
      <ul>
        <li>Fly via Lisbon to Salvador with TAP Portugal.</li>
        <li>As there is always quite a layover at Lisbon, we recommend simply prolonging the stay there and enjoying a day or even a night at one of the most beautiful cities in Europe.</li>
        <li>And if you need tips about Lisbon, Eva will be very happy to give you a very long list of things to do and places to go :)</li>
      </ul>

      <h4>If you’re coming from San Francisco:</h4>
      Fly via L.A. or Dallas to São Paulo, then on to Salvador.

      <br /><br /><br />
      <h4>If you’re coming from other parts of Brazil:</h4>
      You better know what you’re doing ;)

      <br />
      <h2>Where to stay</h2>
      Around 50 people can stay with us directly at the resort but all the rooms are taken now.
      There are quite a few other lovely places around the resort where you can stay, for example:
      <ul>
        <li><a href="https://goo.gl/maps/hZ5eArMQY7K2">Pousada Praia das Ondas</a></li>
	<li><a href="https://goo.gl/maps/KLRu4c3Ap4HVEGXw7">Pousada Jambo</a></li>
      </ul>

      <h2>What do you need to know before coming</h2>
      <h4>Visa requirements:</h4>
      <ul>
        <li><b>EU citizens</b> do not need for a Visa to come to Brazil for up 3 months.</li>
        <li><b>US citizens</b> don't need a visa anymore!!</li>
      </ul>

      <h4>Zika info:</h4>
      <ul>
        <li>For English look <a href="https://www.cdc.gov/zika/index.html">here</a>.</li>
        <li>For German look <a href="https://www.auswaertiges-amt.de/blob/200190/322053258788965790e4296e4be48727/zika-virus-data.pdf">here</a>.</li>
      </ul>

      <h4>Vaccinations:</h4>
      Everyone should make sure to get a vaccination against yellow fever. Also Tetanus, Diphterie and Hepatitis A should be on the list. More info here:
      <ul>
        <li>For English look <a href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/brazil">here</a>.</li>
        <li>For German look <a href="https://www.auswaertiges-amt.de/de/aussenpolitik/laender/brasilien-node/brasiliensicherheit/201092#content_5">here</a> or <a href="https://tropeninstitut.de/ihr-reiseziel/brasilien">here</a>.</li>
      </ul>
    </div>

    <div class="bg-imgs">
      <img class="bg-img" src="../assets/backgrounds/bg_1.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'travel',
    props: [
      'country'
    ]
  }
</script>

<style lang="scss" scoped>
  @import '../styles/info.scss'
</style>
