import { Action } from "./Action";

export class GoForwardAction extends Action {
  public run(): void {
    history.forward();
  }
}
