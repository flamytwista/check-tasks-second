import vueFaker from 'vue-faker'
import Vue from 'vue'

Vue.use(vueFaker)

// Чтобы результаты были всегда одинаковыми
Vue.faker().seed(123)
