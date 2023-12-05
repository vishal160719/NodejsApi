import React, { useState } from 'react';

const Addproject = () => {
  const [projectDetails, setProjectDetails] = useState({
    profileImage: null, // Initialize 'profileImage' as null
    title: '',
    description: '',
    sem: '',
    subject: '',
    githubLink: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleProfileImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setProjectDetails({ ...projectDetails, profileImage: selectedImage });
  };

  const handleImageUpload = (e) => {
    const selectedImages = Array.from(e.target.files);
    setProjectDetails({ ...projectDetails, images: selectedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      profileImage: projectDetails.profileImage,
      title: projectDetails.title,
      userName: 'Your User Name', // Replace with actual user name
      sem: projectDetails.sem,
    };
  
    setSubmittedProjects([...submittedProjects, newProject]); // Update the submitted projects state
  };
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Project Details</h1>
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Profile Image */}
        <div className="mb-4">
          <label className="block text-gray-600">Project Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageUpload}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          {projectDetails.profileImage && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(projectDetails.profileImage)}
                alt="Profile"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Project Title</label>
          <input
            type="text"
            name="title"
            value={projectDetails.title}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            name="description"
            value={projectDetails.description}
            onChange={handleInputChange}
            rows="4"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-600">Semester</label>
          <select
            name="sem"
            value={projectDetails.sem}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Semester</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Subject</label>
          <input
            type="text"
            name="subject"
            value={projectDetails.subject}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">GitHub Link</label>
          <input
            type="text"
            name="githubLink"
            value={projectDetails.githubLink}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Upload Images</label>
          <input
            type="file"
            multiple // Allow multiple file selection
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        {projectDetails.images.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-600">Selected Images:</label>
            <div className="flex flex-wrap">
              {projectDetails.images.map((image, index) => (
                <div key={index} className="mr-2 mb-2">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected Image ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addproject;
