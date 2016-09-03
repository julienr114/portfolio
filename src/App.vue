<script>
  export default {
    data () {
      return {
        lang: 'en',
        colors: ['#8ec06c', '#00a78e', '#405de6', '#5851db', '#833ab4', '#c13584', '#e1306c', '#fd1d1d', '#f56040', '#f77737', '#fcaf45', '#ffdc80'],
        indexColor: 0,
        backgroundColor1: [0, 1],
        backgroundColor2: [1, 2]
      }
    },
    methods: {
      setLang (lang) {
        this.lang = lang
      },
      setUpBackgroundColor () {
        if(this.indexColor + 2 < this.colors.length) {
          this.indexColor += 1
          if(this.indexColor%2 === 0) {
            this.backgroundColor1[0] = this.backgroundColor2[1]
            this.backgroundColor1[1] = this.backgroundColor2[1] + 1
          } else {
            this.backgroundColor2[0] = this.backgroundColor1[1]
            this.backgroundColor2[1] = this.backgroundColor1[1] + 1
          }
        }
      },
      setDownBackgroundColor () {
        if(this.indexColor > 0 ) {
          this.indexColor -= 1
          if(this.indexColor%2 === 0) {
            this.backgroundColor1[0] = this.backgroundColor2[0] -1
            this.backgroundColor1[1] = this.backgroundColor2[0]
          } else {
            this.backgroundColor2[0] = this.backgroundColor1[0] -1
            this.backgroundColor2[1] = this.backgroundColor1[0]
          }
        }
      },
      font1Background (watcher) {
        return 'linear-gradient(' + (this.indexColor+1)*-26 + 'deg , ' + this.colors[this.backgroundColor1[0]] + ', ' + this.colors[this.backgroundColor1[1]] + ')'
      },
      font2Background () {
        return 'linear-gradient(' + (this.indexColor+1)*-26 + 'deg , ' + this.colors[this.backgroundColor2[0]] + ', ' + this.colors[this.backgroundColor2[1]] + ')'
      }
    }
  }
</script>

<template lang="jade">
  .app
    .font1(:style="{background: font1Background(indexColor) }")
    .font2(
      v-if="indexColor%2 != 0",
      :style="{background: font2Background() }",
      transition="background")
    .content
      h1(@click="setUpBackgroundColor()") {{ $t("message.hello", lang) }}
</template>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
  .content {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
  }
  .font1, .font2 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  .background-transition {
    transition: opacity 3.5s;
    opacity: 1;
  }

  .background-enter, .background-leave {
    opacity: 0;
  }

  h1 {
    margin: auto;
  }
</style>
