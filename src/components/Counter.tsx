import { useState } from "react";

interface Props {
  testsToDo: number;
}

export default function Counter({ testsToDo }: Props) {
  return <h1>{testsToDo}</h1>;
}
