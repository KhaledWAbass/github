// selectors
let input = document.querySelector(".get input")
let button = document.querySelector(".get .getBut")
let show = document.querySelector(".show")
button.onclick = function () {
    getRepos()
}
function getRepos() { 
    if (input.value === "") {
        show.innerHTML = `<span>Please write Your Github Username</span>`
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`).then(then => {
            return then.json()
        }).then(x => {
            show.innerHTML = ""
            x.forEach(element => {
                elements(element)
            });
        })
    }
}
// KhaledWAbass
function elements(data) {
    // create
    let div = document.createElement("div")
    let s = document.createElement("div")
    let stars = document.createElement("span")
    let vist = document.createElement("a")
    // classes
    vist.setAttribute("target",`_blank`)
    div.classList.add("repo")
    s.classList.add("dad")
    stars.classList.add("star")
    vist.classList.add("vist")
    //href
    vist.href = `https://github.com/${input.value}/${data.name}`  
    // value
    stars.innerHTML = `stars: ${data.stargazers_count}`
    vist.innerHTML = "visit" 
    div.innerHTML = data.name
    // append
    s.append(vist)
    s.append(stars)
    div.append(s)
    show.append(div)
 }