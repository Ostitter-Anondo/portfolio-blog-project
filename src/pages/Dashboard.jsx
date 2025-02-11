import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
				<Navbar />
			</header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;