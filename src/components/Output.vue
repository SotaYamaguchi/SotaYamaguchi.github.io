<template>
    <div class="output">
        <div v-for="(item, index) in items" :key=index>
            <div class="content">
                <h3 v-html="$sanitize(item.title)"> {{ item.title }} </h3>
                <p v-html="$sanitize(item.text)">  {{ item.text }} </p>
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
        { title: 'お天気アプリを作成', text: 'Vue.jsでの開発に向けて勉強のため作成した。' },
        { title: 'VueCliを使用', text: 'パッケージマネージャーは参考にしたサンプルコードに従ってnpmを使用したが、¥nFaceBook等によって開発されたyarnの方が機能面で下記の2点で有利らしい¥n・タスクが並行して実行される為速度が早い¥n・npmはバージョンの不整合が起こる可能性がある' },
        { title: 'Chart.jsを使用', text: 'chart.jsのプロパティがわからなかったが勉強になった。' },
        { title: 'axiosでJSONファイルを取得', text: 'OpenweatherMapのapi(weather)、(forecast)を使用し¥n選択した場所の現在の天気と3時間ごとの気象情報をグラフで表示する¥n※精度に問題あり？' }
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
        width: 40%;
    }

    h3 {
        color: white;
    }

    p {
        width: 90%;
        display: inline-block;
    }
</style>
