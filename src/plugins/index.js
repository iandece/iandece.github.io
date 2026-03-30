import FontAwesomeIcon from './fontawesome'
import i18n from './i18n'
import ui from './ui'

export function registerPlugins(app) {
  app.component('font-awesome-icon', FontAwesomeIcon)

  app.use(i18n)
  app.use(ui)
}
