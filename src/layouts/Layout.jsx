import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <main className="flex-grow-1 bg-super-dark">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
