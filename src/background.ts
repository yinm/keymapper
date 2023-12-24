import { storageKey } from "./const";
import { isEmptyObject } from "./util";

type ActionType =
  | "CopyToClipboard"
  | "GoBack"
  | "GoForward"
  | "ScrollDown"
  | "ScrollUp"
  | "ScrollToTop"
  | "ScrollToBottom"
  | "FocusFirstInput"
  | "ToggleTabPin";

export interface Hotkey {
  type: ActionType;
  value: string;
}

interface Settings {
  actionDefinitions: {
    [hotKey: string]: Hotkey;
  };
}

chrome.runtime.onInstalled.addListener(async () => {
  const initialSettings: Settings = {
    actionDefinitions: {
      "Ctrl+L": {
        type: "CopyToClipboard",
        value: "${title}\n${url}",
      },
      "Ctrl+M": {
        type: "CopyToClipboard",
        value: "[${title}](${url})",
      },
      "Shift+H": {
        type: "GoBack",
        value: "",
      },
      "Shift+L": {
        type: "GoForward",
        value: "",
      },
      "Ctrl+J": {
        type: "ScrollDown",
        value: "",
      },
      "Ctrl+K": {
        type: "ScrollUp",
        value: "",
      },
      "Ctrl+G": {
        type: "ScrollToTop",
        value: "",
      },
      "Shift+G": {
        type: "ScrollToBottom",
        value: "",
      },
      "Shift+I": {
        type: "FocusFirstInput",
        value: "",
      },
      "Shift+P": {
        type: "ToggleTabPin",
        value: "",
      },
    },
  };

  const settings = await chrome.storage.sync.get(storageKey);
  if (isEmptyObject(settings)) {
    chrome.storage.sync.set({ [storageKey]: initialSettings });
  }
});
