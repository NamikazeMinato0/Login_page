let pass = document.querySelector("#passText")
let btn = document.querySelector("#login")

pass.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        btn.click()
    }
    })