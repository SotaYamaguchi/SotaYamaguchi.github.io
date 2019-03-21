<template>
  <div id="weather">
    <div>
      <div class="info">
        <h1>日本全国の天気</h1>
        <p v-text="city">ここに地名が表示されます</p>
        <p v-text="temp">ここに気温が表示されます</p>
        <p v-text="condition.main">ここに天気が表示されます</p>
      </div>
      <div>
        <ol>
          <li v-for="(item, index) in items" :key=index>
            <button @click="getIp(item.title)">
              <p class="name">{{ item.title }}</p>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
      items: [
        { title: 'Sapporo' },
        { title: 'Tokyo' },
        { title: 'Ibaraki' },
        { title: 'Nagoya' },
        { title: 'Osaka' },
        { title: 'Fukuoka' }
      ],

      city: 'ここに地名が表示されます',
      temp: 'ここに気温が表示されます',
      condition: { 'main': 'ここに天気が表示されます' }
    }
  },

  methods: {
    getIp (name) {
      this.ip = '天気情報を取得しています'
      this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name},jp&units=metric&appid=57cb0a695c789061bf61a35dca406dd4`)
        .then((response) => {
          this.city = response.data.name
          this.temp = this.roundup(response.data.main.temp) + '℃'
          this.condition = response.data.weather[0]
        })
        .catch((reason) => {
          this.ip = '天気情報の取得に失敗しました'
        })
    },

    roundup (value) {
      return Math.ceil(value)
    }
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  width: 100%;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

button {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: #35495e;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

.name {
  width: 100%;
  height: 100%;
  margin-top: 0em;
  margin-bottom: 0em;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

.info {
  display: block;
  height: 200px;
}

</style>
