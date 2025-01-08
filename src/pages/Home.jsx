import { CgEditBlackPoint } from "react-icons/cg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRulerVertical,
  FaUserAstronaut,
} from "react-icons/fa";
import EducationCard from "./Home/EducationCard";
import { MdWork } from "react-icons/md";
import WorkCardL from "./Home/WorkCardL";
import WorkCardR from "./Home/WorkCardR";
import { SiHyperskill } from "react-icons/si";
import SkillCard from "./Home/SkillCard";
import knowledge from "../assets/knowledge.png";
import learning from "../assets/learning.png";
import wishlist from "../assets/wishlist.png";
import ProjectCardL from "./Home/ProjectCardL";
import ProjectCardR from "./Home/ProjectCardR";
import data from "./Home/Data/HomeData.json";
import self from "../assets/jawad-regular.png";
import FeedbackBanner from "./Home/FeedbackBanner";
import AboutMe from "./Home/AboutMe";

const Home = () => {
  console.log(data);
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="w-full">
        <div className="hero bg-base-300 w-fit my-12 mx-auto rounded">
          <div className="grid lg:grid-cols-2 place-items-center p-12 gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="font-extrabold text-5xl text-primary">
                Jawad <span className="text-secondary">Ibn Mamoon</span>
              </h1>
              <div>
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <CgEditBlackPoint />
                  CSE Graduate
                </h3>
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <CgEditBlackPoint />
                  Web Developer
                </h3>
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <CgEditBlackPoint />
                  Content Writer
                </h3>
              </div>
              <nav className="flex text-2xl gap-3 justify-evenly">
                <a href="https://github.com/Ostitter-Anondo" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jawad-ibn-mamoon/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/ostitter.anondo"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </nav>
              <a
                href="https://drive.google.com/uc?export=download&id=10YvIU_y6cK-Fhv__P8T2j45kjySo7RcI"
                target="_blank"
                className="btn btn-accent btn-lg"
              >
                download cv
              </a>
            </div>
            <div className="shadow-lg">
              <img src={self} className="h-96" alt="" />
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <FaUserAstronaut />
            About Me
          </h2>
          <div className="flex flex-col gap-6 my-6">
            <AboutMe meData={data.aboutMe} />
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <MdWork />
            Work Experience
          </h2>
          <div className="flex flex-col gap-6 my-6">
            <WorkCardL workdata={data.workStuff.bucc} />
            <WorkCardR workdata={data.workStuff.buaps} />
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <FaRulerVertical />
            Education
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 my-6 justify-around">
            <EducationCard eduData={data.educationStuff.bachelors} />
            <EducationCard eduData={data.educationStuff.hsc} />
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <SiHyperskill />
            Skills
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 my-6 items-center justify-around lg:items-start">
            <SkillCard
              skillData={{
                img: knowledge,
                dataVals: data.skillStuff.knowledge,
              }}
            />
            <SkillCard
              skillData={{
                img: learning,
                dataVals: data.skillStuff.learning,
              }}
            />
            <SkillCard
              skillData={{
                img: wishlist,
                dataVals: data.skillStuff.wishlist,
              }}
            />
          </div>
        </div>
        <div className="w-11/12 mx-auto my-6">
          <h2 className="font-bold text-4xl text-accent flex items-center gap-2">
            <MdWork />
            Projects
          </h2>
          <div className="flex flex-col gap-6 my-6">
            <ProjectCardL projectData={data.projecStuff.portfolio} />
            <ProjectCardR projectData={data.projecStuff.solaris} />
            <ProjectCardL projectData={data.projecStuff.blogsite} />
          </div>
        </div>
        <FeedbackBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
