import React from "react";

const TodoInput = ({
  inputText,
  onChange,
  onInsert
}) => {
  return (
      <div>
          <input value={inputText} onChange = {onChange}></input>
          <button onClick={onInsert}>추가</button>
      </div>
  );
};

export default TodoInput;