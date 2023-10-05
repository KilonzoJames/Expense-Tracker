import Navbar from './Navbar'
import Footer from './Footer'
import Balance from './Balance';
import ButtonList from './ButtonList';
import PropTypes from 'prop-types';


function Homepage({isDarkMode, handleToggle}) {
  return (
    <div>
        <Navbar isDarkMode={isDarkMode} handleToggle={handleToggle}/>
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
  };
export default Homepage
