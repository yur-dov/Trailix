import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокрутка наверх при смене маршрута
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Этот компонент не рендерит ничего
}

export default ScrollToTop;
