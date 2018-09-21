import Action from './Action'

export default class ScrollToTopAction extends Action {
  public static hasValue: boolean = false

  public run() {
    scrollToTop()
  }
}

function scrollToTop() {
  const currentY = window.pageYOffset
  window.scrollTo(0, Math.floor(currentY / 2))
  if (currentY > 0) {
    window.setTimeout(scrollToTop, 20)
  }
}
