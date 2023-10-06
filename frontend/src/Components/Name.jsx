import { FaUser } from "react-icons/fa"
import PropTypes from 'prop-types';

function Name({username}) {
  return (
    <div className="flex justify-end text-5xl mt-20 gap-5">
        <FaUser className="hover:scale-150 transition-all duration-500"/>
      {username}
    </div>
  )
}
Name.propTypes = {
    username: PropTypes.string.isRequired,
  };
export default Name
