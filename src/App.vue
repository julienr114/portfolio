<script>
  export default {
    data () {
      return {
        lang: 'fr',
        colors: [
          '#405de6', '#5851db', '#833ab4', '#c13584', '#e1306c', '#fd1d1d', '#f56040', '#f77737', '#fcaf45', '#ffdc80'
        ]
      }
    },
    methods: {
      setLang (lang) {
        this.lang = lang
      }
    }
  }
</script>

<template lang="jade">
  h1 {{ $t("message.hello", lang) }}
</template>

<style>
</style>
