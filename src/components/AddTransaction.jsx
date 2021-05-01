import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../App";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(true);

  const { addTransaction } = useContext(GlobalContext);

  const formOnSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: uuidv4(32),
      description,
      amount: parseFloat(amount),
      isIncome,
    };

    addTransaction(transaction);
    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={(e) => formOnSubmit(e)}>
        <div>
          <label htmlFor="addDescription">Description</label>
          <br />
          <input
            type="text"
            name="description"
            id="addDescription"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label htmlFor="addAmount">Amount</label>
          <br />
          <input
            type="number"
            name="amount"
            id="addAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <h4>Transaction Type</h4>
        <hr />
        <div>
          <label htmlFor="income">Income</label>
          <input
            onChange={() => setIsIncome(true)}
            type="radio"
            id="income"
            name="transactionType"
            value="Income"
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="female">Expense</label>
          <input
            onChange={() => setIsIncome(false)}
            type="radio"
            id="expense"
            name="transactionType"
            value="Expense"
          />
        </div>
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
};

export default AddTransaction;
