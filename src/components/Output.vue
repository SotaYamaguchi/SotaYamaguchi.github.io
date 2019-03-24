<template>
    <div class="output">
        <div v-for="(item, index) in items" :key=index>
            <div class="content">
                <h3> {{ item.title }} </h3>
                <p>  {{ item.text }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'output',
  data () {
    return {
      items: [
        { title: 'お天気アプリを作成した', text: 'このような意図で作成しました。' },
        { title: 'VueCliを使用した', text: 'ここをこのように工夫しました。ここが難しかったです。今後はこうゆう機能を追加したいです' },
        { title: 'Chart.jsを使用した', text: 'ここが難しかったです。' },
        { title: 'OpenweatherMapのapi(weather)を使用した', text: '今後はこうゆう機能を追加したいです' },
        { title: 'OpenweatherMapのapi(forecast)を使用した', text: 'このような意図で作成しました。ここをこのように工夫しました。ここが難しかったです。今後はこうゆう機能を追加したいです' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component -->
<style scoped>
    div.output {
        text-align: center;
    }

    div.content {
        background-color: #eee;
        display: inline-block;
        margin: 10px;
        width: 30%;
    }

    h3 {
        color: white;
    }

    p {
        width: 90%;
        display: inline-block;
    }
</style>
