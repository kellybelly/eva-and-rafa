<template>
  <div class="main">
  <div class="content" v-if="country === 'de'">
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
  <div class="content" v-else-if="country === 'br'">
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
  <div class="content" v-else="country === 'us'">
    <p>So what’s gonna happen these three days:</p>

    <h3>Friday, August 30th:</h3>
    <ul>
    <li>Guests arrive during the day and settle down in their hotels</li>
    <li>6pm: “Luau” at the beach @ BBlue Beachouses: enjoy Brazilian music, food and learn how to dance Forró (the Brazilian salsa ;) )</li>
    </ul>

    <h3>Saturday, August 31st:</h3>
    <ul>
    <li>Breakfast/brunch @ BBlue Beachouses (times tbd)</li>
    <li>Official reception with drink at ~ 4pm</li>
    <li>Wedding ceremony starts ~ 5pm</li>
    <li>Afterwards dinner and  party!!</li>
    </ul>

    <h3>Sunday, September 1st:</h3>
    <ul>
    <li>Brunch @ BBlue Beachouses</li>
    <li>Afternoon trip to Salvador with guided tour of the old town</li>
    <li>Afterwards dinner together in Salvador for everyone who is still there</li>
    </ul>

    <p>Let’s have an amazing weekend together!!</p>

    <br />
    <h3>Dress code:</h3>
    <ul><li>Summer chic (expect sunny weather and temperatures in the mid-20s)</li></ul>

    <span style="font-size: large; font-weight: bold">Wedding gifts:</span>
    <ul><li>The gift to us is that you’ll be there to celebrate with us, so we really don’t need any gifts :)</li></ul>
  </div>
  <div class="bg-imgs" :class="'show-bg-' + bgCount">
    <img class="bg-img" v-for="(bgImg, index) in bgImgs" :class="'bg-' + (index+1)" :src="bgImg.src">
  </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        timer: null,
        bgCount: null,
        bgImgs: [
          { src: require('../assets/backgrounds/bg_1.jpg') },
          { src: require('../assets/backgrounds/bg_2.jpg') },
          { src: require('../assets/backgrounds/bg_3.jpg') },
          { src: require('../assets/backgrounds/bg_4.jpg') },
          { src: require('../assets/backgrounds/bg_5.jpg') },
          { src: require('../assets/backgrounds/bg_6.jpg') },
          { src: require('../assets/backgrounds/bg_7.jpg') },
          { src: require('../assets/backgrounds/bg_8.jpg') },
          { src: require('../assets/backgrounds/bg_9.jpg') },
          { src: require('../assets/backgrounds/bg_10.jpg') },
          { src: require('../assets/backgrounds/bg_11.jpg') },
          { src: require('../assets/backgrounds/bg_12.jpg') },
          { src: require('../assets/backgrounds/bg_13.jpg') },
          { src: require('../assets/backgrounds/bg_14.jpg') },
          { src: require('../assets/backgrounds/bg_15.jpg') },
          { src: require('../assets/backgrounds/bg_16.jpg') },
          { src: require('../assets/backgrounds/bg_17.jpg') },
          { src: require('../assets/backgrounds/bg_18.jpg') },
          { src: require('../assets/backgrounds/bg_19.jpg') },
          { src: require('../assets/backgrounds/bg_20.jpg') },
          { src: require('../assets/backgrounds/bg_21.jpg') },
          { src: require('../assets/backgrounds/bg_22.jpg') },
          { src: require('../assets/backgrounds/bg_23.jpg') },
          { src: require('../assets/backgrounds/bg_24.jpg') },
          { src: require('../assets/backgrounds/bg_25.jpg') },
          { src: require('../assets/backgrounds/bg_26.jpg') },
          { src: require('../assets/backgrounds/bg_27.jpg') },
          { src: require('../assets/backgrounds/bg_28.jpg') },
          { src: require('../assets/backgrounds/bg_29.jpg') },
          { src: require('../assets/backgrounds/bg_30.jpg') },
          { src: require('../assets/backgrounds/bg_31.jpg') },
          { src: require('../assets/backgrounds/bg_32.jpg') },
          { src: require('../assets/backgrounds/bg_33.jpg') },
          { src: require('../assets/backgrounds/bg_34.jpg') },
          { src: require('../assets/backgrounds/bg_35.jpg') },
          { src: require('../assets/backgrounds/bg_36.jpg') },
          { src: require('../assets/backgrounds/bg_37.jpg') },
          { src: require('../assets/backgrounds/bg_38.jpg') },
          { src: require('../assets/backgrounds/bg_39.jpg') },
          { src: require('../assets/backgrounds/bg_40.jpg') },
          { src: require('../assets/backgrounds/bg_41.jpg') },
          { src: require('../assets/backgrounds/bg_42.jpg') },
          { src: require('../assets/backgrounds/bg_43.jpg') },
          { src: require('../assets/backgrounds/bg_44.jpg') },
        ],
      }
    },
    props: ['country'],
    methods: {
      getNewBgCount: function () {
        this.bgCount = Math.floor(Math.random() * 44) + 1 // number of background images is hard coded!!
      },
    },
    created: function () {
      this.getNewBgCount()
      this.timer = setInterval(this.getNewBgCount, 5000)
    },
    beforeDestroy: function () {
      clearInterval(this.timer)
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/home.scss'
</style>
