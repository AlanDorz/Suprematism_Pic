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

// --TRIANGLE ANIMATION--

let triangleScale = anime.timeline({
  targets: '.box',
  scale: 2.5,
  rotate: 191.2,
  translateX: -80,
  translateY: -90,
  duration: 2000,
  endDelay: 900,
  direction: 'alternate',
  autoplay: false
})

triangleScale.add({
  targets: '.triangle',
  scale: 2.5,
  rotate: 175,
  translateY: 35,
  duration: 1800
}, 0)

triangleScale.add({
  targets: '.circle',
  scale:0.7,
  rotate: 175,
  translateY: 315,
  translateX: 460
}, 0)

let triangleBtn01 =
  document.querySelector('.triangle')

triangleBtn01.onclick = triangleScale.play

// --CIRCLE ANIMATION--

let circleScale = anime.timeline({
  targets: '.box',
  scale: 0.7,
  rotate: 191.2,
  translateX: -625,
  translateY: -280,
  duration: 2000,
  endDelay: 900,
  direction: 'alternate',
  autoplay: false
})

circleScale.add({
  targets: '.triangle',
  scale: 0.7,
  rotate: 175,
  translateY: 35,
  translateX: 300,
  duration: 1800
}, 0)

circleScale.add({
  targets: '.circle',
  scale: 2.5,
  rotate: 175,
  translateY: 80,
  translateX: 20
}, 0)

let circleBtn01 =
  document.querySelector('.circle')

circleBtn01.onclick = circleScale.play

// ----MAGICSCROLL----








//
