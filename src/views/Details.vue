<template>
  <div class="main details">
    <div class="content">
      <div v-if="country === 'de'">
        <p>Was passiert so die drei Tage:</p>

        <h3>Freitag, 30. August:</h3>
        <ul>
          <li>Die Gäste kommen an und richten sich in ihren Hotels ein.</li>
          <li>18:00: “Luau” am Strand @ BBlue Beachouses: Brasilianische Musik, Essen und Tanzkurse, damit auch alle Forró (der brasilianische Salsa ;) ) tanzen können</li>
        </ul>

        <h3>Samstag, 31. August:</h3>
        <ul>
          <li>Frühstück/Brunch @ BBlue Beachouses</li>
          <li>Offizieller Start der Feier mit Drinks um 16:00</li>
          <li>Die Hochzeitszeremonie startet um ca. 17:00</li>
          <li>Danach gibt es Abendessen und Party!!</li>
        </ul>

        <h3>Sonntag, 1. März:</h3>
        <ul>
          <li>Brunch @ BBlue Beachouses</li>
          <li>Ausflug nach Salvador am Nachmittag mit geführter Tour durch die Altstadt</li>
          <li>Danach Abendessen in Salvador mit allen die noch da sind</li>
        </ul>

        <p>Wie freuen uns auf ein superschönes Wochenende mit euch allen!!</p>

        <br />
        <h3>Dress code:</h3>
        Sommerlich schick (das Wetter wird sonnig mit durchschnittlich um die 25 Grad Celsius)

        <h3>Hochzeitsgeschenke:</h3>
        Euer Geschenk an uns ist, dass ihr nach Brasilien kommt und mit uns feiert. Das ist absolut genug für uns :)
      </div>

      <div v-else-if="country === 'br'">
        <p>E aí, qual a programação?</p>

        <h3>Sexta, 30 de Agosto:</h3>
        <ul>
        <li>Convidados chegam e fazem o check-in nos seus hotéis</li>
        <li>18:00: Luau na praia no BBlue Beachouses: voz e violão, festa e uma aula de forró</li>
        </ul>

        <h3>Sábado, 31 de Agosto:</h3>
        <ul>
          <li>Brunch no BBlue Beachouses</li>
          <li>Recepção começa por volta das 16hs</li>
          <li>Cerimônia começa por volta das 17hs</li>
          <li>Depois, festa até cansar!!</li>
        </ul>

        <h3>Domingo, 1º de Setembro:</h3>
        <ul>
        <li>Brunch no BBlue Beachouses</li>
        <li>Tour de Salvador à tarde, seguido de um jantar com todos que quiserem ficar</li>
        </ul>

        <p>Vamos aproveitar um fim-de-semana massa na Bahia!!</p>

        <br />
        <h3>O que vestir?</h3>
        <ul><li>"Summer chic" (afinal, vai ser na praia na Bahia)</li></ul>

        <h3>Presentes de Casamento:</h3>
        <ul><li>Já é um presente que você está vindo, então não precisa se preocupar com presentes :)</li></ul>
      </div>

      <div v-else="country === 'us'">
        <h3>So what’s gonna happen these three days?</h3>

        <h2>Friday, August 30th</h2>
        <ul>
          <li>Guests arrive during the day and settle down in their hotels</li>
          <li>6pm: “Luau” at the beach @ BBlue Beachouses: enjoy Brazilian music, food and learn how to dance Forró (the Brazilian salsa ;) )</li>
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

        <h3>Let’s have an amazing weekend together!!</h3>

        <h2>Dress code</h2>
        <p>Summer chic (expect sunny weather and temperatures in the mid-20s)</p>

        <h2>Wedding gifts</h2>
        <p>The gift to us is that you’ll be there to celebrate with us, so we really don’t need any gifts :)</p>
      </div>
    </div>

    <div class="bg-imgs show-bg-1">
      <img class="bg-img bg-1" src="../assets/backgrounds/bg_1.jpg">
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

</style>
