import React, { useState, useEffect } from 'react';
import {FaWhatsapp, FaLinkedin, FaGlobe, FaPlus, FaUser, FaBriefcase, FaTimes, FaFacebook } from 'react-icons/fa'; // React Icons
import '../styles/Team.css'; // Custom styles for Team
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
    if (teamType === 'management') {
      const updatedTeam = [...managementTeam];
      updatedTeam[index].showSocialLinks = !updatedTeam[index].showSocialLinks;
      setManagementTeam(updatedTeam);
    } else if (teamType === 'development') {
      const updatedTeam = [...developmentTeam];
      updatedTeam[index].showSocialLinks = !updatedTeam[index].showSocialLinks;
      setDevelopmentTeam(updatedTeam);
    }
  };

  const closeSocialLinks = (index) => {
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
        <div className="team-members management-team-grid mt-8 flex justify-center">
          {managementTeam.map((member, index) => (
            <div key={member._id} className={`member card relative w-[250px] bg-white p-4 flex flex-col items-center`}>
              <div className="card-content flex flex-col items-center h-full">
                <img
                  src={member.image ? `${imageURL}${member.image}` : 'images/default-avatar.png'}
                  alt={member.name}
                  className="avatar mb-4 rounded-full w-32 h-32 object-cover border-4 border-[#005880]"
                />
                <div className="member-info text-left px-4 w-full">
                  <div className="name-container mb-4 flex items-center">
                    <FaUser className="text-xl mr-2 text-[#61dafb]" />
                    <h3 className="name text-xl font-semibold">{member.name}</h3>
                  </div>
                  <div className="position-container mb-4 flex justify-between items-center">
                    <div className="position flex items-center">
                      <FaBriefcase className="text-lg mr-2 text-[#7EC8E3]" />
                      <p className="position text-lg font-medium text-[#7EC8E3]">{member.position}</p>
                    </div>
                    <button
                      className="plus-icon text-white bg-[#005880] p-2 rounded-full"
                      onClick={() => handleSocialLinksToggle('management', index)}
                    >
                      <FaPlus className="text-xl" />
                    </button>
                  </div>
                </div>
                {member.showSocialLinks && (
                  <div className="social-links-bar absolute top-0 left-0 w-full h-full bg-[#003e63] bg-opacity-90 flex flex-col justify-center items-center p-4 rounded-lg space-y-4">
                    <button
                      className="close-btn absolute top-4 right-4 text-white text-2xl"
                      onClick={() => closeSocialLinks(index)}
                    >
                      <FaTimes />
                    </button>
                    <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="social-icon text-2xl text-[#61dafb]" />
                    </a>
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      <FaGlobe className="social-icon text-2xl text-[#4CAF50]" />
                    </a>
                    <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon text-2xl text-[#0077b5]" />
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
        <div className="team-members development-team-grid mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {developmentTeam.map((member, index) => (
            <div key={member._id} className="member card bg-white p-4 flex flex-col items-center">
              <div className="card-content flex flex-col items-center h-full">
                <img
                  src={member.image ? `${imageURL}${member.image}` : 'images/default-avatar.png'}
                  alt={member.name}
                  className="avatar mb-4 rounded-full w-32 h-32 object-cover border-4 border-[#005880]"
                />
                <div className="member-info text-left px-4 w-full">
                  <div className="name-container mb-4 flex items-center">
                    <FaUser className="text-xl mr-2 text-[#61dafb]" />
                    <h3 className="name text-xl font-semibold">{member.name}</h3>
                  </div>
                  <div className="position-container mb-4 flex items-center">
                    <p className="position text-lg font-medium text-[#7EC8E3]">{member.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Team;
