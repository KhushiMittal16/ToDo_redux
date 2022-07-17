import React, { useState } from "react";
import "../CSS/Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addElement, delElement, RemoveList } from "../actions";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todoApp">
        <div className="headingTodo">Todo List App</div>
        <div className="add_todos">
          <input
            type="text"
            className="inputBox"
            placeholder="Enter your task here..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />{" "}
          {/* <div>{inputVal}</div> */}
          <i
            className="fa-solid fa-plus"
            onClick={() => dispatch(addElement(inputVal), setInputVal(""))}
          ></i>
        </div>
        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <h4 className="listItems">{elem.data}</h4>
                <i
                  class="fa-solid fa-trash"
                  onClick={() =>
                    dispatch(delElement(elem.id))
                  }
                ></i>
              </div>
            );
          })}
        
        </div>
        <div className="remove">
          <button className="removeBtn" onClick={()=>dispatch(RemoveList())}>Delete List</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
