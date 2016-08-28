<script>
  export default {
    data () {
      return {
        lang: 'fr'
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
