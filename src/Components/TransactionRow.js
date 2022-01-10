import { css } from "@emotion/css";
import { message } from "antd";

export const TransantionRow = (props) => {
  const { tx, onDeleteItem } = props;
  return (
    <div
      className={css`
        display: flex;
        background-color: white;
        width: 100%;
        //height: 40px;
        margin-top: 24px;
        padding: 16px;
        border-radius: 8px;
        align-items: center;
        h2,
        h4 {
          margin: 0;
          padding: 0;
        }
      `}
    >
      <div
        className={css`
          flex-shrink: 0;
        `}
      >
        <h2>
          {" "}
          {tx.category} {tx.id}
        </h2>
        <h4> {tx.date} </h4>
      </div>
      <div
        className={css`
          display: flex;
          width: 100%;
          justify-content: flex-end;
          color: ${tx.amount > 0 ? "green" : "red"};
        `}
      >
        {tx.amount.toLocaleString()}
      </div>
      <div
        className={css`
          margin-left: 16px;
        `}
      >
        <div
          className={css`
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
            background-color: grey;
          `}
          onClick={() => {
            onDeleteItem(tx.id);
            message.success("Deleter Item :" + tx.id + "success");
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};
