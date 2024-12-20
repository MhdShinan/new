import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageURL } from "../../Backendurl";
import Swal from "sweetalert2";
import { backEndURL } from "../../Backendurl";

const TestimonialsManager = () => {
  const [activeTab, setActiveTab] = useState("add"); // "add" or "view"
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    message: "",
    rating: "",
  });
  const [image, setImage] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [editingTestimonial, setEditingTestimonial] = useState(null); // To track the testimonial being edited

  // Fetch testimonials when "See All" is active
  useEffect(() => {
    if (activeTab === "view") {
      axios
        .get(`${backEndURL}/api/testimonials`)
        .then((response) => {
          setTestimonials(response.data);
        })
        .catch((error) => console.error("Error fetching testimonials:", error));
    }
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("rating", formData.rating);
    formDataToSend.append("image", image);

    try {
      const response = await axios.post(`${backEndURL}/api/testimonials`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {
        setStatusMessage("Testimonial added successfully!");
        setFormData({
          name: "",
          role: "",
          company: "",
          message: "",
          rating: "",
        });
        setImage(null);
        Swal.fire("Success!", "Testimonial added successfully!", "success");
      }
    } catch (error) {
      setStatusMessage("Error adding testimonial.");
      Swal.fire("Error!", "There was an error adding the testimonial.", "error");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${backEndURL}/api/testimonials/${id}`);
      if (response.data.success) {
        setTestimonials((prev) => prev.filter((testimonial) => testimonial._id !== id));
        setStatusMessage("Testimonial deleted successfully.");
        Swal.fire("Deleted!", "Testimonial deleted successfully.", "success");
      }
    } catch (error) {
      setStatusMessage("Error deleting testimonial.");
      Swal.fire("Error!", "There was an error deleting the testimonial.", "error");
    }
  };
  

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      message: testimonial.message,
      rating: testimonial.rating,
    });
    setImage(testimonial.image); // Set the current image if available
    setActiveTab("add"); // Switch to "Add" tab to show the form
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("rating", formData.rating);
    formDataToSend.append("image", image);

    try {
      const response = await axios.put(`${backEndURL}/api/testimonials/${editingTestimonial._id}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {
        setStatusMessage("Testimonial updated successfully!");
        setTestimonials((prev) =>
          prev.map((testimonial) =>
            testimonial._id === editingTestimonial._id ? response.data.testimonial : testimonial
          )
        );
        setEditingTestimonial(null); // Clear editing state
        setFormData({
          name: "",
          role: "",
          company: "",
          message: "",
          rating: "",
        });
        setImage(null);
        Swal.fire("Updated!", "Testimonial updated successfully!", "success");
      }
    } catch (error) {
      setStatusMessage("Error updating testimonial.");
      Swal.fire("Error!", "There was an error updating the testimonial.", "error");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setActiveTab("add")}
          className={`px-4 py-2 ${activeTab === "add" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Add New
        </button>
        <button
          onClick={() => setActiveTab("view")}
          className={`px-4 py-2 ${activeTab === "view" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          See All
        </button>
      </div>

      {statusMessage && <p className="text-green-500 mb-4">{statusMessage}</p>}

      {activeTab === "add" && (
        <form onSubmit={editingTestimonial ? handleUpdate : handleSubmit} encType="multipart/form-data" className="space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
            {editingTestimonial ? "Update" : "Submit"}
          </button>
          {editingTestimonial && (
            <button
              type="button"
              onClick={() => setEditingTestimonial(null)}
              className="bg-gray-500 text-white px-6 py-2 rounded ml-2"
            >
              Cancel
            </button>
          )}
        </form>
      )}

      {activeTab === "view" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={testimonial.image ? `${imageURL}${testimonial.image}` : "images/default-avatar.png"}
                alt={testimonial.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role} at {testimonial.company}</p>
                <p className="mt-2 text-sm">{testimonial.message}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">{testimonial.rating}★</span>
                  <div>
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsManager;
