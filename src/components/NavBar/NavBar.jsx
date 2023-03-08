import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="flex-container">
      <Link to="/posts" className="flex-item">
        <button className="btn fourth">Memories</button>
      </Link>
      &nbsp; &nbsp;
      <Link to="/posts/new" className="flex-item">
        <button className="btn fourth">Add a Memory</button>
      </Link>
      &nbsp; &nbsp;<span className="username">{user.name}</span>
      {/* &nbsp; | &nbsp;<span>Welcome,{user && user.name}</span> if you want to show navbar before logging in */}
      {/* add the line above and move the navbar location in app.js */}
      &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut} className="flex-item">
        <button className="btn fourth">Logout</button>
      </Link>
    </div>
  );
}

export default NavBar;
