import Container from "../Container/Container";
import s from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "left-ellipsis", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "right-ellipsis",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "left-ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "right-ellipsis",
          totalPages
        );
      }
    }
    return pages;
  };

  const pages = getPages();

  return (
    <Container>
      <div className={s.paginationWrapper}>
        {pages.map((page, idx) =>
          page === "left-ellipsis" || page === "right-ellipsis" ? (
            <span key={page + idx} className={s.ellipsis}>
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={s.pageButton}
            >
              {page}
            </button>
          )
        )}
      </div>
    </Container>
  );
}

export default Pagination;
