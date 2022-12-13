import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = ({
                       onSaveExpenseData,
                       onClickButton
                     }) => {
  //
  const [enteredValue, setEnteredValue] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = (event) => {
    //
    const targetName = event.target.name;

    if (targetName === 'title') {
      setEnteredValue((prevState) => {
        return {...prevState, title: event.target.value}
      });
    } else if (targetName === 'amount') {
      setEnteredValue((prevState) => {
        return {...prevState, amount: event.target.value}
      });
    } else {
      setEnteredValue((prevState) => {
        return {...prevState, date: event.target.value}
      });
    }
  };

  const submitHandler = (event) => {
    //
    event.preventDefault();

    // 상위 컴포넌트로 하위 컴포넌트의 data 를 전달
    const expenseData = {...enteredValue, date: new Date(enteredValue.date)};
    onSaveExpenseData(expenseData);

    // init
    setEnteredValue({title: '', amount: '', date: ''});
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={'new-expense__controls'}>
        <div className={'new-expense__control'}>
          <label>Title</label>
          <input type={'text'} value={enteredValue.title} onChange={inputChangeHandler} name={'title'}/>
        </div>
        <div className={'new-expense__control'}>
          <label>Amount</label>
          <input type={'number'} min={'0.01'} step={'0.01'} value={enteredValue.amount} onChange={inputChangeHandler}
                 name={'amount'}/>
        </div>
        <div className={'new-expense__control'}>
          <label>Date</label>
          <input type={'date'} min={'2019-01-01'} max={'2022-12-31'} value={enteredValue.date}
                 onChange={inputChangeHandler} name={'date'}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type={"button"} onClick={onClickButton}>Cancel</button>
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;