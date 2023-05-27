const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function renderGrid() {
    const gameboard = document.querySelector(".gameboard");
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

export {renderGrid};