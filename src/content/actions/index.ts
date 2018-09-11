import CopyToClipboardAction from './CopyToClipboardAction'
import GoBackAction from './GoBackAction'
import GoForwardAction from './GoForwardAction'
import ScrollDownAction from './ScrollDownAction'
import ScrollUpAction from './ScrollUpAction'
import ScrollToTop from './ScrollToTopAction'
import ScrollToBottom from './ScrollToBottomAction'
import ToggleTabPinAction from './ToggleTabPinAction'

const actions = {
  CopyToClipboard: CopyToClipboardAction,
  GoBack: GoBackAction,
  GoForward: GoForwardAction,
  ScrollUp: ScrollUpAction,
  ScrollDown: ScrollDownAction,
  ScrollToTop: ScrollToTop,
  ScrollToBottom: ScrollToBottom,
  ToggleTabPin: ToggleTabPinAction
}

export default actions
