var counter = parseInt(cookies.getCookie("count"))
counter++
cookies.setCookie("count", counter)
if (cookies.getCookie("gender") == "male") {
    document.writeln(`<img id="maleImg" src="../images/1.jpg" alt="male" width="100">`)
    document.writeln(`Welcome <span style="color:${cookies.getCookie("color")}">${cookies.getCookie("name")}</span>, you have visited this site <span style="color:${cookies.getCookie("color")}">${counter}</span> times :)`)
}
else {
    document.writeln(`<img id="femaleImg" src="../images/2.jpg" alt="female" width="200">`)
    document.writeln(`Welcome <span style="color:${cookies.getCookie("color")}">${cookies.getCookie("name")}</span>, you have visited this site <span style="color:${cookies.getCookie("color")}">${counter}</span> times :)`)
}
