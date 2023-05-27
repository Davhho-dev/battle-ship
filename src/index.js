import { renderGrid, gridSelector} from "./grid";

const gameboard = document.querySelector(".gameboard");

renderGrid(gameboard);

const length = 4;
const direction = "vert";

const grid = document.querySelectorAll("[class*=sq");
grid.forEach(sq => {
    sq.addEventListener("mouseenter", (e) => {
        let className = e.target.className;
        let index; 
        className.length === 6 ? index = className.substring(className.length - 2) : index = className.charAt(className.length - 1);
        gridSelector(e.target, length, index, "in", direction);
        
    })
    sq.addEventListener("mouseleave", (e) => {
        let className = e.target.className;
        let index;
        className.length === 6 ? index = className.substring(className.length - 2) : index = className.charAt(className.length - 1);
        gridSelector(e.target, length, index, "out", direction);
    })
})

