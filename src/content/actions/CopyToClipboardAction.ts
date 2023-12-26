import { Action } from "./Action";

const copyToClipboard = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.style.cssText = "position: absolute; left: -100%;";
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

interface Variables {
  title: string;
  url: string;
  [key: string]: string;
}
const format = (template: string, variables: Variables) =>
  Object.keys(variables).reduce((accumulated, variableName) => {
    return accumulated.replace(
      "${" + variableName + "}",
      variables[variableName],
    );
  }, template);

export class CopyToClipboardAction extends Action {
  public run(): void {
    copyToClipboard(
      format(this.value, {
        title: document.title,
        url: location.href,
      }),
    );
  }
}
