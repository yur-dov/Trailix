import s from "./NavMenuMob.module.css";
import Container from "./Container/Container";
import { IoClose } from "react-icons/io5";

function NavMenuMob() {
  return (
    <Container>
      <div className={s.modalWrapper}>
        <button>
          <IoClose />
        </button>
      </div>
    </Container>
  );
}
export default NavMenuMob;
