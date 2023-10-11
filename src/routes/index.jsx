import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Posts, PostDetail, About } from "../pages";
import { Header } from "../features/ui";

export default function Nav() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
