const txt = document.querySelector(".txt")
const div1 = document.querySelector(".img1")
const div2 = document.querySelector(".img2")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const ball1 = document.querySelector(".hisob1")
const ball2 = document.querySelector(".hisob2")
let a = 0
btn1.addEventListener("click", (e) => {
    e.preventDefault()
    const ran = Math.random()
    div1.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
    if(ran < 0.333){
        div2.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
        txt.innerHTML = "Nichya"
    }else if(ran < 0.666){
        div2.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
        txt.innerHTML = "Siz yutdingiz"
        a++
        ball1.innerHTML = a
    }else{
        div2.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
        txt.innerHTML = "ПК yutdi"
        a++
        ball2.innerHTML = a
    }
})
btn2.addEventListener("click", (e) => {
    e.preventDefault()
    const ran = Math.random()
    div1.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
    if(ran < 0.333){
        div2.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
        txt.innerHTML = "ПК yutdi"
        a++
        ball2.innerHTML = a
    }else if(ran < 0.666){
        div2.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
        txt.innerHTML = "Nichya"
    }else{
        div2.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
        txt.innerHTML = "Siz yutdingiz"
        a++
        ball1.innerHTML = a
    }
})
btn3.addEventListener("click", (e) => {
    e.preventDefault()
    const ran = Math.random()
    div1.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
    if(ran < 0.333){
        div2.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
        txt.innerHTML = "Siz yutdingiz"
        a++
        ball1.innerHTML = a
    }else if(ran < 0.666){
        div2.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
        txt.innerHTML = "ПК yutdi"
        a++
        ball2.innerHTML = a
    }else{
        div2.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
        txt.innerHTML = "Nichya"
    }
})