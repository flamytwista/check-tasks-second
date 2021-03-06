import Vue from 'vue'
import VueScreen from 'vue-screen'

// Раньше у меня был собственный 'изобретенный велосипед' для данной функциональности.
// Позже нашел эту библиотеку.
Vue.use(VueScreen, {
  // Брекпоинты должны быть синхронны с теми что в variables.scss.
  // Если бы использовались нативные css-переменные,
  // то можно было-бы избежать этого дубляи получить значения css-переменных js-ом.
  // но пока-что css значительно уступает scss в возможностях.
  bpSm: 480,
  bpSm2: 768,
  bpMd: 960,
  bpLg: 1280,
  bpXl: 1600,
  breakpointsOrder: [
    'bpSm',
    'bpSm2',
    'bpMd',
    'bpLg',
    'bpXl',
  ],
})
