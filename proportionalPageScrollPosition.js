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

//fullSliderLength = frameDistance * (frames.length - 1)
const proportionalPageScrollPosition = (currentScrollPosition, fullSliderLength) => {
  const fullScrollLength = scrollMaxValue()
  const scrollProportion = fullSliderLength / fullScrollLength
  const correctedScrollPosition = currentScrollPosition * scrollProportion
  
  return correctedScrollPosition
}