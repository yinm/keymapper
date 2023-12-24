import { actions } from "./actions";
import detectKeyString from "./detectKeyString";
import { storageKey } from "../const";

const isEditable = (element: Element) => {
  const tagName = element.tagName.toLowerCase();
  const editableInputType = [
    "date",
    "datetime",
    "datetime-local",
    "email",
    "month",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];

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
      new actions[actionDefinition.type](actionDefinition).run();
    }
  });
});
