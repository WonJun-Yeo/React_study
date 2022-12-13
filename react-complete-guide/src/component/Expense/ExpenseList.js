import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = ({items}) => {
  if (items.length === 0) {
    return <h2 className={'expenses-list__fallback'}>Found no expenses.</h2>
  }

  return (
    <ul className={'expenses-list'}>
      {
        items.map((item) => <ExpenseItem title={item.title}
                                         amount={item.amount}
                                         date={item.date} key={item.id}/>)
      }
    </ul>
  )
    ;
};

export default ExpenseList;