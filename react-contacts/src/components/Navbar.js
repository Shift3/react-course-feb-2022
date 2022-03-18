import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const Navbar = () => {
  const history = useHistory();
  const { logoutUser, user } = useAuth();
  
  return (
    <nav>
      { user !== null ? (
            
      <ul style={{marginTop: "1rem"}}>
        <li>
        <button
                style={{cursor: "pointer"}} 
                onClick={() => {
                  history.push("/contacts/add");
                }}>Create Contact</button>
        </li>
        <li>
          
              <span>{user}, </span>
              <button
                style={{cursor: "pointer"}} 
                onClick={() => {
                  logoutUser();
                  history.push("/login");
                }}>Logout</button>
        </li>
      </ul>
      ) : history.push("/login")}
    </nav>

  );
}

export default Navbar;