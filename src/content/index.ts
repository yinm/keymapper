import { actions } from "./actions";
import detectKeyString from "./detectKeyString";
import { storageKey } from "../const";
import { editableInputType } from "./editableInputType";

const isEditable = (element: Element) => {
  const tagName = element.tagName.toLowerCase();

  return (
    (element as HTMLElement).isContentEditable ||
    tagName === "textarea" ||
    (tagName === "input" &&
      editableInputType.includes((element as HTMLInputElement).type))
  );
};

chrome.storage.sync.get(storageKey).then((settings) => {
  window.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    if (activeElement === null || isEditable(activeElement)) {
      return;
    }

    const keyString = detectKeyString(event);
    const actionDefinition = settings.settings.actionDefinitions[keyString];
    if (actionDefinition) {
      if (actionDefinition.type === "FocusFirstInput") {
        // prevent from inputting hot keys
        event.preventDefault();
      }

      new actions[actionDefinition.type](actionDefinition).run();
    }
  });
});
