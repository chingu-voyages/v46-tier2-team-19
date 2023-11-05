import Spa from "./routes";
import makeServer from "./mirageServer/server";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Search,
  RecipeDetails,
  Components,
  PageNotFound,
} from "@/pages";
import Favorites from "./pages/Favorites";
// Please keep on when possible to avoid using up our Tasty API free quota
// All api calls will be intercepted and fulfilled by the mirage server.
const USE_MIRAGE_API = true;

if (USE_MIRAGE_API) {
  makeServer();
}

function App() {
  return (
    <Routes>
      <Route element={<Spa />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes">
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
        <Route path="/components" element={<Components />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
