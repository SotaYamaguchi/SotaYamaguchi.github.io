<template>
  <div>
    <h1>{{item.name}}の天気情報</h1>
    <ul>
      <li>天気:{{item.weather[0].main}}</li>
      <li>温度:{{item.main.temp}}℃</li>
      <li>湿度:{{item.main.humidity}}%</li>
      <li>風速:{{item.wind.speed}}m</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({route, app}){
    const item = await app.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${route.params.name},jp&units=metric&appid=57cb0a695c789061bf61a35dca406dd4`)
    return {
      item
    }
  }
}
</script>