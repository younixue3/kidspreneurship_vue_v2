import {createApp} from 'vue'
import App from './App.vue'
import index from './router'
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
    faCircleCheck,
    faMoon,
    faBell,
    faTableColumns,
    faBook,
    faPerson,
    faBox,
    faPeopleLine,
    faNewspaper,
    faImages,
    faBullhorn,
    faUsers,
    faUserTie,
    faEllipsis,
    faTrash,
    faXmark,
    faEllipsisVertical,
    faArrowUpRightFromSquare,
    faChevronLeft,
    faChevronRight
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
    faCircleCheck,
    faMoon,
    faBell,
    faTableColumns,
    faBook,
    faPerson,
    faBox,
    faPeopleLine,
    faNewspaper,
    faImages,
    faBullhorn,
    faUsers,
    faUserTie,
    faEllipsis,
    faTrash,
    faXmark,
    faEllipsisVertical,
    faArrowUpRightFromSquare,
    faChevronLeft,
    faChevronRight
)

const app = createApp(App)

app.config.globalProperties.$filters = {
    formatNumber(number) {
        return Intl.NumberFormat().format(number);
    }
}

app.use(store).use(index).mount('#app')
