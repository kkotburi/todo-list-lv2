import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

export default function Input({ todolist, setTodoList }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // useEffect(() => {
  //   console.log("I'm useEffect.");
  // }, []);

  return (
    <div>
      <form
        onSubmit={(event) => {
          // onSubmit의 설정된 새로고침을 막는 함수
          event.preventDefault();

          if (title.trim() === "" || content.trim() === "") {
            alert("Please enter a title and content.");
            return;
          }

          const newTodo = {
            id: uuid(),
            title,
            content,
            isDone: false,
          };

          setTodoList([...todolist, newTodo]);
          setTitle("");
          setContent("");
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
