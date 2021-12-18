import swipeDetect from './swipe.js'

export const slider = () => {
  let currentSlide = 0
  const $slider = document.querySelector('[data-slider]')
  const $slides = $slider.querySelectorAll('[data-slide]')

  const $navPrev = $slider.querySelector('[data-prev]')
  const $navNext = $slider.querySelector('[data-next]')

  const setCurrentSlide = () => {
    $slides.forEach(slide => {
      slide.classList.remove('slide--active')
    })

    $slides[currentSlide].classList.add('slide--active')
  }

  setCurrentSlide()

  const prevHandler = () => {
    currentSlide--

    if (currentSlide < 0) {
      currentSlide = $slides.length - 1
    }

    setCurrentSlide()
  }

  const nextHandler = () => {
    currentSlide++

    if (currentSlide > $slides.length - 1) {
      currentSlide = 0
    }

    setCurrentSlide()
  }

  $navPrev.addEventListener('click', prevHandler)
  $navNext.addEventListener('click', nextHandler)

  swipeDetect($slider, dir => {
    if (dir === 'left') {
      nextHandler()
    }

    if (dir === 'right') {
      prevHandler()
    }
  })

  const onKey = e => {
    if (e.key === 'ArrowLeft') {
      prevHandler()
    }
    if (e.key === 'ArrowRight') {
      nextHandler()
    }
  }

  window.addEventListener('keydown', onKey)
}
