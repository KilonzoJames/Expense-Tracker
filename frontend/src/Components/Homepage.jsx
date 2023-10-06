import Navbar from './Navbar'
import Footer from './Footer'
import Balance from './Balance';
import Name from './Name';
import ButtonList from './ButtonList';
import PropTypes from 'prop-types';
import { ThemeProvider } from './ThemeContext';


function Homepage({username}) {
  return (
    <ThemeProvider>
      <div className='relative'>
          <Navbar/>
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
    </ThemeProvider>

  )
}
Homepage.propTypes = {
    username: PropTypes.string.isRequired,
  };
export default Homepage
