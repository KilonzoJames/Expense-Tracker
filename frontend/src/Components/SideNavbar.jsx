import Navlinks from './Navlinks'
// import M from 'materialize-css'

function SideNavbar() {
 
  return (
        <div 
        className="block bg-zinc-700 text-white w-1/2 h-screen lg:h-full fixed top-0 left-0 overflow-y-hidden text-2xl"
        >
            <Navlinks/>
        </div>
  )
}

export default SideNavbar
