import Action from './Action'

export default class GoForwardAction extends Action {
  static hasValue() {
    return false
  }

  run(): void {
    history.forward()
  }
}
