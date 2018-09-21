import Action from './Action'

function scrollToTop(): void {
  const currentY = window.pageYOffset
  window.scrollTo(0, Math.floor(currentY / 2))
  if (currentY > 0) {
    window.setTimeout(scrollToTop, 20)
  }
}

export default class ScrollToTopAction extends Action {
  public static hasValue: boolean = false

  public run() {
    scrollToTop()
  }
}
