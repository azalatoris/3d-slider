const scrollModule = (scene, frames, fullSliderLength) => {
  const OPTIMIZATION_CSS_CLASS = "scene-frame-optimization"
  const TIMER_DELAY = 1000

  const FOREGROUND_VISIBLE_DISTANCE = 200
  const BACKGROUND_VISIBLE_DISTANCE = -1000

  let optimization = false
  let scrollTimerId = undefined

  const addSceneFrameOptimization = () => {
    if (!optimization) {
      scene.classList.add(OPTIMIZATION_CSS_CLASS)
      optimization = true
      console.log("Before Scroll")
    }
  }

  const removeSceneFrameOptimization = () => {
    clearTimeout(scrollTimerId)

    scrollTimerId = setTimeout(() => {
      optimization = false
      scene.classList.remove(OPTIMIZATION_CSS_CLASS)
      console.log("After Scroll")
    }, TIMER_DELAY)
  }

  const beforeAction = () => {
    addSceneFrameOptimization()
  }

  const afterAction = () => {
    removeSceneFrameOptimization()
  }

  const setOpacityValue = (frames, correctedScrollPosition) => {
    frames.forEach((frame, frameIndex) => {
      let calculatedOpacity = 0

      const startFramePosition = parseInt(
        frame.style.getPropertyValue('--start-frame-position'), 
      10
    )

    const distanceToScene = startFramePosition + correctedScrollPosition

    if (distanceToScene === 0) {
      calculatedOpacity = 1
    }

    if (distanceToScene < 0 && distanceToScene > BACKGROUND_VISIBLE_DISTANCE) {
      calculatedOpacity = (BACKGROUND_VISIBLE_DISTANCE - distanceToScene) / BACKGROUND_VISIBLE_DISTANCE
    }

    if (distanceToScene > 0 && distanceToScene < FOREGROUND_VISIBLE_DISTANCE) {
      calculatedOpacity = (FOREGROUND_VISIBLE_DISTANCE - distanceToScene) / FOREGROUND_VISIBLE_DISTANCE
    }

    frame.style.opacity = calculatedOpacity
    })
  }
  
  const scrollHandler = () => {
    beforeAction()

    console.log("Scroll")
    const { correctedScrollPosition } = calcScrollValues(fullSliderLength)
    setSceneScrollPosition(scene, correctedScrollPosition)
    setOpacityValue(frames, correctedScrollPosition)

    afterAction()
  }

  return {
    scrollHandler: scrollHandler
  }
}