document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
      --mouse-x: 0;
      --mouse-y: 0;
    `
  })
})