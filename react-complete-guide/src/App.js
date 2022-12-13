import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {

  const DUMMY_EXPENSES = [
    {title: 'Car Insurance', amount: 294.48, date: new Date(2022, 2, 29)},
    {title: 'Some Notes', amount: 100.48, date: new Date(2020, 1, 10)},
    {title: 'Keyboard', amount: 400.48, date: new Date(2021, 9, 23)},
    {title: 'Some Closet', amount: 600.48, date: new Date(2021, 2, 20)},
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleOnAddExpense = expense => {
    //
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={handleOnAddExpense} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
