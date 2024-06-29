const themeBtns = document.querySelectorAll('.theme-btn')
const svgContainer = document.querySelector('.svg-container')

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    svgContainer.className = 'svg-container'
    svgContainer.classList.add(btn.dataset.theme)
  })
})
