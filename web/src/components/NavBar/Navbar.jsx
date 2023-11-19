
import { useAuthContext } from "../../contexts/user-context";
import { logoutApi } from "../../services/user-service";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import name from "../../assets/name.png"
import './Navbar.css'

function NavBar() {
  const { user, onLogout } = useAuthContext();
  const navigate = useNavigate()

  function logout() {
    logoutApi().then(() => {
      onLogout();
    });
  }

  return (
    <nav className="navbar ">
      {user && (
      <div className="container-fluid">
        <Link to="/doSomething">
          <span className="navbar-brand ">
            <img  className='tarbot-logo'src={name} alt="tarbot-logo" /> 
          </span>
        </Link>

        
          <div className="d-flex">
            {user.avatar && (
              <img
                src={user.avatar}
                alt="avatar"
                className="rounded-circle me-2"
                
              />
            )}
            <Link to='/' >
            <button
              onClick={logout}
              className="button logout"
            >
              
              logout
            </button>
            </Link>
          </div>
        
      </div>
      )}
    </nav>
  );
}

export default NavBar;