let info = document.querySelector('.title-info-hidden')
let info_modul = document.querySelector('.modul-info')

let check = document.querySelector('.title-checked-hidden')
let check_modul = document.querySelector('.modul-checked')

let warn = document.querySelector('.title-warn-hidden')
let warn_modul=document.querySelector('.modul-warn')

let close = document.querySelector('.title-close-hidden')
let close_modul=document.querySelector('.modul-close')



function func(){
    info.classList.add("hidden")
    check.classList.add("hidden")
    warn.classList.add("hidden")
    close.classList.add("hidden")

    info_modul.classList.remove("hidden")
    check_modul.classList.remove("hidden")
    warn_modul.classList.remove("hidden")
    close_modul.classList.remove("hidden")

}
setTimeout(func,3000)

function buttonOne(){
    info.classList.remove("hidden")
    info_modul.classList.add("hidden")
    setTimeout(buttonOneR,2000)
}
function buttonOneR(){
    info.classList.add("hidden")
    info_modul.classList.remove("hidden")
}

function  buttoncheck(){
    check.classList.remove("hidden")
    check_modul.classList.add("hidden")
    setTimeout(buttoncheckR,2000)
}
function buttoncheckR(){
    check.classList.add("hidden")
    check_modul.classList.remove("hidden")
}

function buttonwarn(){
 warn.classList.remove("hidden")
 warn_modul.classList.add("hidden")
 setTimeout(buttonwarnR,2000)   
}
function buttonwarnR(){
    warn.classList.add("hidden")
    warn_modul.classList.remove("hidden")
}

function buttonclose(){
    close.classList.remove("hidden")
    close_modul.classList.add("hidden")
    setTimeout(buttoncloseR,2000)
}
function buttoncloseR(){
    close.classList.add("hidden")
    close_modul.classList.remove("hidden")
}