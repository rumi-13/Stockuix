import React from 'react';

/**
 * TeamMember component for displaying individual team member details.
 * 
 * Props:
 * @param {string} name - The name of the team member.
 * @param {string} position - The job title or position.
 * @param {string} image - Path to the member's profile image.
 */
function TeamMember({ name, position, image }) {
    return (
        <div className="text-center p-3 h-100">
            <div className="mb-4 mx-auto" style={{ maxWidth: '220px' }}>
                <img 
                    src={image} 
                    alt={name} 
                    className="img-fluid rounded shadow-sm transition-all hover-scale"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200'; // Fallback
                    }}
                />
            </div>
            <h5 className="fw-bold mb-1">{name}</h5>
            <p className="text-muted small text-uppercase ls-1 fw-medium">{position}</p>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .ls-1 { letter-spacing: 1px; }
            `}} />
        </div>
    );
}

export default TeamMember;
