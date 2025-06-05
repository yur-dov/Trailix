import Container from "../Container/Container";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import { FaRegUserCircle, FaLinkedin, FaGithub, FaPlus } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

function Footer() {
  return (
    <Container>
      <div className={s.wrapper}>
        <ul>
          <li className={s.navItem}>
            <FaRegUserCircle className={s.iconSignIn} />
            <p className={s.signIn}>Sing In</p>
            <button className={s.buttonAdd}>
              <FaPlus className={s.iconAdd} />
            </button>
          </li>

          <li className={s.navItem}>
            <Link to={"/"} className={s.signIn}>
              Home
            </Link>
            <button className={s.buttonAdd}>
              <FaPlus className={s.iconAdd} />
            </button>
          </li>

          <li className={s.navItem}>
            <Link to={"/library"} className={s.signIn}>
              Library
            </Link>
            <button className={s.buttonAdd}>
              <FaPlus className={s.iconAdd} />
            </button>
          </li>
        </ul>

        <div className={s.logoContainer}>
          <span className={s.logoFooter}>
            TRAIL<span>IX</span>
          </span>
          <p className={s.description}>
            We offer original, exclusive new releases of cinema. Everything you
            want to watch, anytime, anywhere and as much as you want.
          </p>
        </div>

        <ul className={s.socialList}>
          <li className={s.socialItem}>
            <button className={s.socialButton}>
              <FaLinkedin />
            </button>
          </li>
          <li className={s.socialItem}>
            <button className={s.socialButton}>
              <FaGithub />
            </button>
          </li>
          <li className={s.socialItem}>
            <button className={s.socialButton}>
              <FaSquareUpwork />
            </button>
          </li>
        </ul>
        <div className={s.copyrightContainer}>
          <p className={s.copyright}>Copyright@ 2025. All rights reserved.</p>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
