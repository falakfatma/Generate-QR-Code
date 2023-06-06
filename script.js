let btn = document.querySelector(".btn")
let inputArea = document.querySelector("input")
let container = document.querySelector(".container")
let image =  document.querySelector("img")

btn.addEventListener("click",() =>{
  let inputValue = inputArea.value;
  if (!inputValue) {
      return;
  }
btn.innerHTML = `Generating QR Code.....`
image.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue} `
  
image.addEventListener("load",()=>{
  btn.innerHTML = `Generate QR Code`
  container.classList.add('active')
  })
})

addEventListener('keyup',()=>{
      container.classList.remove('active')
})