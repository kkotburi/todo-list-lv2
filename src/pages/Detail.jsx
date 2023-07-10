import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const todoList = useSelector((state) => {
    return state.todoList;
  });

  // const todo = todoList.filter((todo) => todo.id === id)[0];
  const todo = todoList.find((todo) => todo.id === id);

  return (
    <>
      <div>Detail</div>
      <p>{todo.id}</p>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        previous
      </button>
    </>
  );
};

export default Detail;
