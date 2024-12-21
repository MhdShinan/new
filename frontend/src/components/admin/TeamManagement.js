import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamType, setTeamType] = useState('development');
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  // Fetch team members
  const fetchTeamMembers = async () => {
    try {
      const [managementResponse, developmentResponse] = await Promise.all([
        axios.get('http://localhost:3001/api/team?teamType=management'),
        axios.get('http://localhost:3001/api/team?teamType=development')
      ]);
      const combinedMembers = [...managementResponse.data, ...developmentResponse.data];
      setTeamMembers(combinedMembers);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  // Handle form submission (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('teamType', teamType);
    if (image) formData.append('image', image);

    try {
      if (editId) {
        // Send PATCH request to update the team member
        await axios.patch(`http://localhost:3001/api/team/update/${editId}`, formData);
        Swal.fire('Success', 'Team member updated successfully!', 'success');
      } else {
        // Send POST request to add a new team member
        await axios.post('http://localhost:3001/api/team/create', formData);
        Swal.fire('Success', 'Team member added successfully!', 'success');
      }
      fetchTeamMembers();
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error', 'Failed to update team member.', 'error');
    }
  };

  // Handle delete action with SweetAlert2 confirmation
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
          await axios.delete(`http://localhost:3001/api/team/delete/${id}`);
          fetchTeamMembers();
          Swal.fire('Deleted!', 'The team member has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'Failed to delete the team member.', 'error');
        }
      }
    });
  };

  // Handle edit action
  const handleEdit = (member) => {
    setEditId(member._id);
    setName(member.name);
    setPosition(member.position);
    setTeamType(member.teamType);
    setImage(null); // Keep the existing image until a new one is uploaded
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setPosition('');
    setTeamType('development');
    setImage(null);
    setEditId(null);
  };

  return (
    <div className="p-6">
      {/* Section 1: Add or Edit Team Member Form */}
      <h1 className="text-2xl font-bold mb-4">{editId ? 'Edit Team Member' : 'Add Team Member'}</h1>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={teamType}
            onChange={(e) => setTeamType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="management">Management</option>
            <option value="development">Development</option>
          </select>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 rounded"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'} Team Member
        </button>
      </form>

      {/* Section 2: See All Team Members */}
      <h1 className="text-2xl font-bold mb-4 mt-8">See All Team Members</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member._id} className="border p-4 rounded shadow">
            <img
              src={`http://localhost:3001${member.image}`}
              alt={member.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p>{member.position}</p>
            <p className="italic text-sm">{member.teamType === 'management' ? 'Management Team' : 'Development Team'}</p>
            <div className="mt-4 flex justify-between">
              <button onClick={() => handleEdit(member)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(member._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;
