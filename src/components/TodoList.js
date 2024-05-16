import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const posts = useTodoState();
  const dispatch = useTodoDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: "SET",
        todos: response.data.slice(0, 10),
      });
    };

    fetchPosts();
  }, []);
  return (
    <TodoListBlock>
      {posts.map((post) => (
        <TodoItem
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.body}
        />
        /* <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li> */
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
