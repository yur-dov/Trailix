import tv from "../../assets/TV_without_BG-removebg-preview.png";
import s from "./BannerTV.module.css";
import Container from "../Container/Container";
import { gsap } from "gsap";
import { BASE_IMG_URL } from "../../services/ApiTMDB";
import { fetchTrendingMovies } from "../../services/ApiTMDB";
import { useEffect, useState, useRef } from "react";

function BannerTV() {
  const [tvImage, setTvImage] = useState([]);
  const currentIndex = useRef(0); // Счётчик текущего изображения (через useRef — не вызывает перерендер)
  const imgRef = useRef(null); // Ссылка на DOM-элемент картинки в телевизоре

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();

        setTvImage(
          data.map((item) => {
            if (item.poster_path) {
              return item;
            }
            return null;
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!tvImage.length || !imgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(imgRef.current, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        currentIndex.current = (currentIndex.current + 1) % tvImage.length;
        if (imgRef.current) {
          imgRef.current.src = `${BASE_IMG_URL}${
            tvImage[currentIndex.current].backdrop_path
          }`;
        }
      },
    });

    tl.to(imgRef.current, {
      opacity: 1,
      duration: 1,
    });

    const interval = setInterval(() => {
      tl.restart();
    }, 5000);

    return () => clearInterval(interval);
  }, [tvImage]);

  return (
    <Container>
      <div className={s.tvConWrapper}>
        <h3 className={s.tvTitle}>Насолоджуйся українським дубляжем</h3>
        <div className={s.tvContainer}>
          <img src={tv} alt="" className={s.tvImage} />
          {tvImage.map((item) => (
            <img
              ref={imgRef}
              key={item.id}
              src={
                tvImage[0] ? `${BASE_IMG_URL}${tvImage[0].backdrop_path}` : ""
              }
              alt={item.title}
              className={s.tvPoster}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
export default BannerTV;
