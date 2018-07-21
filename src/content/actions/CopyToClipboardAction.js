import Action from './Action'

function copyToClipboard (string) {
  const textarea = document.createelement('textarea')
  textarea.style.cssText = 'position: absolute; left: -100%;'
  document.body.appendChild(textarea)
  textarea.value = string
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function format (template, variables) {
  return Object.keys(variables).reduce((result, variableName) => {
    return result.replace('${' + variableName + '}', variables[variableName])
  }, template)
}

export default class CopyToClipboardAction extends Action {
  static hasValue = true

  run () {
    copyToClipboard(
      format(
        this.value,
        {
          title: document.title,
          url: location.href
        }
      )
    )
  }
}
