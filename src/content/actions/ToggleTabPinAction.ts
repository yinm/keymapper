import { actionKeyForTogglePin } from "../../const";
import { Action } from "./Action";

export class ToggleTabPinAction extends Action {
  public run() {
    chrome.runtime.sendMessage({ action: actionKeyForTogglePin });
  }
}
