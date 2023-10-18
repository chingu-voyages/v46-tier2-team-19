import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/features/ui";

export default function Nav() {
  return (
    <>
      <Header />
      <main className="w-full h-screen mx-auto bg-slate-400">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
