chrome.runtime.onInstalled.addListener(() => {
  const defaultSettings = {
    actionDefinitions: {
      'Ctrl+L': {
        template: '${title} ${url}',
        type: 'CopyToClipboard',
      },
      'Ctrl+M': {
        template: '[${title}](${url})',
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
