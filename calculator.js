function formatAmount(value) {
    value = Math.ceil(value * 100) / 100;
    
    value = value.toFixed(2)
    return "$ " + value;
} 

function splitAmountPerPerson(value){
    if(value === "1") return value + " person";
    return value + " people";
}

function update(){
    let bill = Number(document.getElementById('your-bill').value);
    let tipPercent = document.getElementById('tip-input').value;
    let splitInput = document.getElementById('split-input').value;

    let tipAmount = bill * (tipPercent / 100);
    let tipByEachPerson = tipAmount / splitInput
    let newBillByEachPerson = (bill + tipAmount ) / splitInput
    
    document.getElementById('tip-percent').innerHTML = tipAmount + '%'
    document.getElementById('tip-value').innerHTML = formatAmount(tipAmount);
    document.getElementById('total-with-tip').innerHTML = formatAmount(bill + tipAmount);
    
    
    document.getElementById('split-value').innerHTML = splitInput
    document.getElementById('bill-each').innerHTML = formatAmount(newBillByEachPerson)
    document.getElementById('tip-each').innerHTML = formatAmount(tipByEachPerson);
} 

let containter = document.getElementById('container')
container.addEventListener('input', update);