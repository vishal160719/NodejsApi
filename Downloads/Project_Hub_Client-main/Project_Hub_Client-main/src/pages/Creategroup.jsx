import React, { useState } from 'react';
import './CreateGroup.css';
import AddGroupModal from './AddGroupModal';

const Creategroup = () => {
  const [groupdetails, setgroupdetails] = useState({
    memberNames: ['', '', ''],
    projects: [
      {
        title: '',
        abstract: '',
        attachmentPdf: null,
      },
      {
        title: '',
        abstract: '',
        attachmentPdf: null,
      },
    ],
  });

  const handleMemberNameChange = (e, index) => {
    const updatedMemberNames = [...groupdetails.memberNames];
    updatedMemberNames[index] = e.target.value;
    setgroupdetails({ ...groupdetails, memberNames: updatedMemberNames });
  };

  const handleProjectChange = (e, projectIndex, field) => {
    const updatedProjects = [...groupdetails.projects];
    updatedProjects[projectIndex][field] = e.target.value;
    setgroupdetails({ ...groupdetails, projects: updatedProjects });
  };

  const handleProjectAttachment = (e, projectIndex) => {
    const selectedPdf = e.target.files[0];
    const updatedProjects = [...groupdetails.projects];
    updatedProjects[projectIndex].attachmentPdf = selectedPdf;
    setgroupdetails({ ...groupdetails, projects: updatedProjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic here
  };

  return (
    <div className="group-details-container">
      <h1 className="group-details-title text-title-md2 font-semibold text-black dark:text-white">Group Details</h1>
      <AddGroupModal />
      <form onSubmit={handleSubmit} className="group-details-form">
        {/* Member Box */}
        <div className="member-box">
          <h2>Members</h2>
          {groupdetails.memberNames.map((memberName, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Member ${index + 1}`}
              value={memberName}
              onChange={(e) => handleMemberNameChange(e, index)}
              className="group-details-input"
            />
          ))}
        </div>

        {/* Project Boxes */}
        <div className="project-box text-title-md2 font-semibold text-black dark:text-white">
          <h1>Project 1</h1>
          <input
            type="text"
            placeholder="Title"
            value={groupdetails.projects[0].title}
            onChange={(e) => handleProjectChange(e, 0, 'title')}
            className="group-details-input"
          />
          <input
            type="text"
            placeholder="Abstract"
            value={groupdetails.projects[0].abstract}
            onChange={(e) => handleProjectChange(e, 0, 'abstract')}
            className="group-details-input"
          />
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleProjectAttachment(e, 0)}
            className="group-details-input"
          />
        </div>

        <div className="project-box text-title-md2 font-semibold text-black dark:text-white">
          <h1>Project 2</h1>
          <input
            type="text"
            placeholder="Title"
            value={groupdetails.projects[1].title}
            onChange={(e) => handleProjectChange(e, 1, 'title')}
            className="group-details-input"
          />
          <input
            type="text"
            placeholder="Abstract"
            value={groupdetails.projects[1].abstract}
            onChange={(e) => handleProjectChange(e, 1, 'abstract')}
            className="group-details-input"
          />
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleProjectAttachment(e, 1)}
            className="group-details-input"
          />
        </div>

        <button
          type="submit"
          className="group-details-submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Creategroup;
