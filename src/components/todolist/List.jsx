import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { styled } from "styled-components";

const List = ({ setTodoList, isDone }) => {
  const todoList = useSelector((state) => {
    return state.todoList;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h3>{isDone ? "Done" : "Working"}</h3>
        {todoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <StTodo key={todo.id}>
                <Link to={`/${todo.id}`}>more</Link>
                <p>{todo.id}</p>
                <h4>{todo.title}</h4>
                <p>{todo.content}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  {isDone ? "cancle" : "done"}
                </button>
              </StTodo>
            );
          })}
      </div>
    </>
  );
};

export default List;

const StTodo = styled.div`
  border: 4px solid #badec0;
  margin: 10px;
  padding: 10px;
`;
