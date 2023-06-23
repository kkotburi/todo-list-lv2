import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  const params = useParams();

  const initialTodo = useSelector((state) => {
    return state.initialTodo;
  });

  const foundTodo = initialTodo.find((todo) => {
    return todo.id === params.id;
  });

  console.log("foundTodo: ", foundTodo);

  return (
    <>
      <div>Detail</div>
      <p>{foundTodo.id}</p>
      <h3>{foundTodo.title}</h3>
      <p>{foundTodo.content}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        previous
      </button>
    </>
  );
}

export default Detail;
