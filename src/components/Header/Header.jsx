import { Link, useLocation } from "react-router-dom";
import { FaHome, FaFilm } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";

import s from "./Header.module.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={s.header}>
      <p className={s.logo}>
        TRAIL<span>IX</span>
      </p>

      <button className={s.menuBtn}>
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
      <div className={s.navigate}>
        <ul className={s.navigateList}>
          <li className={s.navigateItem}>
            <button className={s.navigateBtn}>
              <FaFilm className={s.btnIcon} />
              <span className={s.btnText}>Trand</span>
            </button>
          </li>

          <li className={s.navigateItem}>
            <button className={s.navigateBtn}>
              <BsFillCameraReelsFill className={s.btnIcon} />
              <span className={s.btnText}>Series</span>
            </button>
          </li>

          <li className={s.navigateItem}>
            <button className={s.navigateBtn}>
              <FaHome className={s.btnIcon} />
              <span className={s.btnText}>Home</span>
            </button>
          </li>

          <li className={s.navigateItem}>
            <button className={s.navigateBtn}>
              <RiPlayList2Fill className={s.btnIcon} />
              <span className={s.btnText}>Genres</span>
            </button>
          </li>

          <li className={s.navigateItem}>
            <button className={s.navigateBtn}>
              <MdOutlineVideoLibrary className={s.btnIcon} />
              <span className={s.btnText}>Library</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
