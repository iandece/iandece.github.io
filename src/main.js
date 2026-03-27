import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.css'
import ui from '@nuxt/ui/vue-plugin'

const app = createApp(App)

import en from '@/locales/en.json'
import id from '@/locales/id.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'id',
  messages: {
    en,
    id,
  },
})

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(ui)
app.mount('#app')
