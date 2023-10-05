import Navlinks from './Navlinks'
// import M from 'materialize-css'

function SideNavbar() {
 
  return (
        <ul 
        className="block bg-zinc-200 w-1/2 h-screen lg:h-full fixed top-0 left-0 overflow-y-hidden text-2xl"
        >
            <Navlinks/>
        </ul>
  )
}

export default SideNavbar
