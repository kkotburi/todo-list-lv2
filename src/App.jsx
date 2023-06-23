import React, { useState } from "react";
import { styled } from "styled-components";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { plusOne, minusOne } from "./redux/modules/counter";

const StBody = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
`;

function App() {
  // 여기에서 store에 접근하여, counter의 값을 읽어오려 할 때
  // useSelector
  const initialTodo = useSelector((state) => {
    return state.initialTodo;
  });

  // counter
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  //counter

  const [todolist, setTodoList] = useState(initialTodo);

  return (
    <>
      {/* counter */}
      <div>count: {counter.number}</div>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
      {/* counter */}
      <StBody color="#cbf8e8">header</StBody>
      <StBody color="#e4e6f5">
        <Input todolist={todolist} setTodoList={setTodoList} />
        <TodoList
          todolist={todolist}
          setTodoList={setTodoList}
          listIsDone={false}
        />
        <TodoList
          todolist={todolist}
          setTodoList={setTodoList}
          listIsDone={true}
        />
      </StBody>
    </>
  );
}

export default App;
