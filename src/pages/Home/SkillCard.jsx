import PropTypes from 'prop-types';

const SkillCard = ({skillData}) => {
  console.log(skillData)
  return (
    <div className='card bg-base-200 rounded w-fit p-12 flex flex-col gap-3'>
      <img src={skillData.img} className='size-12' alt="education" />
      <h3 className='font-bold text-2xl text-secondary'>{skillData.category}</h3>
      <div className='grid grid-cols-3 gap-3'>
        {skillData.skills.map(skill => <><img src={skill} className='size-12' alt="" /></>)}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skillData: PropTypes.object,
};

export default SkillCard;