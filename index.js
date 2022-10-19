const { throttle, debounce } = throttleDebounce

// 3D Slider Implementation

const FRAME_DISTANCE = 1000

let scene, frames, fullSliderLength;

// Page onload
window.on('load', () => {
  console.log('Page is loaded')

  scene = $('#scene-3d')
  frames = $$('.scene-frame')
  fullSliderLength = FRAME_DISTANCE * (frames.length - 1)

  setupInitialFramesPosition(frames, FRAME_DISTANCE)
  framesPrescroll()

  // Page onscroll
  window.on('scroll', 
    throttle(
      100, 
      scrollModule(scene, frames, fullSliderLength).scrollHandler
    )
  ) 
})