<template>
  <div class="main travel">
    <div class="content">
      <div v-if="country === 'de'">
        <h2>Wo findet der Spass statt</h2>
        <a href="https://www.booking.com/hotel/br/b-blue-beachouses.html">BBlue Beachouses</a>, Avenida Principal s/n, Itacimirim, Brazil

        <h2>Wie kommt man dorthin</h2>
        Flug nach Salvador da Bahia (nicht San Salvador, nicht El Salvador!) und dann ein Taxi zum Hotel (dauert etwa 50 min).

        <h3>Wenn ihr aus Deutschland kommt:</h3>
        <ul>
          <li>Flug über Lissabon nach Salvador mit TAP Portugal.</li>
          <li>Es gibt immer einen mehr oder weniger langen Aufenthalt in Lissabon. Daher empfehlen wir, einfach einen ganzen Tag oder sogar eine Nacht Zwischenstopp dort einzulegen und dann weiter zu fliegen.</li>
          <li>Wenn ihr Tipps zu Lissabon braucht, hat Eva eine lange Liste an spannenden Dingen und Orten parat :)</li>
        </ul>

        <h2>Wo wird übernachtet</h2>
        Im Resort ist Platz für etwa 50 Gäste.
        <ul>
          <li>Wir reservieren die Zimmer für unsere Gäste, die den weitesten Weg nach Brasilien haben (Europa, USA) bis Ende Mai. Danach ist die Reservierung auch für die restlichen Gäste offen :)</li>
          <li>Der Preis pro Doppelzimmer/Nacht ist 100 € während der Hochzeit (Fr bis So), davor und danach ~ € 150 (R$ 650).</li>
          <li>Wenn ihr ein Zimmer reservieren wollt, schreibt einfach eine Email an <a href="mail:contato@bbbh.com.br">contato@bbbh.com.br</a> mit eurem Namen und den Namen eurer Gäste und teilt mit von wann bis wann ihr bleiben wollt. Das Resort meldet sich dann bei euch.</li>
        </ul>

        <h3>Andere schöne Orte zum Übernachten in der Nähe des Resorts:</h3>
        <ul>
          <li><a href="https://goo.gl/maps/hZ5eArMQY7K2">Pousada Praia das Ondas</a></li>
          <li>Weitere folgen bald...</li>
        </ul>

        <h2>Wichtiges bevor ihr nach Brasilien kommt</h2>
        <h3>Visa:</h3>
        Mit einem europäischen Pass könnt ihr ohne Visa bis zu 3 Monate in Brasilien bleiben.

        <h3>Zika:</h3>
        Mehr Informationen findet ihr <a href="https://www.auswaertiges-amt.de/blob/200190/322053258788965790e4296e4be48727/zika-virus-data.pdf">hier</a>.

        <h3>Impfungen:</h3>
        Lasst euch auf jeden Fall rechtzeitig gegen Gelbfieber impfen. Tetanus, Diphterie und Hepatitis A sind auch empfehlenswert.

        <p>Mehr Informationen findet ihr <a href="https://www.auswaertiges-amt.de/de/aussenpolitik/laender/brasilien-node/brasiliensicherheit/201092#content_5">hier</a> und <a href="https://tropeninstitut.de/ihr-reiseziel/brasilien">hier</a>.</p>
      </div>

      <div v-else-if="country === 'br'">
        <h2>Onde vai ser a festa</h2>
        <a href="https://www.booking.com/hotel/br/b-blue-beachouses.html">BBlue Beachouses</a>, Avenida Principal s/n, Itacimirim, Brazil

        <h2>Como chegar</h2>
        Vôo para Salvador, e depois um taxi/uber para o hotel (~50 min).

        <h2>Onde ficar</h2>
          No resort tem espaço para 50 convidados. A princípio vamos reservar estes quartos pra quem vem de longe pro Brasil (Europa, EUA).
          <p>No final de maio a gente avisa se tiver ainda espaço. Obrigados pela sua paciencia :)</p>
        <h3>Outros lugares legais para ficar perto do resort:</h3>
        <ul>
          <li><a href="https://goo.gl/maps/hZ5eArMQY7K2">Pousada Praia das Ondas</a></li>
          <li>Mais informações em breve</li>
        </ul>
      </div>

      <div v-else>
        <h2>Where the fun happens</h2>
    <a href="https://www.booking.com/hotel/br/b-blue-beachouses.html">BBlue Beachouses</a>, Avenida Principal s/n, Itacimirim, Brazil

    <h2>How to get there</h2>
    Fly to Salvador da Bahia (not San Salvador, not El Salvador!) and then take a taxi to     the hotel (will take around 50 mins)

    <h3>If you’re coming from Germany:</h3>
    <ul>
      <li>Fly via Lisbon to Salvador with TAP Portugal.</li>
      <li>As there is always quite a layover at Lisbon, we recommend simply prolonging the stay there and enjoying a day or even a night at one of the most beautiful cities in Europe.</li>
      <li>And if you need tips about Lisbon, Eva will be very happy to give you a very long list of things to do and places to go :)</li>
    </ul>

    <h3>If you’re coming from San Francisco:</h3>
    Fly via L.A. or Dallas to São Paulo, then on to Salvador.

    <h3>If you’re coming from other parts of Brazil:</h3>
    You better know what you’re doing ;)

    <h2>Where to stay</h2>
    Around 50 people can stay with us directly at the resort.
    <ul>
      <li>We’ll reserve this space for those who have to travel far to get to Brazil (Europe, U.S.) till the end of May. Afterwards, the remaining spots are open for everyone :)</li>
      <li>During the two nights of the wedding the price is US$ 113 per night/room, the nights before and after ~ US$ 175 (R$ 650).</li>
      <li>If you want to reserve a space, please write an email with the names of you and your guests to <a href="mail:contato@bbbh.com.br">contato@bbbh.com.br</a>, tell them you’re there for our wedding and tell them the dates you want to stay at the resort. They will then get back to you.</li>
    </ul>

    Other lovely places around the resort where you can stay:
    <ul>
      <li><a href="https://goo.gl/maps/hZ5eArMQY7K2">Pousada Praia das Ondas</a></li>
      <li>Other recommendations soon to come</li>
    </ul>

    <h2>What do you need to know before coming</h2>
    <h3>Visa requirements</h3>
    <ul>
      <li><b>EU citizens</b> do not need for a Visa to come to Brazil for up 3 months.</li>
      <li><b>US citizens</b> do need a visa (<a href="http://www.rio.com/visa-information-brazil">details</a>).</li>
    </ul>

    <h3>Zika info:</h3>
    <ul>
      <li>For English look <a href="https://www.cdc.gov/zika/index.html">here</a>.</li>
      <li>For German look <a href="https://www.auswaertiges-amt.de/blob/200190/322053258788965790e4296e4be48727/zika-virus-data.pdf">here</a>.</li>
    </ul>

    <h3>Vaccinations:</h3>
    Everyone should make sure to get a vaccination against yellow fever. Also Tetanus, Diphterie and Hepatitis A should be on the list. More info here:
    <ul>
      <li>For English look <a href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/brazil">here</a>.</li>
      <li>For German look <a href="https://www.auswaertiges-amt.de/de/aussenpolitik/laender/brasilien-node/brasiliensicherheit/201092#content_5">here</a> or <a href="https://tropeninstitut.de/ihr-reiseziel/brasilien">here</a>.</li>
    </ul>
      </div>
    </div>

    <div class="bg-imgs show-bg-1">
      <img class="bg-img bg-1" src="../assets/backgrounds/bg_1.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'travel',
    data: function () {
      return {

      }
    },
    props: [
      'country'
    ],
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
