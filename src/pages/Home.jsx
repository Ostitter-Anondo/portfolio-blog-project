import { CgEditBlackPoint } from "react-icons/cg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaRulerVertical } from "react-icons/fa";
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
          <div className="flex flex-col lg:flex-row gap-6 my-6 justify-around">
            <EducationCard />
            <EducationCard />
            <EducationCard />
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
                category: "My Skills",
                skills: [
                  "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp",
                  "https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon.png",
                  "https://cdn-icons-png.freepik.com/256/1051/1051277.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                ],
              }}
            />
            <SkillCard
              skillData={{
                img: learning,
                category: "Still Learning",
                skills: [
                  "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
                  "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
                  "https://mathiasfrohlich.gallerycdn.vsassets.io/extensions/mathiasfrohlich/kotlin/1.7.1/1581441165235/Microsoft.VisualStudio.Services.Icons.Default",
                ],
              }}
            />
            <SkillCard
              skillData={{
                img: wishlist,
                category: "Plan to Learn",
                skills: [
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTc3wwVFk4RrsQHsAafyJYQOkKwrb7WSIiQ&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSOIj7rDvRcVKV8OcU_CAlJesGK_cxk9FSw&s",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png",
                ],
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
            <ProjectCardL />
            <ProjectCardR />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
