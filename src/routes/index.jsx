import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "@/features/ui";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Spa() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
