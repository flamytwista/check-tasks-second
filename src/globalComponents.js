import Vue from 'vue'

import Container from '@/my-own-library/components/Container.vue'
import Btn from '@/my-own-library/components/FormInputBtn'
import Txt from '@/my-own-library/components/FormInputTxt'
import CheckBox from '@/my-own-library/components/FormInputCheckBox'

Vue.component('container', Container)
Vue.component('btn', Btn)
Vue.component('txt', Txt)
Vue.component('check-box', CheckBox)
