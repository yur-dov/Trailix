import s from "./ModalMenu.module.css";

import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import SearchForm from "../../SearchForm/SearchForm";

function ModalMenu({ onCloseModal, showModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showModal]);

  return createPortal(
    <div className={s.modalContainer} ref={modalRef}>
      <div className={s.modalMenuHeaderWrapp}>
        <p className={s.logo}>
          TRAIL<span>IX</span>
        </p>

        <button type="button" onClick={onCloseModal} className={s.closeBtn}>
          <IoClose className={s.closeBtnIcon} />
        </button>
      </div>

      <SearchForm />

      <ul className={s.modalMenuList}>
        <li className={s.modalMenuItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={s.modalMenuItem}>
          <Link to="/library">Library</Link>
        </li>
        <li className={s.modalMenuItem}>
          <Link to="/genres">Genres</Link>
        </li>
      </ul>

      <Link className={s.login}>
        <FaRegUserCircle className={s.loginIcon} />
        Sign In
      </Link>
    </div>,
    document.body
  );
}
export default ModalMenu;
