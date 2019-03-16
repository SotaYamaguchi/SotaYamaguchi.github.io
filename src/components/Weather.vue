<template>
  <div class="weather">
    <div>
      <h1>日本全国の天気</h1>
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
      <!-- <ul>
        <li><nuxt-link :to="`/city/sapporo`">札幌</nuxt-link></li>
        <li><nuxt-link :to="`city/tokyo`">東京</nuxt-link></li>
        <li><nuxt-link :to="`city/tokyo`">茨城</nuxt-link></li>
        <li><nuxt-link :to="`city/nagoya`">名古屋</nuxt-link></li>
        <li><nuxt-link :to="`city/osaka`">大阪</nuxt-link></li>
        <li><nuxt-link :to="`city/fukuoka`">福岡</nuxt-link></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  data () {
    return {
      items: [
        { title: '札幌', path: '/' },
        { title: '東京', path: '/profile' },
        { title: '茨城', path: '/weather' },
        { title: '名古屋', path: '/outputs' },
        { title: '大阪', path: '/outputs' },
        { title: '福岡', path: '/outputs' }
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
