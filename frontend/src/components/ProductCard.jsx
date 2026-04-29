import React from 'react';

/**
 * ProductCard component for displaying product details in a grid.
 * 
 * Props:
 * @param {string} name - The name of the product.
 * @param {string} description - A brief description of the product.
 * @param {string} icon - FontAwesome icon class (e.g., 'fa-chart-line').
 */
function ProductCard({ name, description, icon }) {
    return (
        <div className="text-center p-4 h-100 product-card" style={{
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            backgroundColor: '#fafafa',
            transition: 'all 0.3s ease'
        }}>
            {/* Icon */}
            <div
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#0d6efd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                }}
            >
                <i className={`fas ${icon}`} style={{ fontSize: '36px', color: 'white' }}></i>
            </div>

            {/* Name */}
            <h5 className="fw-bold mb-3" style={{ fontSize: '18px' }}>{name}</h5>

            {/* Description */}
            <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {description}
            </p>

            <style dangerouslySetInnerHTML={{ __html: `
                .product-card:hover {
                    box-shadow: 0 10px 30px rgba(13, 110, 253, 0.1);
                    transform: translateY(-5px);
                }
            `}} />
        </div>
    );
}

export default ProductCard;
