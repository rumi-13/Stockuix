import React from 'react';

/**
 * SplitSection component for "Image on one side, Content on the other" layouts.
 * 
 * Props:
 * @param {string} image - Path to the image file.
 * @param {string} alt - Alt text for the image.
 * @param {boolean} reverse - If true, image is on the right, content on the left. Default is false (image left).
 * @param {React.ReactNode} children - The text/content to display on the other side.
 */
function SplitSection({ image, alt, reverse = false, children }) {
    const imageCol = (
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img src={image} alt={alt} className="img-fluid" style={{ maxHeight: '450px' }} />
        </div>
    );

    const contentCol = (
        <div className="col-lg-5 py-2 py-lg-4">
            {children}
        </div>
    );

    return (
        <div className="container py-5 my-md-5">
            <div className={`row align-items-center justify-content-between ${reverse ? 'flex-lg-row-reverse' : ''}`}>
                {imageCol}
                {contentCol}
            </div>
        </div>
    );
}

export default SplitSection;
