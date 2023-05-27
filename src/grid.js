const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function renderGrid(el) {
    const gameboard = el;
    for(let col = 0; col < 10; col++) {
        const test = document.createElement("div");
        test.className = `${letter[col]}`;
        gameboard.appendChild(test);
        for(let row = 1; row <= 10; row++) {
            const square = document.createElement("div");
            square.className = `sq-${letter[col]}${row}`;
            square.textContent = `${letter[col]}${row}`;
            test.appendChild(square);
        };
    };
};

function gridSelector(el, length, index, event, dir) {
    let parent = el.parentNode;
    let firstChild = parent.childNodes[index - 1];
    if(gridExist(el, length, dir)) {
        for(let i = 0; i < length; i++) {
            event === "in" ? firstChild.style.backgroundColor = "white" : firstChild.style.backgroundColor = "black"
            if(dir === "hori") {
                parent = parent.nextElementSibling;
                if(i !== length - 1) firstChild = parent.childNodes[index - 1];
            }else {
                firstChild = firstChild.nextElementSibling;
            }
        }
    }

}

function gridExist(el, length, dir) {
    let node;
    dir === "hori" ? node = el.parentNode : node = el;
    for(let i = 1; i < length; i++) {
        if(node.nextElementSibling === null) return false;
        else node = node.nextElementSibling;
    }
    return true;
}

export {renderGrid, gridSelector};