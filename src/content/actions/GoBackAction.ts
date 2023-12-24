import { Action } from "./Action";

export class GoBackAction extends Action {
  public run(): void {
    history.back();
  }
}
