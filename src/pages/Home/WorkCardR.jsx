import PropTypes from "prop-types";
import experience from "../../assets/experience.png";

const WorkCardR = ({ workdata }) => {
  console.log(workdata);
  return (
    <div className="grid lg:grid-cols-5 gap-3">
      <div className="lg:col-span-4 card bg-base-200 rounded-lg w-fit p-12 flex flex-col gap-3 items-end text-right">
        <img src={experience} className="size-12" alt="work" />
        <h3 className="font-bold text-3xl">XYZ Institute</h3>
        <p className="font-light">time period</p>
        <p>
          courseworkdetails Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Explicabo nostrum tempora, quasi voluptas quis repudiandae cum
          deleniti molestiae nemo fuga!
        </p>
      </div>
      <div className="w-full h-full bg-gradient-to-l from-base-100 to-secondary/30 rounded-l-lg hidden lg:block"></div>
    </div>
  );
};

WorkCardR.propTypes = {
  workdata: PropTypes.object,
};

export default WorkCardR;
