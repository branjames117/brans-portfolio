let starNodes = document.querySelectorAll('.secret')
console.log(starNodes)

starNodes.forEach((starNode) => {
  setInterval(() => {
    starNode.classList.add('brighter')
    setTimeout(() => {
      starNode.classList.remove('brighter')
    }, Math.random() * 1000 + 1000)
  }, Math.random() * 15000 + 1000)
})

/* to do - add fade-ins for the sections with intersection observor */

let aboutSection = document.querySelector('#about')

let projectsSection = document.querySelector('#projects')

let contactSection = document.querySelector('#contact')

let resumeSection = document.querySelector('#resume')
