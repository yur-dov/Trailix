import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import Library from "./pages/Library/Library";
import Home from "./pages/Home/Home";
import PageWrapper from "./components/Utils/PageWrapper";
import TrandingMovie from "./pages/trandingMovie/TrandingMovie";
import Genres from "./pages/Genres/Genres";
import TrandFilmDetails from "./components/TrandingFilms/TrandFilmDetails/TrandFilmDetails";
import Series from "./pages/Series/Series";
// import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="library"
          element={
            <PageWrapper>
              <Library />
            </PageWrapper>
          }
        />
        <Route path="tranding" element={<TrandingMovie />} />
        <Route path="tranding/:id" element={<TrandFilmDetails />} />
        <Route path="genres" element={<Genres />} />
        <Route path="series" element={<Series />} />
        {/* <Route path="trands" element={<Favorites />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
