"use client";
import React from "react";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
//TEST PAGE
export default function Counter(): JSX.Element {
  const { value } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
