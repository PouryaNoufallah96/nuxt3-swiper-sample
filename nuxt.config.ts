export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    modules: [
        'nuxt-swiper'
    ],
    swiper: {
        modules: ['navigation', 'pagination', 'autoplay', 'effect-creative'],
      }
})
