function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains("lights")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/Avatar.light.mode.png")
  } else {
    // se tiver sem light mode, manter foto normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
