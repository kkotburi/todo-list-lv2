import React from "react";
import { styled } from "styled-components";

const StTodo = styled.div`
  border: 4px solid #badec0;
  margin: 10px;
  padding: 10px;
`;

export default function TodoList({ todolist, setTodoList, listIsDone }) {
  //   const workingList = todolist.filter((todo) => {
  //     return todo.isDone === false;
  //   });
  //   const doneList = todolist.filter((todo) => {
  //     return todo.isDone === true;
  //   });

  return (
    <>
      <div>
        <h3>{listIsDone ? "Done" : "Working"}</h3>
        {todolist
          .filter((todo) => todo.isDone === listIsDone)
          .map((todo) => {
            return (
              <StTodo key={todo.id}>
                <p>{todo.id}</p>
                <h4>{todo.title}</h4>
                <p>{todo.content}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const deleteTodoList = todolist.filter((item) => {
                      return item.id !== todo.id;
                    });
                    setTodoList(deleteTodoList);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    const newTodoList = todolist.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodoList(newTodoList);
                  }}
                >
                  {listIsDone ? "cancle" : "done"}
                </button>
              </StTodo>
            );
          })}
      </div>
    </>
  );
}
