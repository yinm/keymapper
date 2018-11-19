import Action from './Action'

export default class FocusFirstInputAction extends Action {
  public static hasValue: boolean = false

  public run(): void {
    const firstInput = this.findFirstInput()
    firstInput && firstInput.focus()
  }

  private findFirstInput(): HTMLElement|null {
    const editableTypes = [
      'date',
      'datetime',
      'datetime-local',
      'email',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week'
    ]

    let editableInputs = []
    for (let type of editableTypes) {
      editableInputs.push(`input[type=${type}]`)
    }

    return document.querySelector(`${editableInputs.join(',')}, textarea`)
  }
}
