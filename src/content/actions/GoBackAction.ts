import Action from './Action'

export default class GoBackAction extends Action {
  static hasValue: boolean = false

  run(): void {
    history.back()
  }
}
