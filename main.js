const img = document.querySelector(".img")
console.log(img)

img.addEventListener("click",() => {
    console.log("img")
img.style.width = "100px"

})


const img1 =document.querySelector(".img1")
console.log(img1)

img1.addEventListener("click", () => {
    console.log("img1")
    img1.style.width = "300px"
})


const btn1 = document.querySelector(".btn1")
console.log (btn1)

btn1.addEventListener("click", () => {
  img1.style.width = "700px"
})