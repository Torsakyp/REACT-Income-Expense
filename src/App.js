import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Input, Select, DatePicker } from "antd";
import { TransantionRow } from "./Components/TransactionRow";

const mockData = [
  {
    id: "1",
    type: "expense",
    category: "Shopping",
    amount: -300,
    date: "1 Jan 2021",
  },
  {
    id: "2",
    type: "income",
    category: "Salary",
    amount: 15000,
    date: "1 Jan 2021",
  },
];

function App() {
  const [createModalVisible, setcreateModalVisible] = useState(false);
  const [transactions, setTransactions] = useState(mockData);
  const [category, setCategory] = useState("Shopping");
  const [date, setDate] = useState();
  const [amount, setAmount] = useState(0);
  const [search, setSearch] = useState("");

  const onDeleteItem = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const filteredTransaction = transactions.filter((tx) =>
    tx.category.includes(search)
  );

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        background-color: violet;
        padding-top: 32px;
      `}
    >
      <div
        className={css`
          width: 80%;
          margin: auto;
          max-width: 500px;
        `}
      >
        <div
          className={css`
            display: flex;
          `}
        >
          <Input
            placeholder="Search by text"
            onChange={(e) => {
              console.log(e);
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setcreateModalVisible(true);
            }}
          >
            {" "}
            Create{" "}
          </button>
        </div>
        {filteredTransaction.map((tx) => (
          <TransantionRow tx={tx} onDeleteItem={onDeleteItem} />
        ))}
      </div>
      <Modal
        title="Basic Modal"
        visible={createModalVisible}
        onOk={() => {
          const incomeCategory = ["Saraly"];
          const type = incomeCategory.includes(category)
            ? "income"
            : "shopping";
          const newTx = {
            id: transactions.length + 1,
            type,
            category,
            date,
            amount,
          };
          setTransactions([...transactions, newTx]);
          setcreateModalVisible(false);
        }}
        onCancel={() => {
          setcreateModalVisible(false);
        }}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            height: 150px;
            justify-content: space-between;
          `}
        >
          <Select
            placeholder="Select your category"
            onChange={(e) => {
              setCategory(e);
            }}
          >
            <Select.Option value="Shopping"> Shopping </Select.Option>
            <Select.Option value="Salary"> Salary </Select.Option>
          </Select>
          <DatePicker
            onChange={(e) => {
              setDate(e.format("DD MMM YYYY"));
            }}
          />
          <Input
            placeholder="Input Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default App;
