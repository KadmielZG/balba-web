import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="layout">
      <main className="content">
        <Outlet />   {/* AQUÍ CAMBIAN LAS PÁGINAS */}
      </main>
      <Footer />
    </div>
  );
}