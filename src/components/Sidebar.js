import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        background: "#2c3e50",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Dashboard</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              display: "block",
              padding: "10px",
              background: isActive ? "#34495e" : "transparent",
            })}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/analytics"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              display: "block",
              padding: "10px",
              background: isActive ? "#34495e" : "transparent",
            })}
          >
            Analytics
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              display: "block",
              padding: "10px",
              background: isActive ? "#34495e" : "transparent",
            })}
          >
            Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;