import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import Library from "./components/Library/Library";
import Favorites from "./components/Favorites/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
