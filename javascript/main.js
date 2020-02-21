// --BOX ANIMATION--

let boxScale = anime.timeline({
  targets: '.box',
  scale: 2,
  rotate: 191.2,
  translateX: -60,
  translateY: -60,
  duration: 2000,
  endDelay: 900,
  direction: 'alternate',
  autoplay: false
})

boxScale.add({
  targets: '.triangle',
  scale: 1.2,
  rotate: 175,
  translateY: 215,
  translateX: -75,
  duration: 1800
}, 0)

boxScale.add({
  targets: '.circle',
  scale:0.7,
  rotate: 175,
  translateY: 300,
  translateX: 440
}, 0)

let boxBtn01 =
  document.querySelector('.box')

boxBtn01.onclick = boxScale.play
