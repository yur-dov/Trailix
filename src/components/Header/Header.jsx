import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import NavMenuMob from "./MenuNavMob/NavMenuMob";
import ModalMenu from "./MenuBurger/ModalMenu";

import { GiHamburgerMenu } from "react-icons/gi";

import s from "./Header.module.css";

export default function Header() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <header className={s.header}>
      <p className={s.logo}>
        TRAIL<span>IX</span>
      </p>

      <button className={s.menuBtn} onClick={toggleModal}>
        <GiHamburgerMenu className={s.menuBtnIcon} />
      </button>

      <nav className={s.navWrapper}>
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

      {modalOpen && (
        <ModalMenu showModal={modalOpen} onCloseModal={toggleModal} />
      )}
      {isMobile && <NavMenuMob />}
    </header>
  );
}
