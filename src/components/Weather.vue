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
            <button @click="getIp(item.title), getCanvas(item.title)">
              <p class="name">{{ item.title }}</p>
            </button>
          </li>
        </ol>
      </div>
      <div>
        <div class="alert alert-info" v-show="loading">
          Loading・・・
        </div>
        <div v-show="chart != null">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

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

      chart: null,
      city: 'ここに地名が表示されます',
      dates: [],
      temps: [],
      temp: 'ここに気温が表示されます',
      condition: { 'main': 'ここに天気が表示されます' },
      loading: false,
      errord: false
    }
  },

  methods: {
    getIp (name) {
      this.ip = '天気情報を取得しています'
      this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name},jp&units=metric&appid=57cb0a695c789061bf61a35dca406dd4`)
        .then(response => {
          this.city = response.data.name
          this.temp = this.roundup(response.data.main.temp) + '℃'
          this.condition = response.data.weather[0]
        })
        .catch(reason => {
          this.ip = '天気情報の取得に失敗しました'
        })
    },

    getCanvas (name) {
      this.loading = true

      if (this.chart != null) {
        this.chart.destroy()
      }

      this.$axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          q: name,
          units: 'metric',
          appid: '57cb0a695c789061bf61a35dca406dd4'
        }
      })
        .then(response => {
          this.dates = response.data.list.map(list => {
            return list.dt_txt
          })
          this.temps = response.data.list.map(list => {
            return list.main.temp
          })

          var ctx = document.getElementById('myChart')
          this.chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: 'Avg. Temp',
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  borderColor: 'rgb(54, 162, 235)',
                  fill: false,
                  data: this.temps
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Temperature with Chart.js'
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    var label = data.datasets[tooltipItem.dataseIndex].label || ''
                    if (label) {
                      label += ': '
                    }

                    label += Math.floor(tooltipItem.yLabel)
                    return label + '℃'
                  }
                }
              },
              scales: {
                xAxes: [
                  {
                    type: 'time',
                    time: {
                      unit: 'hour',
                      displayFormats: {
                        hour: 'M/DD @ hA'
                      },
                      tooltipFormat: 'MMM. DD @ hA'
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Data/Time'
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Tempereture (℃)'
                    },
                    ticks: {
                      callback: function (value, index, values) {
                        return value + '℃'
                      }
                    }
                  }
                ]
              }
            }
          })
        })
        .catch(error => {
          console.log(error)
          this.errord = true
        })
        .finally(() => (this.loading = false))
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
