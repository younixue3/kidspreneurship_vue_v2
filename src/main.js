import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
    faAngleLeft,
    faAngleRight,
    faPlay,
    faForwardStep,
    faBackwardStep,
    faCircleCheck
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
    faAngleLeft,
    faAngleRight,
    faPlay,
    faForwardStep,
    faBackwardStep,
    faCircleCheck
)

createApp(App).use(store).use(router).mount('#app')
