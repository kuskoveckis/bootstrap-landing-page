anime({
  targets: ".test-left",
  translateX: [200, 0],
  autoplay: true,
  opacity: [0, 1],
  easing: "easeInOutSine",
});

anime({
  targets: ".test-right",
  translateX: [-200, 0],
  autoplay: true,
  opacity: [0, 1],
  easing: "easeInOutSine",
});

anime({
  targets: ".test-up",
  translateY: [50, 0],
  autoplay: true,
  opacity: [0, 1],
  easing: "easeInOutSine",
});

anime({
  targets: ".test-up-delay",
  translateY: [80, 0],
  autoplay: true,
  opacity: [0, 1],
  delay: 200,
  easing: "easeInOutSine",
});
