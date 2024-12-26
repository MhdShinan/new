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
    <h2 className="text-4xl font-bold text-white">Meet Our Management Team</h2>
    <div className="mt-8 flex justify-center flex-wrap gap-8">
      {managementTeam.map((member, index) => (
        <div
          key={member._id}
          className="relative w-72 bg-white p-6 flex flex-col items-center rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          {/* Profile Image */}
          <img
            src={member.image ? `${imageURL}${member.image}` : 'images/default-avatar.png'}
            alt={member.name}
            className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-gray-200"
          />

          {/* Member Info */}
          <h3 className="text-xl font-bold text-[#005880]">{member.name}</h3>
          <p className="text-gray-500 text-sm font-medium">{member.position}</p>
          <div className="w-16 h-0.5 bg-[#005880] mt-2"></div>

          {/* Social Bar */}
          <div
  className="w-full mt-6 bg-[#D9D9D9] py-2 rounded-full flex justify-around"
  style={{ boxShadow: '0 4px 6px rgba(0, 88, 128, 0.81)' }}>
            <a
              href={member.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#005880] rounded-full flex justify-center items-center transition-transform hover:scale-110"
            >
              <FaWhatsapp className="text-white text-lg" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#005880] rounded-full flex justify-center items-center transition-transform hover:scale-110"
            >
              <FaLinkedin className="text-white text-lg" />
            </a>
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#005880] rounded-full flex justify-center items-center transition-transform hover:scale-110"
            >
              <FaGlobe className="text-white text-lg" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>

     {/* Development Team Section */}
<section className="dev-team mt-16">
  <h2 className="team-header text-4xl font-bold text-center text-white">
    Meet Our Development Team
  </h2>
  <Marquee pauseOnClick gradient={false} speed={50} className="mt-8">
    <div className="team-members flex gap-8">
      {/* Placeholder card at the beginning */}


      {developmentTeam.map((member, index) => (
        <div
          key={member._id}
          className="team-card relative w-64 bg-white p-6 flex flex-col items-center rounded-xl shadow-lg"
        >
          {/* Profile Picture */}
          <div className="profile-circle w-32 h-32 rounded-full flex items-center justify-center shadow-inner mb-4">
            <img
              src={member.image ? `${imageURL}${member.image}` : 'images/default-avatar.png'}
              alt={member.name}
              className="rounded-full w-28 h-28 object-cover border border-gray-300"
            />
          </div>

          {/* Member Info */}
          <div className="member-info text-center w-full">
            <h3 className="name text-xl font-bold text-[#005880] mb-1">{member.name}</h3>
            <p className="position text-sm font-medium text-gray-600">{member.position}</p>
            <hr className="w-12 border-t-2 border-[#005880] mt-2 mx-auto" />
          </div>

          {/* Social Media Links */}
          {member.teamType === 'development' && member.showSocialLinks && (
            <div className="social-links flex justify-center gap-4 mt-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-[#0077b5]" />
                </a>
              )}
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-2xl text-[#4CAF50]" />
                </a>
              )}
              {member.whatsapp && (
                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl text-[#25d366]" />
                </a>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Placeholder card at the end */}
      <div className="team-card relative w-2 bg-transparent"></div>
    </div>
  </Marquee>
</section>


    </section>
  );
};

export default Team;
