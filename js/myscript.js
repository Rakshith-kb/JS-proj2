const rootHandle = document.getElementById('root');
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.getElementById('hex-value')
const btnTag = document.getElementById('myBtn')
const bodyTag = document.querySelector('body')

// colorlength = 16
btnTag.addEventListener('click', function() {
    let hex = "#"
    for(let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * color.length)
        hex += color[index]
    }
    value.textContent = hex
    bodyTag.style.backgroundColor = hex
})
