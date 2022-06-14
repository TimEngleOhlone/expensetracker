const expenseForm = document.querySelector('#expenseForm');
const expenseTable = document.querySelector('#expenseTable');
const expenseItem = document.querySelector('.expenseItem')


expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = this.elements.nameInput;
    const dateInput = this.elements.dateInput;
    const amountInput = this.elements.amountInput;
    if (nameInput.value.length === 0 || amountInput.value.length === 0 || dateInput.value === ''){
        alert(`Please Fill Out All Fields ${dateInput.value}`)
        return
    }
    newItem(nameInput.value, dateInput.value, amountInput.value);
    const expensePlaceHolder = document.querySelector('#expensePlaceholder')
    expensePlaceHolder.remove()
    nameInput.value = ''
    dateInput.value = ''
    amountInput.value = ''

})

function newItem(name, date, amount) {
    // const expenseTable = document.querySelector('#expenseTable');
    // const expensePlaceHolder = document.querySelector('#expensePlaceholder')
    // expensePlaceHolder.innerText = ''
    const newRow = expenseTable.insertRow(-1);
    newRow.classList.add('expenseItem', 'has-background-light', 'has-text-left')
    const newNameCell = newRow.insertCell(0);
    const newDateCell = newRow.insertCell(1);
    const newAmountCell = newRow.insertCell(2);
    const dlt = document.createElement('button');
    dlt.innerText = 'X'
    dlt.classList.add('dltBtn', 'button', 'is-rounded', 'is-danger', 'is-small')
    const newDeleteCell = newRow.insertCell(3);
    
    newNameCell.innerText = name;
    newDateCell.innerText = date;
    newAmountCell.innerText = `$ ${amount}`;
    semibold(newNameCell, newDateCell, newAmountCell)
    newDeleteCell.append(dlt);
}

function semibold(name, date, amount) {
    name.classList.add('has-text-weight-semibold')
    date.classList.add('has-text-weight-semibold')
    amount.classList.add('has-text-weight-semibold')

}
expenseTable.addEventListener('click', function(e){
    // e.target.parentElement.remove()
    e.target.nodeName === 'BUTTON' && e.target.parentElement.parentElement.remove()
})



