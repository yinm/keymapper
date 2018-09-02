import Action from './Action'

export default class GoForwardAction extends Action {
  static hasValue: boolean = false

  run(): void {
    history.forward()
  }
}
