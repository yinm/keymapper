import Action from './Action'

export default class GoBackAction extends Action {
  static hasValue() {
    return false
  }

  run(): void {
    history.back()
  }
}
