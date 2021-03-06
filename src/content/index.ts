import { detectKeyString } from 'key-string'
import actions from './actions/index'

const getSettings = (): Promise<Settings> => {
  return new Promise(resolve => {
    chrome.storage.sync.get('settings', ({ settings }) => {
      resolve(settings)
    })
  })
}

function isEditable(element: Element): boolean {
  const tagName = element.tagName.toLowerCase()
  const editableType = [
    'date',
    'datetime',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]

  return (
    (element as HTMLElement).isContentEditable ||
    tagName === 'textarea' ||
    (tagName === 'input' &&
      editableType.includes((element as HTMLInputElement).type))
  )
}

getSettings().then((settings: Settings) => {
  window.addEventListener('keydown', event => {
    if (isEditable(document.activeElement)) {
      return
    }

    const keyString = detectKeyString(event)
    const actionDefinition = settings.actionDefinitions[keyString]
    if (actionDefinition) {
      if (actionDefinition.type === 'FocusFirstInput') {
        // prevent keydown input
        event.preventDefault()
      }

      new actions[actionDefinition.type](actionDefinition).run()
    }
  })
})
