import { Link, useLocation } from "react-router-dom";

import s from "./Header.module.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={s.header}>
      <p className={s.logo}>
        Trail<span>ix</span>
      </p>
      <nav>
        <ul className={s.navList}>
          <li>
            <Link to="/" className={pathname === "/" ? s.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className={pathname === "/library" ? s.active : ""}
            >
              Библиотека
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={pathname === "/favorites" ? s.active : ""}
            >
              Избранное
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
