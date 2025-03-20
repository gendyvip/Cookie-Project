var cookies = {
    setCookie: function setCookie(cookieName, cookieValue, expiryAfter) {
        var date = new Date()
        date.setDate(date.getDate() + expiryAfter)
        document.cookie = `${cookieName}=${cookieValue};expires=${date};path=/pages/profile.html`
    },
    getCookie: function getCookie(cookieName) {
        var arr = []
        var cookieArr = document.cookie.split("; ")
        for (var i = 0; i < cookieArr.length; i++) {
            arr.push(cookieArr[i].split("="))
        }
        var cookieObj = Object.fromEntries(arr)
        if (cookieObj[cookieName])
            return cookieObj[cookieName]
    },
    deleteCookie: function deleteCookie(cookieName) {
        var date = new Date()
        date.setDate(date.getDate() - 5000)
        document.cookie = `${cookieName}=${this.getCookie(cookieName)};expires=${date}`
    },
    allCookieList: function allCookieList() {
        return document.cookie
    },
    hasCookie: function hasCookie(cookieName) {
        if (this.getCookie(cookieName))
            console.log(`${cookieName} cookie exists`)
        else
            console.log(`${cookieName} cookie not exists`)
    }
}

// cookies.setCookie("username", "mohamed", 20)
// cookies.setCookie("age","25",20)
// cookies.setCookie("color","red",20)
// cookies.setCookie("register","yes",20)
// console.log(cookies.getCookie("color"))
// cookies.deleteCookie("age")
// console.log(cookies.allCookieList())
// cookies.hasCookie("username")

