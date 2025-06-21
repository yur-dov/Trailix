import tv from "../../assets/TV_without_BG-removebg-preview.png";
import s from "./BannerTV.module.css";
import Container from "../Container/Container";
import { BASE_IMG_URL } from "../../services/ApiTMDB";
import { fetchTrendingMovies } from "../../services/ApiTMDB";
import { useEffect, useState } from "react";

function BannerTV() {
  const [tvImage, setTvImage] = useState([]);

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

  return (
    <Container>
      <h3 className={s.tvTitle}>Насолоджуйся українським дубляжем</h3>
      <div>
        <img src={tv} alt="" className={s.tvImage} />
        {tvImage.map((item) => (
          <img
            key={item.id}
            src={`${BASE_IMG_URL}${item.poster_path}`}
            alt={item.title}
            className={s.tvPoster}
          />
        ))}
        {/* <img src="" alt="" /> */}
      </div>
    </Container>
  );
}
export default BannerTV;
