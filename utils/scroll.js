export function scrollToError(dom = false) {
  if(dom) {
    const element = document.querySelector(dom)
    const errorMessage = document.querySelector('.errorMessage')
    const errorMessageRect = errorMessage ? errorMessage.getBoundingClientRect() : null
    if (errorMessageRect) {
      element.scrollTo({
        top: element.offsetTop, 
        behavior: 'smooth'
      });
    }
  }
}
