import s from "./NavMenuMob.module.css";
import { FaHome, FaFilm } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavMenuMob() {
  return (
    <div className={s.navigate}>
      <ul className={s.navigateList}>
        <li className={s.navigateItem}>
          <Link to="/tranding" className={s.navigateBtn}>
            <FaFilm className={s.btnIcon} />
            <span className={s.btnText}>Trand</span>
          </Link>
        </li>

        <li className={s.navigateItem}>
          <Link to="/series" className={s.navigateBtn}>
            <BsFillCameraReelsFill className={s.btnIcon} />
            <span className={s.btnText}>Series</span>
          </Link>
        </li>

        <li className={s.navigateItem}>
          <Link to="/" className={s.navigateBtn}>
            <FaHome className={s.btnIcon} />
            <span className={s.btnText}>Home</span>
          </Link>
        </li>

        <li className={s.navigateItem}>
          <Link to="/genres" className={s.navigateBtn}>
            <RiPlayList2Fill className={s.btnIcon} />
            <span className={s.btnText}>Genres</span>
          </Link>
        </li>

        <li className={s.navigateItem}>
          <Link to="/library" className={s.navigateBtn}>
            <MdOutlineVideoLibrary className={s.btnIcon} />
            <span className={s.btnText}>Library</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavMenuMob;
