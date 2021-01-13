let marker = document.querySelector("#marker")
let item = document.querySelectorAll("nav a")

function indicador(e) {
  marker.style.left = e.offsetLeft + "px" 
  marker.style.width = e.offsetWidth + "px"
}

item.forEach(link => {
  link.addEventListener("click", (e) => {
    link.addEventListener("click", (e)=> {
indicador(e.target)
    })
  })
})