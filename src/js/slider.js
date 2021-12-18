export const slider = () => {
  const $slider = document.querySelector('[data-slider]')
  const $slides = $slider.querySelectorAll('[data-slide]')

  console.log($slides)

  const $navPrev = $slider.querySelector('[data-prev]')
  const $navNext = $slider.querySelector('[data-next]')

  const prevHandler = () => {}

  const nextHandler = () => {}

  $navPrev.addEventListener('click', prevHandler)
  $navNext.addEventListener('click', nextHandler)
}
