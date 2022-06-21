import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap&subset=cyrillic' },
                { rel: 'stylesheet', href: '/assets/style.css' },
              ],
        }
    }
})
