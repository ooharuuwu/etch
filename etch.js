
const container = document.querySelector("#container")

const btn = document.createElement("button")
btn.textContent = "Number of squares"
document.body.appendChild(btn)

for (let i=0; i<16; i++)
{
    for( let j=0 ;j<16; j++)
    {
        const content = document.createElement("div")
        content.classList.add("square")
        container.appendChild(content)
    }
}

btn.addEventListener("click", ()=>{
    const squares = prompt("Enter the new squares : ")
    container.innerHTML = ""

    const gridSize = 960;
    container.style.width = gridSize + "px";
    container.style.height = gridSize + "px";
    const squareSize = gridSize / squares;
    
    for (let i=0; i<squares; i++)
        {
            for( let j=0 ;j<squares; j++)
            {
                const content = document.createElement("div")
                content.classList.add("square")
                content.style.width = squareSize + "px";
                content.style.height = squareSize + "px";
                
                content.addEventListener("mouseenter", ()=>{
                    const r = Math.floor(Math.random() * 256)
                    const g = Math.floor(Math.random() * 256)
                    const b = Math.floor(Math.random() * 256)
                    content.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
                });    
                
                content.addEventListener("mouseleave", () => {
                    content.style.backgroundColor = ""; 
                });
                
                container.appendChild(content)
            }
        }
    
})
