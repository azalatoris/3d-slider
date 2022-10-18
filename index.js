// Utils and Helpers 
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

window.on = window.addEventListener

// 3D Slider Implementation

const frameDistance = 100

let scene, frames;

const setupInitialFramesPosition = () => {
  frames.forEach((frame, frameIndex) => {
    const startFramePosition = -(frameIndex * frameDistance)

    frame.style.setProperty(
      '--start-frame-position',
      `${startFramePosition}px`
    )
  });
}

const framesPrescroll = () => {
  setTimeout(() => {
    window.scrollTo({ top: 1 })
  }, 10)  
}
// Page onload
window.on('load', () => {
  console.log('Page is loaded')

  scene = $('#scene-3d')
  frames = $$('.scene-frame')

  setupInitialFramesPosition()
  framesPrescroll()
})

const setSceneScrollPosition = (scrollPosition) => {
  scene.style.setProperty(
    '--scroll-position',
    `${scrollPosition}px`
  )
}
// Page onscroll
window.on('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop
  setSceneScrollPosition(scrollPosition)
})