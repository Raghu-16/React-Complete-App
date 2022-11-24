import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';


const Expenses = (props) =>{
  const[filteredYear, setFilteredYear] = useState('2020');
   const filterChangeHandler = (selectedYear)=>{
   // console.log('Expenses.js');
    setFilteredYear(selectedYear);
   }

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;

    });

    return(
        <div>
        <Card className='expenses'>
        <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList  items={filteredExpenses}/>
        </Card>
        </div>
       
    );
}

export default Expenses;