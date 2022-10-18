// 3D Slider Implementation

const frameDistance = 100

let scene, frames;

// Page onload
window.on('load', () => {
  console.log('Page is loaded')

  scene = $('#scene-3d')
  frames = $$('.scene-frame')

  setupInitialFramesPosition(frames, frameDistance)
  framesPrescroll()
})

// Page onscroll
window.on('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop
  setSceneScrollPosition(scene, scrollPosition)
})