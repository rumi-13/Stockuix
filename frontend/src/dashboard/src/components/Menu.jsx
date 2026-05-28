import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    setDeleteError("");
    try {
      await axios.delete("http://localhost:8000/api/auth/delete-account", {
        withCredentials: true,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Delete account failed:", error);
      setDeleteError(error?.response?.data?.message || "Failed to delete account");
    } finally {
      setIsDeleting(false);
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
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            onClick={() => setShowDeleteDialog(true)}
            className="btn btn-sm btn-outline-danger fw-semibold px-3"
            title="Delete account"
            aria-label="Delete account"
          >
            Delete account
          </button>
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

      {showDeleteDialog && (
        <div
          className="position-fixed top-0 inset-s-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(15, 23, 42, 0.55)", zIndex: 2000 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-account-title"
          aria-describedby="delete-account-description"
          onClick={() => {
            if (!isDeleting) {
              setShowDeleteDialog(false);
              setDeleteError("");
            }
          }}
        >
          <div
            className="bg-white rounded-4 shadow-lg p-4 p-md-5 mx-3"
            style={{ width: "100%", maxWidth: "480px" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="d-flex align-items-start gap-3">
              <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex align-items-center justify-content-center shrink-0" style={{ width: "44px", height: "44px" }}>
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div className="grow">
                <h5 id="delete-account-title" className="fw-bold mb-2">
                  Delete account permanently?
                </h5>
                <p id="delete-account-description" className="text-muted mb-0">
                  This will remove your profile, orders, holdings, and positions. This action cannot be undone.
                </p>
              </div>
            </div>

            {deleteError && (
              <div className="alert alert-danger mt-4 mb-0 py-2 small">
                {deleteError}
              </div>
            )}

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button
                type="button"
                className="btn btn-light px-4 fw-semibold"
                disabled={isDeleting}
                onClick={() => {
                  setShowDeleteDialog(false);
                  setDeleteError("");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger px-4 fw-semibold"
                disabled={isDeleting}
                onClick={handleDeleteAccount}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
