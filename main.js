const txt = document.querySelector(".txt")
const div1 = document.querySelector(".img1")
const div2 = document.querySelector(".img2")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
btn1.addEventListener("click", (e) => {
    const ran = Math.random()
    div1.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
    if(ran < 0.333){
        div2.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
        txt.innerHTML = "Nichya"
    }else if(ran < 0.666){
        div2.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
        txt.innerHTML = "Siz yutdingiz"
    }else{
        div2.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
        txt.innerHTML = "ПК yutdi"
    }
    console.log(ran);
})
btn2.addEventListener("click", (e) => {
    const ran = Math.random()
    div1.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
    if(ran < 0.333){
        div2.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
        txt.innerHTML = "ПК yutdi"
    }else if(ran < 0.666){
        div2.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
        txt.innerHTML = "Nichya"
    }else{
        div2.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
        txt.innerHTML = "Siz yutdingiz"
    }
    console.log(ran);
})
btn3.addEventListener("click", (e) => {
    const ran = Math.random()
    div1.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
    if(ran < 0.333){
        div2.innerHTML = `<img src="./img/камень.png" alt="" class="dom">`
        txt.innerHTML = "Siz yutdingiz"
    }else if(ran < 0.666){
        div2.innerHTML = `<img src="./img/нож.png" alt="" class="dom">`
        txt.innerHTML = "ПК yutdi"
    }else{
        div2.innerHTML = `<img src="./img/бумага.png" alt="" class="dom">`
        txt.innerHTML = "Nichya"
    }
    console.log(ran);
})