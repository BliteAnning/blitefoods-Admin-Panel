import {assets} from '../assets/assets'

const Navbar = () => {
    return ( 
        <div className="navBar">
            <img className='logo' src={assets.logo} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
     );
}
 
export default Navbar;