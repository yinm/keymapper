import Action from './Action'

export default class ScrollToBottomAction extends Action {
  static hasValue() {
    return false
  }

  run() {
    scrollToBottom()
  }
}

function scrollToBottom() {
  const rootElement = document.documentElement
  const y = rootElement.scrollHeight - rootElement.clientHeight
  window.scroll(0, y)
}
