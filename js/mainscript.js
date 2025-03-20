var nam = document.getElementById("name")
var age = document.getElementById("age")
var male = document.getElementById("male")
var female = document.getElementById("female")
var age = document.getElementById("age")
var red = document.getElementsByTagName("option")[1]
var green = document.getElementsByTagName("option")[2]
var blue = document.getElementsByTagName("option")[3]
var register = document.getElementById("register")
var nameCookie, ageCookie
nam.addEventListener("input", function () {
    nameCookie = nam.value
})
age.addEventListener("input", function () {
    ageCookie = age.value
})
function getName() {
    if (nameCookie)
        return nameCookie
    else
        return 0
}
function getAge() {
    if (ageCookie)
        return ageCookie
    else
        return 0

}
function getGender() {
    if (male.checked) {
        return "male"
    }
    else if (female.checked)
        return "female"
    else
        return 0
}
function getColor() {
    if (red.selected)
        return "red"
    else if (green.selected)
        return "green"
    else if (blue.selected)
        return "blue"
    else
        return 0
}
register.addEventListener("click", function () {
    if (getName() && getAge() && getGender() && getColor()) {
        window.location.assign("/pages/profile.html")
        cookies.setCookie("name", getName(), 20)
        cookies.setCookie("age", getAge(), 20)
        cookies.setCookie("gender", getGender(), 20)
        cookies.setCookie("color", getColor(), 20)
        cookies.setCookie("count", 0, 20)
    }
    else
        alert("Please enter all fields to register")
})

