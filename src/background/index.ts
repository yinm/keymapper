import MessageSender = chrome.runtime.MessageSender

interface Settings {
  actionDefinitions: {}
}

interface MessageObject {
  function: string
}

chrome.runtime.onMessage.addListener(
  (
    message: MessageObject,
    sender: MessageSender,
    sendResponse: (response: any) => void
  ): void => {
    if (message.function === 'togglePin') {
      chrome.tabs.get(sender.tab.id, tab => {
        chrome.tabs.update(sender.tab.id, { pinned: !tab.pinned })
      })
    }
  }
)

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
        type: 'GoBack'
      },
      'Shift+L': {
        type: 'GoForward'
      },
      'Ctrl+J': {
        type: 'ScrollDown'
      },
      'Ctrl+K': {
        type: 'ScrollUp'
      },
      'Ctrl+G': {
        type: 'ScrollToTop'
      },
      'Shift+G': {
        type: 'ScrollToBottom'
      },
      'Shift+I': {
        type: 'FocusFirstInput'
      },
      'Shift+P': {
        type: 'ToggleTabPin'
      }
    }
  }

  chrome.storage.sync.get('settings', ({ settings }) => {
    if (!settings) {
      chrome.storage.sync.set({ settings: defaultSettings })
    }
  })
})
