import { NavLink } from "react-router-dom";
import "../styles.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">InsightBoard</h2>

      <ul>
        <li>
          <NavLink to="/" className="link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className="link">Analytics</NavLink>
        </li>
        <li>
          <NavLink to="/reports" className="link">Reports</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;