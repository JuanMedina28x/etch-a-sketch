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
event.target.style.backgroundColor="black";
})
divContainer.appendChild(newNode)
}

//NEW FEATURE (RESTART BUTTON)
restartButton.addEventListener("click", function(){
divContainer.innerHTML="";
const question = Number(window.prompt("Please confirm the number of squares per side."))

divGrid.style.flexBasis = `calc(100% / ${question})` 

for(let i=0; i<question*question; i++){
    const newNode = divGrid.cloneNode(true)
    newNode.addEventListener('mouseover', function (event){
    event.target.style.backgroundColor="black";
    })
    divContainer.appendChild(newNode)
    }

})



//divGrid.addEventListener("click", changeColor())