let y_score =0
let c_score = 0

let rock = document.querySelector(".imgr")
let paper = document.querySelector(".imgp")
let scissor = document.querySelector(".imgs")
let ys = document.querySelector(".sc1")
let cs = document.querySelector(".sc2")
let m1 = document.querySelector(".msgc")
let m2 = document.querySelector(".msgy")
let r = document.querySelector(".re_st")

function c_choice(){
    choices = ["rock","paper","scissor"]
    let n = Math.floor(Math.random()*3)
    return choices[n]
}

rock.addEventListener("click",()=>{
    x = c_choice()
    if(x=="paper"){
        c_score = c_score+1
        cs.innerText = c_score
        m1.innerText = `Computer choice ${x}`
        m2.innerText = "Your Choice is Rock"
    }
    if(x=="scissor"){
        y_score = y_score+1
        ys.innerText = y_score
        m1.innerText = `Computer choice ${x}`
        m2.innerText = "Your Choice is Rock"
    }
})

paper.addEventListener("click",()=>{
    x = c_choice()
    if(x=="scissor"){
        c_score = c_score+1
        cs.innerText = c_score
         m1.innerText = `Computer choice ${x}`
        m2.innerText = "Your Choice is Paper"
    }
    if(x=="rock"){
        y_score = y_score+1
        ys.innerText = y_score
         m1.innerText = `Computer choice ${x}`
        m2.innerText = "Your Choice is Paper"
    }
})

scissor.addEventListener("click",()=>{
    x = c_choice()
    if(x=="rock"){
        c_score = c_score+1
        cs.innerText = c_score
         m1.innerText = `Computer choice ${x}`
        m2.innerText = "Your Choice is Scissor"
    }
    if(x=="paper"){
        y_score = y_score+1
        ys.innerText = y_score
         m1.innerText = `Computer choice ${x}`
        m2.innerText = "Your Choice is Scissor"
    }
})

r.addEventListener("click",()=>{
    m1.innerText=""
    m2.innerText=""
    y_score=0
    ys.innerText=y_score
    c_score = 0
    cs.innerText = c_score

})

