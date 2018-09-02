import Action from './Action'

export default class ScrollDownAction extends Action {
  static hasValue: boolean = false

  run() {
    window.scrollBy(0, 100)
  }
}
