const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const captcha = document.getElementById("captcha")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    //checking the input field
    checkInputs()
})

function checkInputs() {
    //username - min username length is 5
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const passwordVal2 = password2.value.trim()
    const captchaVal = captcha.value.trim()

    //username
    if (usernameVal === "") {
        setError(username, "Username can not be empty")
    } else if (usernameVal.length < 5) {
        setError(username, "The minimum username length is 5")
    } else {
        setSuccess(username)
    }

    //email
    if (emailVal === "") {
        setError(email, "Email can not be empty")
    } else if (!emailVal.includes("@")) {
        setError(email, "The email is not correct")
    } else {
        setSuccess(email)
    }

    //password cannot be empty, minimum password length is 8
    if (passwordVal === "") {
        setError(password, "Passsword can not be empty")
    } else if (password.value.length < 8) {
        setError(password, "The minimum password length is 8")
    } else {
        setSuccess(password)
    }

    if (password2.value != password.value) {
        setError(password2, "Password does not match")
    } else {
        setSuccess(password2, "Password match")
    }

    // confirm password - cannot be empty and the value must be equal to the password
    // if (passwordVal2 === "") {  
    //     setError(password2, "Password can not be empty")
    // } else if (password2.value.length < 8) {
    //     setError(password2, "Password length can not be less than 8")
    // } else if (password2.value != password.value) {
    //     setError(password2, "Password does not match")
    // } else {
    //     setSuccess(password2)
    // }

    //auth
    if (captchaVal === "") {
        setError(captcha, "Confirm you are human!")
    }

}

captcha.addEventListener("input", (e) =>{
    img = document.querySelector("img")
    const text = e.target.value
    // console.log(text)
    const blurValue = 20 - text.length
    img.style.filter = `blur(${blurValue}px)`
    if (blurValue <= 0) {
        setSuccess(captcha)
    } else {
        setError(captcha, "The text is not long enough")
    }
})

function setError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    formControl.className = "form-control error"
    small.innerText = message
}

function setSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

//toggling showing password

const showBtn = document.querySelector(".show-btn")

showBtn.addEventListener("click", () =>{
    const inputType = password.getAttribute("type")
    console.log(inputType)
    if (inputType === "password") {
        password.setAttribute("type", "text")
        showBtn.value = "hide"
    } else {
        password.setAttribute("type", "password")
        showBtn.value = "show"
    }
})

const showBtns = document.querySelector(".show-btns")

showBtns.addEventListener("click", () =>{
    const inputType = password2.getAttribute("type")
    // console.log(inputType)
    if (inputType === "password") {
        password2.setAttribute("type", "text")
        showBtns.value = "hide"
    } else {
        password2.setAttribute("type", "password")
        showBtns.value = "show"
    }
})



