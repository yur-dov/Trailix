import s from "./NavMenuMob.module.css";
import { FaHome, FaFilm } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";

function NavMenuMob() {
  return (
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
  );
}
export default NavMenuMob;
