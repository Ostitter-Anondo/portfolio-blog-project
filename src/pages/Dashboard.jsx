import { NavLink, Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
				<Navbar />
			</header>
      <main className="min-h-screen w-full">
        <ul className="menu menu-horizontal mx-auto w-fit border flex-wrap">
          <li>
            <NavLink>Dashboard</NavLink>
          </li>
          <li>
            <NavLink>Dashboard</NavLink>
          </li>
        </ul>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;