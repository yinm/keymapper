import { CopyToClipboardAction } from "./CopyToClipboardAction";
import { FocusFirstInputAction } from "./FocusFirstInputAction";
import { GoBackAction } from "./GoBackAction";
import { GoForwardAction } from "./GoForwardAction";
import { ToggleTabPinAction } from "./ToggleTabPinAction";

// FIXME: more accurate typing (related to ts7053)
export const actions: { [key: string]: any } = {
  CopyToClipboard: CopyToClipboardAction,
  FocusFirstInput: FocusFirstInputAction,
  GoBack: GoBackAction,
  GoForward: GoForwardAction,
  ToggleTabPin: ToggleTabPinAction,
};
