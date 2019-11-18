let grid;

function createGrid(size = 16){
    const area = size * size;
    const container = document.querySelector('div.container');
    let innerDivs = "";
    
    for(i = 1; i <= area; i++){
        innerDivs += "<div></div>";
    }

    container.innerHTML = innerDivs;

    grid = document.querySelectorAll('div.container > div');
    grid.forEach((div) => {
        div.style.width = `${100 / size}%`;
        div.style.height = `${100 / size}%`;
        div.addEventListener('mouseover', (e) => {
           
        })
    });
}

createGrid();

const random = document.querySelector('button.random');
random.addEventListener('click', () => {
    let newSize = prompt("Enter the number of squers you want for random colors game");
    createGrid(newSize);

    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    grid.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = colors[Math.floor(Math.random() * 7)];
        })
    });
});