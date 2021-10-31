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

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-350px',
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed')
      observer.unobserve(entry.target)
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})
