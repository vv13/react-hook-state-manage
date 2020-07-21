import React, { useState } from "react";
import produce from "immer";
import constate from "constate";

export interface Todo {
  name: string;
  status: TodoStatus;
}

export enum TodoStatus {
  TODO,
  DONE,
}

const useContext = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    setTodos(
      produce(todos, (draft) => {
        draft.push({
          name,
          status: TodoStatus.TODO,
        });
      })
    );
  };

  const deleteTodo = (index: number) => {
    setTodos(
      produce(todos, (draft) => {
        draft.splice(index, 1);
      })
    );
  };

  const toggleTodo = (index: number) => {
    setTodos(
      produce(todos, (draft) => {
        const status = draft[index].status;
        const nextStatus = {
          [TodoStatus.TODO]: TodoStatus.DONE,
          [TodoStatus.DONE]: TodoStatus.TODO,
        };
        draft[index].status = nextStatus[draft[index].status];
      })
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};

export const [TodoProvider, useTodoContext] = constate(useContext);
