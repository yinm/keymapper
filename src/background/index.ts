interface Settings {
  actionDefinitions: {}
}

chrome.runtime.onInstalled.addListener(() => {
  const defaultSettings: Settings = {
    actionDefinitions: {
      'Ctrl+L': {
        value: '${title}\n${url}',
        type: 'CopyToClipboard'
      },
      'Ctrl+M': {
        value: '[${title}](${url})',
        type: 'CopyToClipboard'
      },
      'Shift+H': {
        type: 'GoBackAction'
      },
      'Shift+L': {
        type: 'GoForwardAction'
      },
      'Ctrl+J': {
        type: 'ScrollDownAction'
      },
      'Ctrl+K': {
        type: 'ScrollUpAction'
      },
      'Ctrl+G': {
        type: 'ScrollToTop'
      },
      'Shift+G': {
        type: 'ScrollToBottom'
      }
    }
  }

  chrome.storage.sync.get('settings', ({ settings }) => {
    if (!settings) {
      chrome.storage.sync.set({ settings: defaultSettings })
    }
  })
})
