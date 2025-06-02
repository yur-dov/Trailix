// import s from "./Library.module.css";
// import { useState } from "react";
import EmptyLibrary from "./EmptyLibrary/EmptyLibrary";
import Container from "../../components/Container/Container";

export default function Library() {
  const isEmpty = true;
  // const [isEmpty, setIsEmpty] = useState(true);
  return (
    <Container>{isEmpty ? <EmptyLibrary /> : <h2>Your Library</h2>}</Container>
  );
}
