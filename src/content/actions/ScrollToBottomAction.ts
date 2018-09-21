import Action from './Action'

export default class ScrollToBottomAction extends Action {
  public static hasValue: boolean = false

  public run() {
    scrollToBottom()
  }
}

function scrollToBottom() {
  const rootElement = document.documentElement
  const bottomY = rootElement.scrollHeight - rootElement.clientHeight
  window.scroll(0, bottomY)
}
