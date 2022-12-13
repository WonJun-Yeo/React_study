import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {
  //
  const handleOnSaveExpenseData = (enteredExpenseData) => {
    //
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};
    onAddExpense(expenseData);
  };



  const [isEditing, setIsEditing] = useState(false);

  const handleOnClickButton = () => {
    setIsEditing(!isEditing);
  }

  let changableComponent = <button onClick={handleOnClickButton}>Add New Expense</button>
  //
  if (isEditing) {
    changableComponent = <ExpenseForm onSaveExpenseData={handleOnSaveExpenseData} onClickButton={handleOnClickButton} />;
  }

  return (
    <div className={'new-expense'}>
      {changableComponent}
      {/*<ExpenseForm onSaveExpenseData={handleOnSaveExpenseData} />*/}
    </div>
  );
};

export default NewExpense;