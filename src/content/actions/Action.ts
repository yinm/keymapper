import { Hotkey } from "../../background";

export class Action {
  public value: string;

  public constructor({ value }: Hotkey) {
    this.value = value;
  }

  public run() {}
}
