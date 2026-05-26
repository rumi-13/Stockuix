import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (index, path) => {
    setSelectedMenu(index);
    navigate(path);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/orders" },
    { label: "Holdings", path: "/holdings" },
    { label: "Positions", path: "/positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/apps" },
  ];

  return (
    <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between w-100 py-3 py-lg-0">
      <ul className="nav nav-pills flex-column flex-lg-row border-0 gap-1 w-100 w-lg-auto mb-3 mb-lg-0">
        {menuItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link border-0 px-3 py-2 fw-medium text-start w-100 w-lg-auto ${selectedMenu === index ? "active bg-primary shadow-sm" : "text-muted"}`}
              onClick={() => handleMenuClick(index, item.path)}
              style={{ fontSize: "14px", borderRadius: "8px" }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="dropdown position-relative w-100 w-lg-auto border-top border-lg-0 pt-3 pt-lg-0" ref={dropdownRef}>
        <button
          className="btn btn-link text-decoration-none d-flex align-items-center gap-2 p-0 shadow-none border-0 w-100 w-lg-auto"
          type="button"
          onClick={handleProfileClick}
        >
          <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold border border-primary border-opacity-25" style={{ width: "32px", height: "32px", fontSize: "12px" }}>
            ZU
          </div>
          <span className="text-dark fw-medium small">USERID</span>
          <i className={`fa-solid fa-chevron-down small text-muted ms-auto ms-lg-0 transition-all ${isProfileDropdownOpen ? "rotate-180" : ""}`}></i>
        </button>

        {isProfileDropdownOpen && (
          <div 
            className="dropdown-menu show dropdown-menu-end position-absolute shadow border-0 py-2 animate__animated animate__fadeInUp animate__faster" 
            style={{ 
              right: 0, 
              top: "100%", 
              minWidth: "240px", 
              zIndex: 1050, 
              borderRadius: "12px",
              marginTop: "10px"
            }}
          >
            <div className="px-3 py-3 border-bottom mb-2 bg-light bg-opacity-50">
              <p className="mb-0 fw-bold small text-dark">User Name</p>
              <p className="mb-0 text-muted" style={{ fontSize: "11px" }}>user@example.com</p>
            </div>
            <button className="dropdown-item py-2 px-3 small border-0 bg-transparent w-100 text-start d-flex align-items-center">
              <i className="fa-solid fa-user me-3 opacity-50 text-muted"></i> My Profile
            </button>
            <button className="dropdown-item py-2 px-3 small border-0 bg-transparent w-100 text-start d-flex align-items-center">
              <i className="fa-solid fa-gear me-3 opacity-50 text-muted"></i> Settings
            </button>
            <hr className="dropdown-divider opacity-50" />
            <button className="dropdown-item py-2 px-3 small text-danger border-0 bg-transparent w-100 text-start d-flex align-items-center">
              <i className="fa-solid fa-right-from-bracket me-3 opacity-50"></i> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
