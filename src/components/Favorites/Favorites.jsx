import { useEffect } from "react";
// import s from "./Favorites.module.css";
import { getCompanys } from "../../services/ApiTMDB";

function Favorites() {
  // const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favtest = async () => {
      try {
        const comName = await getCompanys(5887);
        console.log(comName);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    favtest();
  }, []);
  return <div>Favorites Page</div>;
}

export default Favorites;
