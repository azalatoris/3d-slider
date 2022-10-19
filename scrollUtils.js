// Body height => 3498
// Scroll height => 2631 (no bookmarks)

const scrollMaxValue = () => {
  const body = document.body;
  const html = document.documentElement;

  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const windowHeight = window.innerHeight;

  return documentHeight - windowHeight;
}

const getScrollProportion = () => {
  const fullScrollLength = scrollMaxValue()
  const scrollProportion = fullSliderLength / fullScrollLength
  return scrollProportion
}

const calcScrollValues = (fullSliderLength) => { 
  const scrollPosition = document.documentElement.scrollTop
  const scrollProportion = getScrollProportion(fullSliderLength)
  const correctedScrollPosition = scrollPosition * scrollProportion
  
  return {
    scrollPosition: scrollPosition,
    scrollProportion: scrollProportion,
    correctedScrollPosition: correctedScrollPosition
  }
}