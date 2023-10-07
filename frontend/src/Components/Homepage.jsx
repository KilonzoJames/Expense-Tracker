import Navbar from './Navbar'
import Footer from './Footer'
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
              <ButtonList/>
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
