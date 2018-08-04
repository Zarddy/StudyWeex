/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/pages/MainPage'
import SettingsPage from '@/pages/SettingsPage'

Vue.use(Router)

module.exports = new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/settings',
            name: 'SettingsPage',
            component: SettingsPage
        }
    ]
})
