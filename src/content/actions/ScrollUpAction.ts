import Action from './Action'

export default class ScrollUpAction extends Action {
  public static hasValue: boolean = false

  public run() {
    window.scrollBy(0, -100)
  }
}
