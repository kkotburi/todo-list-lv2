import React, { useState } from "react";
import { styled } from "styled-components";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const StBody = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
`;

function App() {
  const [todolist, setTodoList] = useState([
    {
      id: uuid(),
      title: "title",
      content: "content",
      isDone: false,
    },
    {
      id: uuid(),
      title: "title",
      content: "content",
      isDone: true,
    },
    {
      id: uuid(),
      title: "title",
      content: "content",
      isDone: false,
    },
  ]);

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

export default App;
