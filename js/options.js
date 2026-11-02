/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
// console.log("aasas1")
const opt = document.getElementById("optionsHeader")
const optSides = document.getElementsByClassName("sides")
// optSides[0].classList.toggle("hidden")
opt.addEventListener("click", toggleHide)
// console.log("aasas2")
function toggleHide(){
    optSides[0].classList.toggle("hidden")
}
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
const outs = document.getElementsByClassName("output")
const fills = document.getElementsByClassName("fill")
console.log("asd")
// console.log(player)
for(i=0;i<fills.length;i++){
    // console.log("asdddd")
    // console.log(player[i].fill)
    fills[i].value = player[i].fill
    fills[i].addEventListener("input", function(e){
        let t = e.target.nextElementSibling
        t.innerHTML = e.target.value
        console.log(e.target.parentElement.classList[1])
        ind = e.target.parentElement.classList[1]
        player[ind].fill = e.target.value
        player[ind].pad.fill = player[ind].fill
        // console.log(player)
    })
}
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
const u = document.getElementsByClassName("u")
const d = document.getElementsByClassName("d")
const s = document.getElementsByClassName("s")
for(i=0;i<u.length;i++){
    console.log(player)
    u[i].value = player[i].keys["u"]
    u[i].nextElementSibling.innerHTML = u[i].value
    u[i].addEventListener("input", function(e){
        let t = e.target.nextElementSibling
        t.innerHTML = e.target.value
        console.log(e.target.parentElement.classList[1])
        ind = e.target.parentElement.classList[1]
        player[ind].keys["u"] = e.target.value
        // player[ind].pad.fill = player[ind].fill
        console.log(player[i].keys, t, ind)
    })
}
for(i=0;i<d.length;i++){
    console.log(player)
    d[i].value = player[i].keys["d"]
    d[i].nextElementSibling.innerHTML = d[i].value
    d[i].addEventListener("input", function(e){
        let t = e.target.nextElementSibling
        t.innerHTML = e.target.value
        console.log(e.target.parentElement.classList[1])
        ind = e.target.parentElement.classList[1]
        player[ind].keys["d"] = e.target.value
        // player[ind].pad.fill = player[ind].fill
        console.log(player[i].keys, t, ind)
    })
}
for(i=0;i<s.length;i++){
    console.log(player)
    s[i].value = player[i].keys["s"]
    s[i].nextElementSibling.innerHTML = s[i].value
    s[i].addEventListener("input", function(e){
        let t = e.target.nextElementSibling
        t.innerHTML = e.target.value
        console.log(e.target.parentElement.classList[1])
        ind = e.target.parentElement.classList[1]
        player[ind].keys["s"] = e.target.value
        // player[ind].pad.fill = player[ind].fill
        console.log(player[i].keys, t, ind)
    })
}