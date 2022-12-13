import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({items}) => {
  //
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleOnChangeFilter = selectedYear => {
    //
    setFilteredYear(selectedYear);
  };

  //
  const filteredExpenses = items.filter(item => item.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className={'expenses'}>
        <ExpensesFilter selected={filteredYear} onChangeFilter={handleOnChangeFilter}/>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;