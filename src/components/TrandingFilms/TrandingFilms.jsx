import { useEffect, useRef, useState } from "react";
import { fetchTrendingMovies, BASE_IMG_URL } from "../../services/ApiTMDB";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Container from "../Container/Container";
import s from "./TrandingFilms.module.css";

gsap.registerPlugin(ScrollToPlugin);

function TrandingFilms() {
  const [films, setFilms] = useState([]);
  const sliderRef = useRef(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    const getTrandFilms = async () => {
      try {
        const data = await fetchTrendingMovies();
        console.log(data);

        setFilms(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrandFilms();
  }, []);

  useEffect(() => {
    if (!sliderRef.current || films.length === 0) return;
    const slider = sliderRef.current;

    const scrollInterval = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      scrollPos.current += 150;
      if (scrollPos.current >= maxScroll) {
        scrollPos.current = 0;
      }
      gsap.to(slider, {
        scrollLeft: scrollPos.current,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => slider.classList.remove("animating"),
      });
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [films]);

  return (
    <Container>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>TrandingFilms</h1>
        <Link to={"/tranding"} className={s.linkViewAll}>
          View all
        </Link>
      </div>

      <div className={s.sliderWrapper} ref={sliderRef}>
        <div className={s.slider}>
          {films.map((film) => (
            <div key={film.id} className={s.card}>
              <img
                src={`${BASE_IMG_URL}${film.poster_path}`}
                alt={film.title}
                className={s.cardImg}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
export default TrandingFilms;
