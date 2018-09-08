import Action from './Action'

export default class ToggleTabPinAction extends Action {
  static hasValue: boolean = false

  run() {
    chrome.runtime.sendMessage({ function: 'togglePin' })
  }
}
