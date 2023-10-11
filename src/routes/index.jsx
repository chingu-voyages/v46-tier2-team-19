import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
export default function Nav() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/Posts">Posts</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
