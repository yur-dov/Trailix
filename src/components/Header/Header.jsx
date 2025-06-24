import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";

import NavMenuMob from "./MenuNavMob/NavMenuMob";
import ModalMenu from "./MenuBurger/ModalMenu";

import s from "./Header.module.css";

function Header() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalOpen]);

  return (
    <header className={s.header}>
      <Link to={"/"} className={s.logo}>
        TRAIL<span>IX</span>
      </Link>

      {isMobile && (
        <button className={s.menuBtn} onClick={toggleModal}>
          <GiHamburgerMenu className={s.menuBtnIcon} />
        </button>
      )}

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
      <div className={s.signInEWrapper}>
        <FaRegUserCircle className={s.iconSignIn} />
        <p className={s.signIn}>Sing In</p>
      </div>

      {modalOpen && (
        <ModalMenu showModal={modalOpen} onCloseModal={toggleModal} />
      )}

      <NavMenuMob />
    </header>
  );
}

export default Header;
