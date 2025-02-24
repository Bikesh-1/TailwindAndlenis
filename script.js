const changing = ['coustomer','web','app','marketing','sale','behavioral','product'];
const div = document.querySelector("span")
let i = 0;


const looping = function(){
    div.innerHTML=changing[i];
    i = (i+1)%changing.length
}
setInterval(looping,2000)