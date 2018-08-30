import { detectKeyString } from 'key-string'
import actions from './actions/index'

const getSettings = () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get('settings', ({ settings }) => {
      resolve(settings)
    })
  })
}

getSettings().then((settings: Settings) => {
  window.addEventListener('keydown', (event) => {
    const keyString = detectKeyString(event)
    const actionDefinition = settings.actionDefinitions[keyString]
    if (actionDefinition) {
      new actions[actionDefinition.type](actionDefinition).run()
    }
  })
})
