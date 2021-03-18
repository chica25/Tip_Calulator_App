function update(){
    let bill = Number(document.getElementById('your-bill').value);
    let tipPercent = document.getElementById('tip-input').value;
    let splitInput = document.getElementById('split-input').value;

    let tipAmount = bill * (tipPercent / 100);
    let tipByEachPerson = tipAmount / splitInput
    let newBillByEachPerson = (bill + tipAmount ) / splitInput
    
    document.getElementById('tip-percent').innerHTML = tipAmount + '%'
    document.getElementById('tip-value').innerHTML = tipAmount;
    document.getElementById('total-with-tip').innerHTML = bill + tipAmount;
    document.getElementById('split-value').innerHTML = splitInput
    document.getElementById('bill-each').innerHTML = newBillByEachPerson
    document.getElementById('tip-each').innerHTML = tipByEachPerson
} 

let containter = document.getElementById('container')
container.addEventListener('input', update);