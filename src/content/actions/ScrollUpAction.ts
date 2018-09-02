import Action from './Action'

export default class ScrollUpAction extends Action {
  static hasValue: boolean = false

  run() {
    window.scrollBy(0, -100)
  }
}
