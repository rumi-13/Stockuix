import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleMenuClick = (path) => navigate(path);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/auth/logout", {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      navigate("/login", { replace: true });
    }
  };

  const menuItems = [
    { label: "Dashboard", path: `/dashboard/${id}` },
    { label: "Orders", path: `/dashboard/${id}/orders` },
    { label: "Holdings", path: `/dashboard/${id}/holdings` },
    { label: "Positions", path: `/dashboard/${id}/positions` },
    { label: "Funds", path: `/dashboard/${id}/funds` },
    { label: "Apps", path: `/dashboard/${id}/apps` },
  ];

  const getActiveMenu = (path) => {
    if (path === `/dashboard/${id}`) {
      return location.pathname === `/dashboard/${id}` || location.pathname === `/dashboard/${id}/`;
    }

    return location.pathname.startsWith(path);
  };

  return (
    <div className="d-flex align-items-center justify-content-between w-100 gap-3 flex-wrap mt-3 mt-lg-0">
      <ul className="nav nav-pills flex-row flex-wrap border-0 gap-1 mb-0">
        {menuItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link border-0 px-3 py-2 fw-medium ${getActiveMenu(item.path) ? "active bg-primary shadow-sm" : "text-muted"}`}
              onClick={() => handleMenuClick(item.path)}
              style={{ fontSize: "14px", borderRadius: "8px" }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="ms-auto">
        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-sm btn-outline-danger d-flex align-items-center gap-2"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="ms-1">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
