import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';


const Expenses = (props) =>{
  const[filteredYear, setFilteredYear] = useState('2020');
   const filterChangeHandler = (selectedYear)=>{
   // console.log('Expenses.js');
    setFilteredYear(selectedYear);
   }
    return(
        <div>
        <Card className='expenses'>
        <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}/>
        {props.items.map( (expense) => 
        (<ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
         date={expense.date}
         />
         ))}
        </Card>
        </div>
       
    );
}

export default Expenses;