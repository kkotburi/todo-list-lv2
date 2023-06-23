import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const StBody = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
`;

function Home() {
  // 여기에서 store에 접근하여, counter의 값을 읽어오려 할 때
  // useSelector
  const initialTodo = useSelector((state) => {
    return state.initialTodo;
  });

  const [todolist, setTodoList] = useState(initialTodo);

  return (
    <>
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

export default Home;
