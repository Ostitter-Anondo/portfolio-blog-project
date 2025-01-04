import PropTypes from 'prop-types';
import education from '../../assets/education.png';

const EducationCard = ({eduData}) => {
  console.log(eduData)
  return (
    <div className='card bg-base-200 rounded w-fit p-12 flex flex-col gap-3'>
      <img src={education} className='size-12' alt="education" />
      <h3 className='font-bold text-3xl'>XYZ Institute</h3>
      <p className='font-light'>passing year</p>
      <p>courseworkdetails Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo nostrum tempora, quasi voluptas quis repudiandae cum deleniti molestiae nemo fuga!</p>
    </div>
  );
};

EducationCard.propTypes = {
  eduData: PropTypes.object,
};

export default EducationCard;