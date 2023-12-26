import { Action } from "./Action";

export class ScrollToBottomAction extends Action {
  public run(): void {
    const rootElement = document.documentElement;
    const bottomY = rootElement.scrollHeight - rootElement.clientHeight;
    window.scroll(0, bottomY);
  }
}
