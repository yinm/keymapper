import Action from './Action'

/**
 * Copy an argument string to clipboard.
 * @param {string} string is copied to clipboard
 * @returns {void}
 */
function copyToClipboard(string: string): void {
  const textarea = document.createElement('textarea')
  textarea.style.cssText = 'position: absolute; left: -100%;'
  document.body.appendChild(textarea)
  textarea.value = string
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

/**
 * Replace variables in template.
 * @param {string} template template string
 * @param {object} variables object of replacement string
 * @returns {string} replaced string
 */
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
