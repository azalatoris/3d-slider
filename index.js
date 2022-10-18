const { throttle, debounce } = throttleDebounce

// 3D Slider Implementation

const frameDistance = 100

let scene, frames, fullSliderLength;

const scrollModule = (scene, fullSliderLength) => {
  const optimizationCssClass = "scene-frame-optimization"

  let optimization = false
  let scrollTimerId = undefined

  const beforeAction = () => {
    if (!optimization) {
      scene.classList.add(optimizationCssClass)
      optimization = true
      console.log("Before Scroll")
    }
  }

  const afterAction = () => {
    clearTimeout(scrollTimerId)

    scrollTimerId = setTimeout(() => {
      optimization = false
      scene.classList.remove(optimizationCssClass)
      console.log("After Scroll")
    }, 1000)
  }

  const scrollHandler = () => {
    beforeAction()

    console.log("Scroll")
    const scrollPosition = document.documentElement.scrollTop
    const correctedScrollPosition = proportionalPageScrollPosition(scrollPosition, fullSliderLength)
    
    setSceneScrollPosition(scene, correctedScrollPosition)

    afterAction()
  }

  return {
    scrollHandler: scrollHandler
  }
}
// Page onload
window.on('load', () => {
  console.log('Page is loaded')

  scene = $('#scene-3d')
  frames = $$('.scene-frame')
  fullSliderLength = frameDistance * (frames.length - 1)

  setupInitialFramesPosition(frames, frameDistance)
  framesPrescroll()

  // Page onscroll
  window.on('scroll', 
    throttle(
      100, 
      scrollModule(scene, fullSliderLength).scrollHandler
    )
  ) 
})