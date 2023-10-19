import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/features/ui";

export default function Spa() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
