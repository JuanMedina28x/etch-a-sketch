const divContainer = document.querySelector("#div-container");
const restartButton = document.querySelector(".btn")

const divGrid = document.createElement("div");
divGrid.setAttribute('class', 'divGrid')
//divGrid.style.border='2px solid black';
//divGrid.style.margin="5px"
//divGrid.style.padding="5px"
//divGrid.style.height="5px"
//divGrid.style.width="5px"


function changeColor (event) {
event.target.style.backgroundColor="blue"
}


for(let i=0; i<64*64; i++){
const newNode = divGrid.cloneNode(true)
newNode.addEventListener('mouseover', function (event){
//NEW FEATURE(RANDOM COLOR ON HOVER)
const hexArr=["1","2","3","4","5","6","7","8","9","a","b","c","d", "e","f"]
let hexColor = "#"
for(let i=0; i<6; i++){
let randomIndex = Math.floor(Math.random() * hexArr.length)
hexColor = hexColor + randomIndex;
}

event.target.style.backgroundColor=hexColor;
},{once: true})
divContainer.appendChild(newNode)
}

//NEW FEATURE (RESTART BUTTON)
restartButton.addEventListener("click", function(){
const question = Number(window.prompt("Please confirm the number of squares per side."))

if (question < 100){
divContainer.innerHTML="";
divGrid.style.flexBasis = `calc(100% / ${question})` 
for(let i=0; i<question*question; i++){
    const newNode = divGrid.cloneNode(true)
    newNode.addEventListener('mouseover', function (event){
        const hexArr=["1","2","3","4","5","6","7","8","9","a","b","c","d", "e","f"]
        let hexColor = "#"
        for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random() * hexArr.length)
        hexColor = hexColor + randomIndex;
        }
        
        event.target.style.backgroundColor=hexColor;
    }, {once:true})
    divContainer.appendChild(newNode)
    }
} else {alert("Can't be higher than 100!")}

}
)



//divGrid.addEventListener("click", changeColor())