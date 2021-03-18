function update(){
    let bill = document.getElementById('your-bill').value
    let tipPercent = document.getElementById('tip-input').value;
    let splitInput = document.getElementById('split-input').value
    console.log(bill, tipPercent, splitInput)
} 

let containter = document.getElementById('container')
container.addEventListener('input', update);