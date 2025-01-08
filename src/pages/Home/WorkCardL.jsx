import PropTypes from "prop-types";
import Markdown from "react-markdown";

const WorkCardL = ({ workdata }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-3">
      <div className="w-full h-full bg-gradient-to-r from-base-100 to-secondary/30 rounded-r-lg hidden lg:block"></div>
      <div className="lg:col-span-4 card bg-base-200 rounded-lg p-12 flex flex-col gap-3 items-start text-left w-full">
        <img src={workdata.img} className="size-12 rounded-full" alt="work" />
        <h3 className="font-bold text-3xl text-primary">{workdata.org}</h3>
        <p className="font-semibold text-lg text-secondary">{workdata.pos}</p>
        <p className="font-light">{workdata.time}</p>
        <div className="prose lg:prose-lg">
          <Markdown>{workdata.resp}</Markdown>
        </div>
      </div>
    </div>
  );
};

WorkCardL.propTypes = {
  workdata: PropTypes.object,
};

export default WorkCardL;
