import React, { createContext, useReducer } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import TransactionHistory from "./components/TransactionHistory";

const initialState = {
  transactions: [],
};
export const GlobalContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { transactions: [action.payload, ...state.transactions] };

    case "delete":
      console.log("delete", action.payload);
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "add",
      payload: transaction,
    });
  };

  const deleteTransaction = (transactionId) => {
    dispatch({
      type: "delete",
      payload: transactionId,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      <Balance />
      <TransactionHistory />
      <AddTransaction />
    </GlobalContext.Provider>
  );
}

export default App;
