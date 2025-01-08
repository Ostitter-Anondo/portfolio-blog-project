import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

const EducationCard = ({eduData}) => {
  console.log(eduData)
  return (
    <div className='card w-full bg-base-200 rounded p-12 flex flex-col grow gap-3'>
      <img src={eduData.img} className='size-12 bg-white p-2 rounded-full' alt="education" />
      <h3 className='font-bold text-3xl text-secondary'>{eduData.institute}</h3>
      <p className='font-extralight text-sm'>{eduData.year}</p>
      <p className='font-light text-lg text-primary'>{eduData.degree}</p>
      <Markdown>{eduData.coursework}</Markdown>
    </div>
  );
};

EducationCard.propTypes = {
  eduData: PropTypes.object,
};

export default EducationCard;