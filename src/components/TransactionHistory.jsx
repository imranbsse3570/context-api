import React from "react";
import { GlobalContext } from "../App";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = React.useContext(GlobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul style={{ padding: 0, position: "relative" }}>
        {transactions.map((transaction, index) => (
          <li
            className={transaction.isIncome ? "green-color" : "red-color"}
            style={{
              position: "relative",
              width: "80%",
              padding: 20,
              border: "1px solid #ddd",
              marginLeft: 5,
              marginTop: 5,
            }}
            key={transaction.id}
          >
            <span>{transaction.description}</span>
            <span style={{ float: "right" }}>{transaction.amount}</span>
            <span
              onClick={() => deleteTransaction(transaction.id)}
              className="custom-x-button"
              style={{ background: "red", color: "white", padding: 5 }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
