import Action from './Action'

export default class ScrollDownAction extends Action {
  static hasValue() {
    return false
  }

  run() {
    window.scrollBy(0, 100)
  }
}
