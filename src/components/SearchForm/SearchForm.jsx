import s from "./SearchForm.module.css";
import { CiSearch } from "react-icons/ci";

function SearchForn() {
  return (
    <form className={s.searchForm}>
      <button className={s.searchBtn}>
        <CiSearch className={s.searchBtnIcon} />
      </button>
      <input type="text" className={s.searchInput} placeholder="Search" />
    </form>
  );
}
export default SearchForn;
