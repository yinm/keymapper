import { editableInputType } from "../editableInputType";
import { Action } from "./Action";

export class FocusFirstInputAction extends Action {
  public run(): void {
    const firstInput = this.findFirstInput();
    firstInput && firstInput.focus();
  }

  private findFirstInput() {
    const editableInputQueries = [];
    for (const type of editableInputType) {
      editableInputQueries.push(`input[type=${type}]`);
    }

    return document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
      `${editableInputQueries.join(",")}, textarea`,
    );
  }
}
