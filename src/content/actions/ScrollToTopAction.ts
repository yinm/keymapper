import { Action } from "./Action";

const scrollToTop = () => {
  const currentY = window.pageYOffset;
  window.scrollTo(0, Math.floor(currentY / 2));
  if (currentY > 0) {
    window.setTimeout(scrollToTop, 20);
  }
};

export class ScrollToTopAction extends Action {
  public run(): void {
    scrollToTop();
  }
}
