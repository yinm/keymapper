import Action from './Action'

export default class GoForwardAction extends Action {
  public static hasValue: boolean = false

  public run(): void {
    history.forward()
  }
}
