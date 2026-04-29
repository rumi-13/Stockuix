import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container-fluid py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="row w-100">
                <div className="col-12 text-center">
                    <h1 className="display-1 fw-bold text-primary">404</h1>
                    <h2 className="mb-3">Page Not Found</h2>
                    <p className="lead mb-4">
                        Sorry! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <Link to="/" className="btn btn-primary btn-lg">Go to Home</Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
