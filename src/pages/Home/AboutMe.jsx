import PropTypes from "prop-types";
import Markdown from "react-markdown";

const AboutMe = ({ meData }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-3">
      <div className="w-full h-full bg-gradient-to-r from-base-100 to-primary/30 rounded-r-lg hidden lg:block"></div>
      <div className="lg:col-span-4 card bg-base-200 rounded-lg p-6 lg:p-12 flex flex-col items-start text-justify w-full prose lg:prose-lg space-y-0.5">
        <Markdown>{meData}</Markdown>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  meData: PropTypes.object,
};

export default AboutMe;
