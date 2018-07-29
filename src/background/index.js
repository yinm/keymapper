chrome.runtime.onInstalled.addListener(() => {
  const defaultSettings = {
    actionDefinitions: {
      'Ctrl+L': {
        value: '${title}\n${url}',
        type: 'CopyToClipboard',
      },
      'Ctrl+M': {
        value: '[${title}](${url})',
        type: 'CopyToClipboard',
      },
    },
  }

  chrome.storage.sync.get('settings', ({ settings }) => {
    if (!settings) {
      chrome.storage.sync.set({ settings: defaultSettings })
    }
  })
})
