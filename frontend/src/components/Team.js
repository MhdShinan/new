import React, { useEffect, useState } from 'react';
import { FaUser, FaBriefcase, FaPlus, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Added GitHub, WhatsApp, LinkedIn
import '../styles/Team.css';

const Team = () => {
  const [managementTeam, setManagementTeam] = useState([]);
  const [developmentTeam, setDevelopmentTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const managementResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/team?teamType=management`);
        const managementData = await managementResponse.json();

        const developmentResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/team?teamType=development`);
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

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section className="team-section py-16 px-8 lg:px-24 bg-[#005880]">
      {/* Management Team Section */}
      <section className="management-team text-center">
        <h2 className="team-header text-4xl font-bold text-white">Meet Our Management Team</h2>
        <div className="team-members management-team-grid mt-8">
          {managementTeam.map((member, index) => (
            <div key={member._id} className={`member card animate__animated animate__fadeIn animate__delay-${index + 1}s`}>
              <img
                src={member.image ? `${process.env.REACT_APP_API_URL}${member.image}` : 'images/default-avatar.png'}
                alt={member.name}
                className="avatar mb-4 rounded-full w-40 h-40 object-cover border-4 border-[#005880]"
              />
              <div className="member-info">
                <div className="name-container flex justify-between items-center mb-4">
                  <div className="position-container">
                    <div className="flex items-center">
                      <FaUser className="icon text-2xl text-[#005880] mr-2" />
                      <h3 className="name text-xl font-semibold">{member.name}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaBriefcase className="icon text-2xl text-[#005880] mr-2" />
                      <p className="position text-lg text-[#7EC8E3]">{member.position}</p>
                    </div>
                  </div>
                  <div className="social-links-toggle mt-4">
                    <button className="plus-icon" onClick={() => handleSocialLinksToggle('management', index)}>
                      <FaPlus className="text-xl text-white" />
                    </button>
                  </div>
                </div>
                {member.showSocialLinks && (
                  <div className="social-links-bar animate__animated animate__fadeInUp">
                    <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="social-icon" />
                    </a>
                    <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="social-icon" />
                    </a>
                    <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon" />
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
        <div className="team-members development-team-grid mt-8">
          {developmentTeam.map((member, index) => (
            <div key={member._id} className={`member card animate__animated animate__fadeIn animate__delay-${index + 1}s`}>
              <img
                src={member.image ? `${process.env.REACT_APP_API_URL}${member.image}` : 'images/default-avatar.png'}
                alt={member.name}
                className="avatar mb-4 rounded-full w-40 h-40 object-cover border-4 border-[#005880]"
              />
              <div className="member-info">
                <div className="name-container flex justify-between items-center mb-4">
                  <div className="position-container">
                    <div className="flex items-center">
                      <FaUser className="icon text-2xl text-[#005880] mr-2" />
                      <h3 className="name text-xl font-semibold">{member.name}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaBriefcase className="icon text-2xl text-[#005880] mr-2" />
                      <p className="position text-lg text-[#7EC8E3]">{member.position}</p>
                    </div>
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