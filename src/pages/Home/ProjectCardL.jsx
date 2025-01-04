import PropTypes from "prop-types";
import experience from "../../assets/experience.png";

const ProjectCardL = ({ workdata }) => {
  console.log(workdata);
  return (
    <div className="grid lg:grid-cols-5 gap-3">
      <div className="w-full h-full bg-gradient-to-r from-base-100 to-secondary/30 rounded-r-lg hidden lg:block"></div>
      <div className="lg:col-span-4 card bg-base-200 rounded-lg w-fit p-12 flex-row gap-6 items-center">
        <img src={experience} className="size-32" alt="work" />
        <div className="flex flex-col gap-3 items-start">
          <h3 className="font-bold text-3xl text-primary">XYZ Institute</h3>
          <p className="font-light">time period</p>
          <p>
            courseworkdetails Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo nostrum tempora, quasi voluptas quis
            repudiandae cum deleniti molestiae nemo fuga!
          </p>
          <button className="btn btn-success btn-xs">Details...</button>
        </div>
      </div>
    </div>
  );
};

ProjectCardL.propTypes = {
  workdata: PropTypes.object,
};

export default ProjectCardL;
