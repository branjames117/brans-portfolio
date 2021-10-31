let starNodes = document.querySelectorAll('.secret')

starNodes.forEach((starNode) => {
  setInterval(() => {
    starNode.classList.add('brighter')
    setTimeout(() => {
      starNode.classList.remove('brighter')
    }, Math.random() * 1000 + 1000)
  }, Math.random() * 15000 + 1000)
})

/* to do - add fade-ins for the sections with intersection observor */

const sections = document.querySelectorAll('section')
sections.forEach((section) => {
  console.log('Hiding section')
  section.style.opacity = '0'
})

const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Revealing section')
      entry.target.style = ''
      entry.target.classList.add('revealed')
      observer.unobserve(entry.target)
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})
