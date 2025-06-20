import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { fetchTrendingMovies, BASE_IMG_URL } from "../../../services/ApiTMDB";
import Container from "../../Container/Container";

import s from "./TrandingFilms.module.css";

gsap.registerPlugin(ScrollToPlugin);

function TrandingFilms() {
  const [films, setFilms] = useState([]);
  const sliderRef = useRef(null);
  const scrollPos = useRef(0);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const init = async () => {
      if (films.length === 0) return;

      const card = slider.querySelector(`.${s.card}`);
      if (!card) return;

      const cardWidth = card.offsetWidth + 16;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      let interval = null;

      const startAutoScroll = () => {
        interval = setInterval(() => {
          if (isUserScrolling.current) return;

          scrollPos.current += cardWidth;
          if (scrollPos.current >= maxScroll - cardWidth) {
            scrollPos.current = 0;
          }

          slider.classList.add(s.animating);
          gsap.to(slider, {
            scrollLeft: scrollPos.current,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => slider.classList.remove(s.animating),
          });
        }, 4000);
      };

      startAutoScroll();

      const handleUserScroll = () => {
        isUserScrolling.current = true;
        clearInterval(interval);
        setTimeout(() => {
          isUserScrolling.current = false;
          startAutoScroll();
        }, 4000);
      };

      slider.addEventListener("scroll", handleUserScroll);

      return () => {
        clearInterval(interval);
        slider.removeEventListener("scroll", handleUserScroll);
      };
    };

    init();
  }, [films.length]);

  useEffect(() => {
    const getTrandFilms = async () => {
      try {
        const data = await fetchTrendingMovies();

        setFilms(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrandFilms();
  }, []);

  return (
    <Container>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>TrandingFilms</h1>
        <Link to={"/tranding"} className={s.linkViewAll}>
          View all
        </Link>
      </div>

      <div className={s.sliderWrapper}>
        <div className={s.slider} ref={sliderRef}>
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
