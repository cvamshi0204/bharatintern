let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

function addExpense(category, amount, date) {
    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = { category, amount, date };
    expenses.push(expense);

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;
}

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (!validateInput(category, amount, date)) {
        return;
    }

    addExpense(category, amount, date);
});

function validateInput(category, amount, date) {
    if (category === '') {
        alert('Please select a category');
        return false;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return false;
    }
    if (date === '') {
        alert('Please select a date');
        return false;
    }
    return true;
}

// If you have some initial expenses, you can add them like this:
// addExpense('Food & Beverage', 30, '2023-01-15');
// addExpense('Rent', 1200, '2023-01-10');
// addExpense('Transport', 50, '2023-01-05');
// addExpense('Relaxing', 20, '2023-01-02');
