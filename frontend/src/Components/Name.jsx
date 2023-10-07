import PropTypes from 'prop-types';
import userIcon from '../assets/9788906.png';

function Name({username}) {
  return (
    <div className="text-blue-800 flex justify-end text-3xl font-medium items-center mt-16 gap-3">
        <img 
        className='hover:scale-125 transition-all duration-500'
        src={userIcon} 
        alt='icon'
        style={{ width: '3rem', height: '3rem' }}/>
        {username}
    </div>
  )
}
Name.propTypes = {
    username: PropTypes.string.isRequired,
  };
export default Name
