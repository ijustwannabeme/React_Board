import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
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
