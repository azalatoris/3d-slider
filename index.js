// Utils and Helpers 
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

window.on = window.addEventListener

// 3D Slider Implementation

const frameDistance = 100

let scena, frames;

const setupInitialFramesPosition = () => {
  frames.forEach((frame, frameIndex) => {
    const startFramePosition = -(frameIndex * frameDistance)

    frame.style.setProperty(
      '--start-frame-position',
      `${startFramePosition}px`
    )
  });
}

// Page onload
window.on('load', () => {
  console.log('Page is loaded')

  scena = $('scene-3d')
  frames = $$('.scene-frame')

  setupInitialFramesPosition()
})

// Page onscroll
window.on('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop
  
  frames.forEach((frame) => {
    frame.style.setProperty(
      '--scroll-position',
      `${scrollPosition}px`
    )
  });
})