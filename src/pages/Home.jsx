import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import Form from "../components/todolist/Form";
import List from "../components/todolist/List";

const Home = () => {
  return (
    <>
      <StBody color="#cbf8e8">Header</StBody>
      <StBody color="#e4e6f5">
        <Form />
        <List isDone={false} />
        <List isDone={true} />
      </StBody>
    </>
  );
};

export default Home;

export const StBody = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
`;
