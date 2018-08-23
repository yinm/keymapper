import Action from './Action'

export default class ScrollUpAction extends Action {
  run() {
    window.scrollBy(0, -100)
  }
}
