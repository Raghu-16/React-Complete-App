import React from 'react';
import './NewExpense.css';
import  ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {
    const savedExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return (<div className = 'new-expense'>
    <ExpenseForm onSaveExpenseData = { savedExpenseDataHandler} />
    </div>
    );
};


export default NewExpenses;