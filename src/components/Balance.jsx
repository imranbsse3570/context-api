import React from "react";
import { GlobalContext } from "../App";

const Balance = () => {
  const { transactions } = React.useContext(GlobalContext);

  const income = transactions
    .map((transaction) => (transaction.isIncome ? transaction.amount : 0))
    .reduce((total, amount) => total + amount, 0)
    .toFixed(2);

  const expense = transactions
    .map((transaction) => (!transaction.isIncome ? transaction.amount : 0))
    .reduce((total, amount) => total + amount, 0)
    .toFixed(2);

  const balance = income - expense;

  return (
    <div>
      <h3>Your Balance - {balance} </h3>
      <h4>Income - {income} </h4>
      <h4>Expenses - {expense} </h4>
    </div>
  );
};

export default Balance;
