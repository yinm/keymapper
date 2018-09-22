import Action from './Action'

function copyToClipboard(string: string): void {
  const textarea = document.createElement('textarea')
  textarea.style.cssText = 'position: absolute; left: -100%;'
  document.body.appendChild(textarea)
  textarea.value = string
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function format(template: string, variables: object): string {
  return Object.keys(variables).reduce((result, variableName) => {
    return result.replace('${' + variableName + '}', variables[variableName])
  }, template)
}

export default class CopyToClipboardAction extends Action {
  public static hasValue: boolean = true

  public run(): void {
    copyToClipboard(
      format(this.value, {
        title: document.title,
        url: location.href
      })
    )
  }
}
