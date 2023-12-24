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

interface Hotkey {
  type: ActionType;
  value?: string;
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
      },
      "Shift+L": {
        type: "GoForward",
      },
      "Ctrl+J": {
        type: "ScrollDown",
      },
      "Ctrl+K": {
        type: "ScrollUp",
      },
      "Ctrl+G": {
        type: "ScrollToTop",
      },
      "Shift+G": {
        type: "ScrollToBottom",
      },
      "Shift+I": {
        type: "FocusFirstInput",
      },
      "Shift+P": {
        type: "ToggleTabPin",
      },
    },
  };

  const storageKey = "settings";
  const settings = await chrome.storage.sync.get(storageKey);
  if (isEmptyObject(settings)) {
    chrome.storage.sync.set({ [storageKey]: initialSettings });
  }
});
