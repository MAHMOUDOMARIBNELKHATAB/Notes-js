let btn = document.querySelector(".btn")
let notecontainer = document.querySelector(".noteContainer")

btn.addEventListener("click", () => {
  let box=document.createElement("p")
  box.setAttribute("contenteditable", "true")
  box.className="input"
  let img = document.createElement("img")
  img.src = "./img/delete.png"
  notecontainer.appendChild(box).appendChild(img)
})

notecontainer.addEventListener("click", function(e) {
   if(e.target.tagName=="IMG"){
    e.target.parentElement.remove()
  }
})
