import Action from './Action'

export default class ToggleTabPinAction extends Action {
  public static hasValue: boolean = false

  public run() {
    chrome.runtime.sendMessage({ function: 'togglePin' })
  }
}
