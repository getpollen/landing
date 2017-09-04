import getScript from './getscript'
import { user } from '../identity'

getScript('https://www.googletagmanager.com/gtag/js?id=UA-105869301-1')
window.dataLayer = window.dataLayer || []
window.gtag = function() {
  window.dataLayer.push(arguments)
}
window.gtag('js', new Date())
window.gtag('config', 'UA-105869301-1')
window.gtag('set', { user_id: user().id })
