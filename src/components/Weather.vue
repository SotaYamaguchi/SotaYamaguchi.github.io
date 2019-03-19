<template>
  <div id="weather">
    <div>
      <h1>日本全国の天気</h1>
      <p v-text="city">ここに地名が表示されます</p>
      <p v-text="temp">ここに気温が表示されます</p>
      <p v-text="conditon.main">ここに天気が表示されます</p>
      <input @click="getIp" type="button" value="天気を取得">
      <div>
        <ol>
          <li v-for="(item, index) in items" :key=index>
            <button>
              <router-link v-bind:to=item.path>
                  {{ item.title }}
              </router-link>
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
        { title: '札幌', path: '/' },
        { title: '東京', path: '/profile' },
        { title: '茨城', path: '/weather' },
        { title: '名古屋', path: '/outputs' },
        { title: '大阪', path: '/outputs' },
        { title: '福岡', path: '/outputs' }
      ],

      city: 'ここに地名が表示されます',
      temp: 'ここに気温が表示されます',
      conditon: 'ここに天気が表示されます'
    }
  },

  methods: {
    getIp () {
      this.ip = '天気情報を取得しています'
      this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&appid=57cb0a695c789061bf61a35dca406dd4`)
        .then((response) => {
          this.city = response.data.name
          this.temp = response.data.main.temp
          this.conditon = response.data.weather[0]
        })
        .catch((reason) => {
          this.ip = '天気情報の取得に失敗しました'
        })
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

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>
