import { Routes, Route } from "react-router-dom";
import "./App.css";

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
        <Route path="trands" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
