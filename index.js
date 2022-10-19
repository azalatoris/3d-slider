const { throttle, debounce } = throttleDebounce

// 3D Slider Implementation

const frameDistance = 100

let scene, frames, fullSliderLength;

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