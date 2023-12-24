import { CopyToClipboardAction } from "./CopyToClipboardAction";
import { FocusFirstInputAction } from "./FocusFirstInputAction";

// FIXME: more accurate typing (related to ts7053)
export const actions: { [key: string]: any } = {
  CopyToClipboard: CopyToClipboardAction,
  FocusFirstInput: FocusFirstInputAction,
};
