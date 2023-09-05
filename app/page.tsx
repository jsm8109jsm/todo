"use client";

import TodoItem from "@/components/TodoItem";
import { logListState } from "@/context/logList";
import { todoListState } from "@/context/todoList";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useRecoilState, RecoilRoot } from "recoil";

export default function Home() {
  const [logList, setLogList] = useRecoilState(logListState);

  const { register, handleSubmit, setValue, ...methods } = useForm();
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <main className="flex gap-8">
      <div>
        <h1>!!!!!!TODO LIST!!!!!!</h1>
        <TodoItem ref={ref} />
      </div>
      <div>
        <h1>!!!!!!LOG!!!!!!</h1>
        <div className="flex flex-col gap-4">
          {logList.map((item, index) => {
            return (
              <div key={index} className="rounded-xl border-black border-2 p-2">
                TODO LIST UPDATED
                <br />
                <span>{item.date}</span>
                <details>
                  <summary>View Data</summary>
                  {"["}
                  <br />
                  {item.list.map((item) => {
                    return (
                      <>
                        &nbsp; &nbsp; {"{"}
                        <br />
                        <p>
                          &nbsp; &nbsp; &nbsp; &nbsp;content: {item.content}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp;checked:{" "}
                          {item.checked ? "true" : "false"}
                        </p>
                        &nbsp; &nbsp; {"},"}
                      </>
                    );
                  })}
                  <br />
                  {"]"}
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
