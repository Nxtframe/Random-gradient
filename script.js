var prepchbutton = document.querySelector("#chbutton");
let change = () => {
    document.body.style.backgroundImage = "linear-gradient(" + "to right"+","+rando() + " , " + rando() + ")";
};
prepchbutton.addEventListener("click",change);

let rando = () => {
    return "rgb(" + Math.floor(Math.random() * 254) + ", "+ Math.floor(Math.random() * 254) + ", "+Math.floor(Math.random() * 254) + ")"
};
console.log("linear-gradient(" + "to right"+" " + rando() + " , " + rando() + ")")
;