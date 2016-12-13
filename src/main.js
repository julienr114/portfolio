// import Vue
import Vue from 'vue'

// import module
import VueI18n from 'vue-i18n'

// import locales
import locales from './locales.js'

// install plugin
Vue.use(VueI18n)

// set lang
Vue.config.lang = 'fr'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})


// import components
import App from './App'

// create instance
new Vue({
  el: 'body',
  components: { App }
})
