import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { imageURL, backEndURL } from "../../Backendurl";
import { FiEdit, FiTrash, FiSearch, FiChevronDown } from "react-icons/fi";
import { MdAddCircle, MdViewList } from "react-icons/md";
import Modal from "react-modal";

const TestimonialsManager = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    message: "",
    rating: "",
  });
  const [image, setImage] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeTab === "view") fetchTestimonials();
  }, [activeTab]);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${backEndURL}/api/testimonials`);
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      Swal.fire("Error!", "Failed to fetch testimonials.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));
    if (image) formDataToSend.append("image", image);

    const url = editingTestimonial
      ? `${backEndURL}/api/testimonials/${editingTestimonial._id}`
      : `${backEndURL}/api/testimonials`;

    try {
      await axios({
        method: editingTestimonial ? "put" : "post",
        url,
        data: formDataToSend,
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire(
        editingTestimonial ? "Updated!" : "Added!",
        `Testimonial ${editingTestimonial ? "updated" : "added"} successfully!`,
        "success"
      );
      setFormData({ name: "", role: "", company: "", message: "", rating: "" });
      setImage(null);
      setEditingTestimonial(null);
      fetchTestimonials();
      setIsModalOpen(false);
    } catch (error) {
      Swal.fire("Error!", "Failed to save testimonial.", "error");
    }
  };

  const handleDeleteTestimonial = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${backEndURL}/api/testimonials/${id}`);
          setTestimonials((prevTestimonials) =>
            prevTestimonials.filter((testimonial) => testimonial._id !== id)
          );
          Swal.fire("Deleted!", "Your testimonial has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the testimonial.", "error");
        }
      }
    });
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
    setIsModalOpen(true);
  };

  const filteredTestimonials = testimonials
    .filter(
      (testimonial) =>
        testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.message.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "rating") return b.rating - a.rating;
      return a[sortOption].localeCompare(b[sortOption]);
    });

  const renderTestimonials = () => {
    if (isLoading) return <p>Loading testimonials...</p>;
    if (!filteredTestimonials.length) return <p>No testimonials found.</p>;

    return filteredTestimonials.map((testimonial) => (
      <div key={testimonial._id} className="border rounded-lg shadow p-4 bg-white hover:shadow-lg transition">
        <img
          src={testimonial.image ? `${imageURL}${testimonial.image}` : "/images/default-avatar.png"}
          alt={testimonial.name}
          className="w-full h-32 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-bold">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
        <p className="text-sm mt-2">{testimonial.message}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500 font-bold">{testimonial.rating} ★</span>
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(testimonial)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FiEdit />
            </button>
            <button
              onClick={() => handleDeleteTestimonial(testimonial._id)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              <FiTrash />
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-6 flex-wrap">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            onClick={() => setActiveTab("add")}
            className={`flex items-center px-4 py-2 rounded ${
              activeTab === "add" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <MdAddCircle className="mr-2" /> Add New
          </button>
          <button
            onClick={() => setActiveTab("view")}
            className={`flex items-center px-4 py-2 rounded ${
              activeTab === "view" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <MdViewList className="mr-2" /> View All
          </button>
        </div>
        {activeTab === "view" && (
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border rounded w-full md:w-auto"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border rounded w-full md:w-auto"
            >
              <option value="name">Sort by Name</option>
              <option value="company">Sort by Company</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        )}
      </div>

      {activeTab === "add" && (
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 gap-4 bg-white p-6 rounded shadow"
        >
          {["name", "role", "company", "message", "rating"].map((field, idx) => (
            <div key={idx}>
              <label className="block mb-1 capitalize">{field}</label>
              {field === "message" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              ) : (
                <input
                  type={field === "rating" ? "number" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                  min={field === "rating" ? 1 : undefined}
                  max={field === "rating" ? 5 : undefined}
                />
              )}
            </div>
          ))}
          <div>
            <label className="block mb-1">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="col-span-1 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            {editingTestimonial ? "Update Testimonial" : "Add Testimonial"}
          </button>
        </form>
      )}

      {activeTab === "view" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {renderTestimonials()}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit Testimonial"
        className="bg-white p-6 rounded shadow max-w-lg mx-auto mt-16 w-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Edit Testimonial</h2>
        <form onSubmit={handleFormSubmit}>
          {["name", "role", "company", "message", "rating"].map((field, idx) => (
            <div key={idx} className="mb-4">
              <label className="block mb-1 capitalize">{field}</label>
              {field === "message" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              ) : (
                <input
                  type={field === "rating" ? "number" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                  min={field === "rating" ? 1 : undefined}
                  max={field === "rating" ? 5 : undefined}
                />
              )}
            </div>
          ))}
          <div className="mb-4">
            <label className="block mb-1">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Update Testimonial
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TestimonialsManager;
