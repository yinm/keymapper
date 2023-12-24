import { Action } from "./Action";

export class ScrollUpAction extends Action {
  public run(): void {
    window.scrollBy(0, -100);
  }
}
