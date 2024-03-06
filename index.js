const button = document.querySelector('#click');
const colorName = document.querySelector('#color-name');

const colors = ['pink', 'yellow', 'palegreen', 'peachpuff', 'plum', 'powderblue', 'white', 'lightslategray', 'lightcoral', 'orange', 'lightsalmon']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// Version 1

// button.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[randomIndex];
//     colorName.innerText = ` ${colors[randomIndex]}`;
// })


//Version 2

button.addEventListener('click', () => {
    let hexColor = '#'
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        hexColor += hex[randomIndex];
    }
    document.body.style.backgroundColor = hexColor;
    colorName.innerText = ` ${hexColor}`
})