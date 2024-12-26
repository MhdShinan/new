import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaGlobe, FaPlus, FaUser, FaTimes } from 'react-icons/fa';
import Marquee from 'react-fast-marquee'; // React Fast Marquee
import { backEndURL, imageURL } from "../Backendurl";

const Team = () => {
  const [managementTeam, setManagementTeam] = useState([]);
  const [developmentTeam, setDevelopmentTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const managementResponse = await fetch(`${backEndURL}/api/team?teamType=management`);
        const managementData = await managementResponse.json();

        const developmentResponse = await fetch(`${backEndURL}/api/team?teamType=development`);
        const developmentData = await developmentResponse.json();

        setManagementTeam(managementData);
        setDevelopmentTeam(developmentData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleSocialLinksToggle = (teamType, index) => {
    const updatedTeam = [...managementTeam];
    updatedTeam[index].showSocialLinks = !updatedTeam[index].showSocialLinks;
    setManagementTeam(updatedTeam);
  };

  const closeSocialLinks = (teamType, index) => {
    const updatedTeam = [...managementTeam];
    updatedTeam[index].showSocialLinks = false;
    setManagementTeam(updatedTeam);
  };

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section className="team-section py-16 px-8 lg:px-24 bg-[#005880]">
      {/* Management Team Section */}
      <section className="management-team text-center">
        <h2 className="team-header text-4xl font-bold text-white">Meet Our Management Team</h2>
        <div className="team-members management-team-grid mt-8 flex justify-center flex-wrap gap-4">
          {managementTeam.map((member, index) => (
            <div key={member._id} className="member card relative w-64 bg-white p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg">
              <div className="card-content flex flex-col items-center">
                <img
                  src={member.image ? `${imageURL}${member.image}` : 'images/default-avatar.png'}
                  alt={member.name}
                  className="avatar mb-4 rounded-full w-32 h-32 object-cover"
                />
                <div className="member-info text-center w-full">
                  <div className="name-container mb-4 flex items-center justify-center">
                    <FaUser className="text-xl mr-2 text-[#61dafb]" />
                    <h3 className="name text-xl font-semibold">{member.name}</h3>
                  </div>
                  <div className="position-container mb-4 flex justify-between items-center">
                    <p className="position text-lg font-medium text-[#7EC8E3]">{member.position}</p>
                    <button
                      className="plus-icon text-white bg-[#005880] p-2 rounded-full"
                      onClick={() => handleSocialLinksToggle('management', index)}
                    >
                      <FaPlus className="text-xl" />
                    </button>
                  </div>
                </div>
                {member.showSocialLinks && (
                  <div
                    className="social-links-bar absolute top-0 left-0 w-full h-full bg-[#003e63] bg-opacity-90 flex flex-col justify-center items-center p-4 rounded-lg space-y-4 transition-all duration-500 transform translate-y-0"
                  >
                    <button
                      className="close-btn absolute top-4 right-4 text-white text-2xl"
                      onClick={() => closeSocialLinks('management', index)}
                    >
                      <FaTimes />
                    </button>
                    <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon text-2xl text-[#0077b5]" />
                    </a>
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      <FaGlobe className="social-icon text-2xl text-[#4CAF50]" />
                    </a>
                    <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="social-icon text-2xl text-[#25d366]" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Team Section */}
      <section className="dev-team mt-16">
        <h2 className="team-header text-4xl font-bold text-center text-white">Meet Our Development Team</h2>
        <Marquee pauseOnHover gradient={false} speed={50} className="mt-8">
          <div className="team-members development-team-grid flex gap-8">
            {developmentTeam.map((member, index) => (
              <div key={member._id} className={`member card relative w-64 bg-white p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg ${index === 0 ? 'ml-8' : ''} ${index === developmentTeam.length - 1 ? 'mr-8' : ''}`}>
                <div className="circular-number absolute -top-4 -left-4 w-12 h-12 bg-[#005880] text-white text-sm flex items-center justify-center rounded-full" style={{ fontSize: '1rem' }}>
                  {index + 1}
                </div>
                <div className="profile-circle w-32 h-32 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={member.image ? `${imageURL}${member.image}` : 'images/default-avatar.png'}
                    alt={member.name}
                    className="rounded-full w-28 h-28 object-cover"
                  />
                </div>
                <div className="member-info text-center w-full">
                  <div className="name-container mb-2 flex items-center justify-center space-x-2">
                    <FaUser className="text-xl text-[#005880]" />
                    <h3 className="name text-lg font-semibold">{member.name}</h3>
                  </div>
                  <p className="position text-sm font-medium text-[#005880]">{member.position}</p>
                </div>
                {/* Show social media links for development team */}
                {member.teamType === "development" && member.showSocialLinks && (
                  <div className="social-links">
                    <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl text-[#0077b5]" />
                    </a>
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      <FaGlobe className="text-2xl text-[#4CAF50]" />
                    </a>
                    <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="text-2xl text-[#25d366]" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </section>
  );
};

export default Team;
