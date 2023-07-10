import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (title.trim() === "" || content.trim() === "") {
          alert("Please enter a title and content.");
          return false;
        }

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: uuid(),
            title,
            content,
            isDone: false,
          },
        });

        setTitle("");
        setContent("");
      }}
    >
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label>내용</label>
      <input
        type="text"
        name="content"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
