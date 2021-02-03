const menu = document.querySelector(".menu-elements")
const burguerButton = document.querySelector("#burger-menu")
const ipad = window.matchMedia("screen and (max-width: 767px)")

ipad.addListener(validation)

function hideShow () {
    
    if (menu.classList.contains("is-active")) {
        
        menu.classList.remove("is-active")
    }
    else {
        menu.classList.add("is-active")
    }
}

function validation (event) {
    
    if (event.matches) {
        
        burguerButton.addEventListener("click", hideShow)
    }
    else {
        burguerButton.removeEventListener("click", hideShow)
        
    }
}
validation(ipad)
burguerButton.addEventListener("click", hideShow)