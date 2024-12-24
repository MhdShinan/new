import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUser, FaRegFileAlt, FaArrowRight, FaTimes, FaPhoneAlt } from 'react-icons/fa'; // React Icons
import axios from 'axios';
import Swal from 'sweetalert2'; // SweetAlert2 for alerting
import { backEndURL } from "../Backendurl";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);

  const handleApplyClick = (title) => {
    setJobTitle(title);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('jobTitle', jobTitle);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('resume', resume);
  
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    try {
      await axios.post(`${backEndURL}/api/apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        text: 'Your application has been successfully submitted.',
      });
  
      // Clear form data after successful submission
      setJobTitle('');
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setResume(null);
  
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
      });
    }
  };
  

  return (
    <div className="font-sans p-6 bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-4xl text-gray-800">Careers at Our Company</h1>
      </header>

      <section className="flex flex-wrap gap-6 justify-center">
        {/* Frontend Developer Intern */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2">
            <FaRegFileAlt className="text-blue-500 text-xl" />
            <h3 className="text-2xl text-gray-800">Frontend Developer Intern</h3>
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" /> Location: Onsite
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaUser className="text-gray-500" /> Experience: Fresher
          </p>
          <p className="text-gray-600">We are seeking an enthusiastic Frontend Developer Trainee with a passion for crafting user-friendly interfaces using React...</p>
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-blue-600"
            onClick={() => handleApplyClick('Frontend Developer Intern')}
          >
            Apply Now
            <FaArrowRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>

        {/* Backend Developer */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2">
            <FaRegFileAlt className="text-blue-500 text-xl" />
            <h3 className="text-2xl text-gray-800">Backend Developer</h3>
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" /> Location: Onsite
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaUser className="text-gray-500" /> Experience: Fresher
          </p>
          <p className="text-gray-600">Join us as a Backend Developer Trainee and build the foundation for robust server-side applications using Node.js...</p>
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-blue-600"
            onClick={() => handleApplyClick('Backend Developer')}
          >
            Apply Now
            <FaArrowRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>

        {/* Java & MySQL Developer */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2">
            <FaRegFileAlt className="text-blue-500 text-xl" />
            <h3 className="text-2xl text-gray-800">Java & MySQL Developer</h3>
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" /> Location: Onsite
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaUser className="text-gray-500" /> Experience: Fresher
          </p>
          <p className="text-gray-600">Kickstart your career as a Java & MySQL Developer Trainee by gaining expertise in backend development and database management...</p>
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-blue-600"
            onClick={() => handleApplyClick('Java & MySQL Developer')}
          >
            Apply Now
            <FaArrowRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>

        {/* Mobile Developer (Flutter/React Native) */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2">
            <FaRegFileAlt className="text-blue-500 text-xl" />
            <h3 className="text-2xl text-gray-800">Mobile Developer (Flutter/React Native)</h3>
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" /> Location: Onsite
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaUser className="text-gray-500" /> Experience: Fresher
          </p>
          <p className="text-gray-600">Begin your journey as a Mobile Developer Trainee by exploring the world of cross-platform app development using Flutter and React Native...</p>
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-blue-600"
            onClick={() => handleApplyClick('Mobile Developer (Flutter/React Native)')}
          >
            Apply Now
            <FaArrowRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-gray-800">Apply for {jobTitle}</h2>
              <FaTimes 
                className="text-gray-500 cursor-pointer" 
                onClick={handleCloseModal} 
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                  <FaUser className="text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-2 text-gray-800 outline-none" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-2 text-gray-800 outline-none" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Enter your address" 
                    className="w-full p-2 text-gray-800 outline-none" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                  <FaPhoneAlt className="text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Enter your phone number" 
                    className="w-full p-2 text-gray-800 outline-none" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Resume (PDF)</label>
                <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                  <FaRegFileAlt className="text-gray-500 mr-2" />
                  <input 
                    type="file" 
                    accept=".pdf" 
                    className="w-full p-2 text-gray-800 outline-none" 
                    onChange={(e) => setResume(e.target.files[0])}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
