import Action from './Action'

export default class GoBackAction extends Action {
  public static hasValue: boolean = false

  public run(): void {
    history.back()
  }
}
