import Navbar from './Navbar'
import Footer from './Footer'
import Balance from './Balance';
import Name from './Name';
import ButtonList from './ButtonList';
import PropTypes from 'prop-types';


function Homepage({username, isDarkMode, handleToggle}) {
  return (
    <div>
        <Navbar isDarkMode={isDarkMode} handleToggle={handleToggle}/>
        <Name username={username} />
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <Balance/>
            </div>
            <div className="lg:w-1/2 h-screen">
                <ButtonList/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
Homepage.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, 
    handleToggle: PropTypes.func.isRequired, 
    username: PropTypes.string.isRequired,
  };
export default Homepage
