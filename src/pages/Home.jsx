import { CgEditBlackPoint } from "react-icons/cg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaRulerVertical } from "react-icons/fa";
import EducationCard from "./Home/EducationCard";
import { MdWork } from "react-icons/md";
import WorkCardL from "./Home/WorkCardL";
import WorkCardR from "./Home/WorkCardR";

const Home = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="w-full">
        <div className="hero bg-base-300 w-fit my-12 mx-auto rounded">
          <div className="grid grid-cols-2 place-items-center p-12 gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-extrabold text-5xl text-primary">
                Fname Lname
              </h1>
              <div>
                <h3 className="font-semibold text-xl text-secondary flex items-center gap-2">
                  <CgEditBlackPoint />
                  pointA
                </h3>
                <h3 className="font-semibold text-xl text-secondary flex items-center gap-2">
                  <CgEditBlackPoint />
                  pointB
                </h3>
                <h3 className="font-semibold text-xl text-secondary flex items-center gap-2">
                  <CgEditBlackPoint />
                  pointC
                </h3>
              </div>
              <button className="btn btn-accent">download cv</button>
            </div>
            <div className="shadow-lg">
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/350/177/non_2x/avatar-man-person-design-free-vector.jpg"
                className="size-96"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <MdWork />
            Work Experience
          </h2>
          <div className="flex flex-col gap-6 my-6">
            <WorkCardL />
            <WorkCardR />
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <FaRulerVertical />
            Education
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 my-6">
            <EducationCard />
            <EducationCard />
            <EducationCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
