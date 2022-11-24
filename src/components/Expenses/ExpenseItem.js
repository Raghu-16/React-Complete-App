import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  
 /*const[title, setTitle] = useState(props.title);*/

   //let title = props.title;
   /* const ClickHandler = () =>{
       setTitle('Updated');
      console.log(title);
    }*/
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
    return (
      <li>
        <Card className='expense-item'>
        <ExpenseDate date ={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      </Card>
      </li>
  );
}

export default ExpenseItem;
