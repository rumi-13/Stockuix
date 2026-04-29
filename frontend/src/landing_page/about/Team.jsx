import React from 'react';
import TeamMember from '../../components/TeamMember';

function Team() {
    const teamMembers = [
        { id: 1, name: 'Tanjiro Kamado', position: 'Chief Executive Officer', image: '/images/team/tanjiro.webp' },
        { id: 2, name: 'Nezuko Kamado', position: 'Chief Technology Officer', image: '/images/team/nezuko.webp' },
        { id: 3, name: 'Zenitsu Agatsuma', position: 'Head of Trading', image: '/images/team/zenitsu.webp' },
        { id: 4, name: 'Inosuke Hashibira', position: 'VP Customer Success', image: '/images/team/inosuke.webp' },
        { id: 5, name: 'Giyu Tomioka', position: 'Lead Developer', image: '/images/team/giyu.webp' },
        { id: 6, name: 'Shinobu Kocho', position: 'Head of Marketing', image: '/images/team/shinobu.webp' },
        { id: 7, name: 'Kyojuro Rengoku', position: 'Senior Analyst', image: '/images/team/kyojuro.webp' },
        { id: 8, name: 'Mitsuri Kanroji', position: 'Product Manager', image: '/images/team/mitsuri.webp' },
    ];

    return ( 
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h2 className="display-5 fw-bold mb-3">Meet Our Team</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Passionate professionals dedicated to revolutionizing stock trading with a touch of demon-slaying spirit.
                    </p>
                </div>
            </div>

            <div className="row g-5">
                {teamMembers.map((member) => (
                    <div key={member.id} className="col-md-6 col-lg-3 ">
                        <TeamMember {...member} />
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Team;
