import Action from './Action'

export default class CopyToClipboardAction extends Action {
  static hasValue: boolean = true

  run() {
    copyToClipboard(
      format(this.value, {
        title: document.title,
        url: location.href
      })
    )
  }
}

function copyToClipboard(string) {
  const textarea = document.createElement('textarea')
  textarea.style.cssText = 'position: absolute; left: -100%;'
  document.body.appendChild(textarea)
  textarea.value = string
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function format(template, variables) {
  return Object.keys(variables).reduce((result, variableName) => {
    return result.replace('${' + variableName + '}', variables[variableName])
  }, template)
}
