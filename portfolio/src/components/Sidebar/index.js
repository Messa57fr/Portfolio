import './index.scss';
import Logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Logo} alt="logo" />
      <p>Samuel Coizet</p>
    </Link>

  </div>
)

export default Sidebar
