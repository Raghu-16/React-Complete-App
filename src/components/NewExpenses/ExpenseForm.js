import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount ,setEnteredAmount] = useState('');
    const[enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    
    const amountChangeHandler = (event) =>{    
        setEnteredAmount(event.target.value);
    };

    
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault(); // Inbuilt JavaScript Function 
    

    //creating an object
    const expenseData ={
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
     };
     props.onSaveExpenseData(expenseData);
     setEnteredTitle('');
     setEnteredDate('');
     setEnteredAmount('');

    };
    return(
        <form onSubmit ={submitHandler}>
        <div className = 'new-expense__control'>
        <div className = 'new-expense__control'>
         <label>Title</label>
         <input 
          text = 'title' 
            value={enteredTitle}
             onChange ={titleChangeHandler}/>
        </div>

        <div className = 'new-expense__control'>
         <label>Amount</label>
         <input 
          text = 'number'
           min ='0.01'
            step ='0.01' 
            value={enteredAmount}  
             onChange={amountChangeHandler}/>
        </div>

        <div className = 'new-expense__control'>
         <label>Date</label>
         <input  type= 'date' 
           min = "2019-01-01" 
             max= "2022-12-31"
              value={enteredDate} 
                onChange={dateChangeHandler}/>
        </div>
        </div>  
        <div className = 'new-expense__actions'>
            <button type="button" onClick ={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button> 
        </div>
        </form>
    )
};

export default ExpenseForm;