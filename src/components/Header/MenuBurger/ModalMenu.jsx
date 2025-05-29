import s from "./ModalMenu.module.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaLinkedin, FaGithub, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function ModalMenu() {
  return (
    <div className={s.modalContainer}>
      <p className={s.logo}>
        TRAIL<span>IX</span>
      </p>

      <button>
        <IoClose />
      </button>
      <form action="">
        <button></button>
        <input type="text" />
      </form>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Trands</Link>
        </li>
        <li>
          <Link>Siries</Link>
        </li>
        <li>
          <Link>Genres</Link>
        </li>
        <li>
          <Link>Library</Link>
        </li>
      </ul>
      <Link className={s.login}>
        <FaRegUserCircle />
        Sign In
      </Link>
    </div>
  );
}
export default ModalMenu;
