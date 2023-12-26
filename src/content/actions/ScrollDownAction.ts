import { Action } from "./Action";

export class ScrollDownAction extends Action {
  public run(): void {
    window.scrollBy(0, 100);
  }
}
