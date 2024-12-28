import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { backEndURL } from "../../Backendurl";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamType, setTeamType] = useState('development');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editId, setEditId] = useState(null);
  
  const [whatsapp, setWhatsapp] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');
  
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const fileInputRef = useRef(null); // Ref for file input

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${backEndURL}/api/team`);
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('teamType', teamType);
    if (image) formData.append('image', image);
  
    if (teamType === 'management') {
      formData.append('whatsapp', whatsapp);
      formData.append('linkedin', linkedin);
      formData.append('website', website);
    }
  
    try {
      if (editId) {
        await axios.patch(`${backEndURL}/api/team/update/${editId}`, formData);
        Swal.fire({
          title: 'Success!',
          text: 'Team member updated successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          resetForm();
          fetchTeamMembers();
        });
      } else {
        await axios.post(`${backEndURL}/api/team/create`, formData);
        Swal.fire({
          title: 'Success!',
          text: 'Team member added successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          resetForm();
          fetchTeamMembers();
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error', 'Failed to submit the team member.', 'error');
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${backEndURL}/api/team/delete/${id}`);
          fetchTeamMembers();
          Swal.fire('Deleted!', 'The team member has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'Failed to delete the team member.', 'error');
        }
      }
    });
  };

  const handleEdit = (member) => {
    setEditId(member._id);
    setName(member.name);
    setPosition(member.position);
    setTeamType(member.teamType);
    setWhatsapp(member.whatsapp || '');
    setLinkedin(member.linkedin || '');
    setWebsite(member.website || '');
    setImage(null);
  };

  const resetForm = () => {
    setName('');
    setPosition('');
    setTeamType('development');
    setWhatsapp('');
    setLinkedin('');
    setWebsite('');
    setImage(null);
    setImagePreview(null);
    setEditId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear file input value
    }
  };

  const filteredMembers = teamMembers.filter(
    (member) =>
      (filter === 'all' || member.teamType === filter) &&
      member.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{editId ? 'Edit Team Member' : 'Add Team Member'}</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={teamType}
          onChange={(e) => setTeamType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="management">Management</option>
          <option value="development">Development</option>
        </select>
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 rounded w-full"
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded mb-4" />
        )}
        {teamType === 'management' && (
          <>
            <input
              type="text"
              placeholder="WhatsApp Link"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="LinkedIn Link"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Website Link"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {editId ? 'Update' : 'Add'} Team Member
        </button>
      </form>

      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Team Members</h1>
        <div className="flex gap-4 items-center mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded flex-grow"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All Teams</option>
            <option value="management">Management</option>
            <option value="development">Development</option>
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedMembers.map((member) => (
            <div key={member._id} className="border p-4 rounded shadow">
              <img
                src={`${backEndURL}${member.image}`}
                alt={member.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p>{member.position}</p>
              <p className="italic text-sm">{member.teamType}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-1"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded flex items-center gap-1"
                >
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(filteredMembers.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
