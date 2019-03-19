<template>
  <div class="main details">
    <!-- DEUTSCH -->
    <div class="content content-text" v-if="country === 'de'">
      <h2>Freitag, 30. August</h2>
      <ul>
        <li>Die Gäste kommen an und richten sich in ihren Hotels ein.</li>
        <li>18:00: “Luau” am Strand @ BBlue Beachouses: Brasilianische Musik, Essen und Tanzkurse, damit auch alle Forró (der brasilianische Salsa ;) ) tanzen können</li>
      </ul>

      <h2>Samstag, 31. August</h2>
      <ul>
        <li>Frühstück/Brunch @ BBlue Beachouses</li>
        <li>Offizieller Start der Feier mit Drinks um 16:00</li>
        <li>Die Hochzeitszeremonie startet um ca. 17:00</li>
        <li>Danach gibt es Abendessen und Party!!</li>
      </ul>

      <h2>Sonntag, 1. März</h2>
      <ul>
        <li>Brunch @ BBlue Beachouses</li>
        <li>Ausflug nach Salvador am Nachmittag mit geführter Tour durch die Altstadt</li>
        <li>Danach Abendessen in Salvador mit allen die noch da sind</li>
      </ul>

      <p>Wie freuen uns auf ein superschönes Wochenende mit euch allen!!</p>

      <br />
      <h3>Dress code</h3>
      <p>Sommerlich schick (das Wetter wird sonnig mit durchschnittlich um die 25 Grad Celsius)</p>

      <h3>Hochzeitsgeschenke</h3>
      <p>Euer Geschenk an uns ist, dass ihr nach Brasilien kommt und mit uns feiert. Das ist absolut genug für uns 😊</p>
    </div>

    <!-- PORTUGUÊS -->
    <div class="content content-text" v-else-if="country === 'br'">
      <p>E aí, qual a programação?</p>

      <h2>Sexta, 30 de Agosto</h2>
      <ul>
      <li>Convidados chegam e fazem o check-in nos seus hotéis</li>
      <li>18:00: Luau na praia no BBlue Beachouses: voz e violão, festa e uma aula de forró</li>
      </ul>

      <h2>Sábado, 31 de Agosto</h2>
      <ul>
        <li>Brunch no BBlue Beachouses</li>
        <li>Recepção começa por volta das 16hs</li>
        <li>Cerimônia começa por volta das 17hs</li>
        <li>Depois, festa até cansar!!</li>
      </ul>

      <h2>Domingo, 1º de Setembro</h2>
      <ul>
      <li>Brunch no BBlue Beachouses</li>
      <li>Tour de Salvador à tarde, seguido de um jantar com todos que quiserem ficar</li>
      </ul>

      <p>Vamos aproveitar um fim-de-semana massa na Bahia!!</p>

      <br />
      <h3>O que vestir?</h3>
      <p>"Summer chic" (afinal, vai ser na praia na Bahia)</p>

      <h3>Presentes de Casamento:</h3>
      <p>Já é um presente que você está vindo, então não precisa se preocupar com presentes 😊</p>
    </div>

    <!-- ENGLISH -->
    <div class="content content-text" v-else>
      <h2>Friday, August 30th</h2>
      <ul>
        <li>Guests arrive during the day and settle down in their hotels</li>
        <li>6pm: Luau at the beach @ BBlue Beachouses — enjoy Brazilian music, food and learn how to dance Forró (the Brazilian salsa 😉 )</li>
      </ul>

      <h2>Saturday, August 31st</h2>
      <ul>
        <li>Breakfast/brunch @ BBlue Beachouses (times tbd)</li>
        <li>Official reception with drink at ~ 4pm</li>
        <li>Wedding ceremony starts ~ 5pm</li>
        <li>Afterwards dinner and party!!</li>
      </ul>

      <h2>Sunday, September 1st</h2>
      <ul>
        <li>Brunch @ BBlue Beachouses</li>
        <li>Afternoon trip to Salvador with guided tour of the old town</li>
        <li>Afterwards dinner together in Salvador for everyone who is still there</li>
      </ul>

      <p>Let’s have an amazing weekend together!!</p>

      <br />
      <h3>Dress Code</h3>
      <p>Summer chic (expect sunny weather and temperatures in the mid-20s)</p>

      <h3>Wedding gifts</h3>
      <p>The gift to us is that you’ll be there to celebrate with us, so we really don’t need any gifts 😊</p>
    </div>

    <div class="bg-imgs">
      <img class="bg-img" src="../assets/backgrounds/bg_1.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    props: [
      'country'
    ]
  }
</script>

<style lang="scss" scoped>
  @import '../styles/info.scss'
</style>
