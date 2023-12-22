import { type ReactElement } from "react";
import css from "./Header.module.css";

export function Header(): ReactElement {
  return (
    <header className={css.header}>
      <p>discover amazing properties and start earning</p>
      <h1>marketplace</h1>
    </header>
  );
}
