"use client";

import { logListState } from "@/context/logList";
import { todoListState } from "@/context/todoList";
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

const TodoItem = (ref: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [logList, setLogList] = useRecoilState(logListState);
  const addTodo = (data: string) => {
    setTodoList((prev) => [...prev, { content: data, checked: false }]);
  };
  const { register, handleSubmit, setValue } = useForm();
  const isMounted = useRef(false);
  console.log(logList);

  useEffect(() => {
    // if (isMounted.current) {
    const date = new Date();
    setLogList((prev) => [
      ...prev,
      { date: date.toLocaleString(), list: todoList },
    ]);
    // } else {
    //   isMounted.current = true;
    // }
  }, [todoList]);

  const deleteTodo = (index: number) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col w-72">
      {todoList.map((item, index) => {
        return (
          <div className="flex justify-between" key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              // ref={ref}
              onChange={(e) => {
                const updatedTodoList = [...todoList];
                updatedTodoList[index].checked =
                  !updatedTodoList[index].checked;
                setTodoList(updatedTodoList);
              }}
            />
            {item.content}
            <div className="flex gap-2">
              <button onClick={() => deleteTodo(index)}>X</button>
            </div>
          </div>
        );
      })}
      <form
        className="flex flex-col"
        onSubmit={handleSubmit((data) => {
          addTodo(data.todo);
          setValue("todo", "");
        })}
      >
        <input {...register("todo")} className="border-solid border-2 w-full" />
        <button type="submit" className="">
          +
        </button>
      </form>
    </div>
  );
};
export default forwardRef(TodoItem);
