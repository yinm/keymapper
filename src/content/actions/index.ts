import { CopyToClipboardAction } from "./CopyToClipboardAction";
import { FocusFirstInputAction } from "./FocusFirstInputAction";
import { GoBackAction } from "./GoBackAction";
import { GoForwardAction } from "./GoForwardAction";
import { ScrollDownAction } from "./ScrollDownAction";
import { ScrollToBottomAction } from "./ScrollToBottomAction";
import { ScrollToTopAction } from "./ScrollToTopAction";
import { ToggleTabPinAction } from "./ToggleTabPinAction";

// FIXME: more accurate typing (related to ts7053)
export const actions: { [key: string]: any } = {
  CopyToClipboard: CopyToClipboardAction,
  FocusFirstInput: FocusFirstInputAction,
  GoBack: GoBackAction,
  GoForward: GoForwardAction,
  ScrollDown: ScrollDownAction,
  ScrollToBottom: ScrollToBottomAction,
  ScrollToTop: ScrollToTopAction,
  ToggleTabPin: ToggleTabPinAction,
};
