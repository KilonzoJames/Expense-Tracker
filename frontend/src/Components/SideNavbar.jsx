import {React, useRef, useEffect} from 'react'
import Navlinks from './Navlinks'
import M from 'materialize-css'

function SideNavbar({links}) {
  const sideNavRef = useRef(null)
  useEffect(() => {
    M.Sidenav.init(sideNavRef.current);
  }, []);
  
  return (
        <ul 
        className="block bg-zinc-200 w-1/2 h-screen lg:h-full fixed top-0 left-0 overflow-y-auto text-2xl"
        ref={sideNavRef}>
            {/* <li><a href='#' > <i className="large material-icons">menu</i> </a></li> */}
            <Navlinks/>
        </ul>
  )
}

export default SideNavbar
