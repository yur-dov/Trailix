import s from "./Library.module.css";
import EmptyLibrary from "./EmptyLibrary/EmptyLibrary";
import { useState } from "react";

export default function Library() {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className={s.Library}>
      {isEmpty ? <EmptyLibrary /> : <h2>Your Library</h2>}
    </div>
  );
}
