<template>
  <div class="weather">
    <div>
      <h1>日本全国の天気</h1>
      <div>
        <ol>
          <li v-for="(item, index) in items" :key=index>
            <button>
              <router-link v-bind:to=item.area>
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
  name: 'LinkButton',
  data () {
    return {
      items: [
        { title: '札幌', area: 'Sapporo' },
        { title: '東京', area: 'Tokyo' },
        { title: '茨城', area: 'Ibaraki' },
        { title: '名古屋', area: 'Tokyo' },
        { title: '大阪', area: 'Osaka' },
        { title: '福岡', area: 'Hukuoka' }
      ]
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
