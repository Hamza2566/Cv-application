import React, { useState } from 'react';

function Form({ handleinputChange, formData, setFormData }) {
  const [skill, setSkill] = useState([{ skill: '' }]);
  const [education, setEducation] = useState([
    {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      gradYear: '', // camelCase
    },
  ]);
  // Inside your component (below education state)
const [experience, setExperience] = useState([
  {
    id: Date.now(),
    company: '',
    position: '',
    startYear: '',
    endYear: '',
  },
]);

const handleExpChange = (e, index) => {
  const { name, value } = e.target;
  const updatedExperience = [...experience];
  updatedExperience[index][name] = value;

  setExperience(updatedExperience);

  setFormData((prevForm) => ({
    ...prevForm,
    experience: updatedExperience,
  }));
};

const addExperience = (e) => {
  e.preventDefault();
  const newEntry = {
    id: Date.now(),
    company: '',
    position: '',
    startYear: '',
    endYear: '',
    description:'',
  };
  const updatedExperience = [...experience, newEntry];
  setExperience(updatedExperience);
  setFormData((prevForm) => ({
    ...prevForm,
    experience: updatedExperience,
  }));
};

const handleSkillChange = (e, index) => {
  const { name, value } = e.target;
  const updatedskill = [...skill];
  updatedskill[index][name] = value;

  setSkill(updatedskill);

  setFormData((prevForm) => ({
    ...prevForm,
    skill: updatedskill,
  }));
  console.log(formData);
  
};

const addSkill = (e) => {
  e.preventDefault();
  const newEntry = { skill: '' };
  const updatedSkills = [...skill, newEntry];
  setSkill(updatedSkills);

  setFormData((prevForm) => ({
    ...prevForm,
    skill: updatedSkills,
  }));
};

const removeSkill = (index) => {
  const updatedSkills = skill.filter((_, i) => i !== index);
  setSkill(updatedSkills);

  setFormData((prevForm) => ({
    ...prevForm,
    skill: updatedSkills,
  }));
};



const removeExperience = (index) => {
  const updatedExperience = experience.filter((_, i) => i !== index);
  setExperience(updatedExperience);
  setFormData((prevForm) => ({
    ...prevForm,
    experience: updatedExperience,
  }));
};

  const handleEduChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;

    setEducation(updatedEducation);

    // Update formData with updated education array
    setFormData((prevForm) => ({
      ...prevForm,
      education: updatedEducation, // Store it as a list under "education"
    }));
    console.log(formData);
    
  };

  const addEducation = (e) => {
    e.preventDefault();
  
    const newEntry = {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      gradYear: '',
    };
  
    const updatedEducation = [...education, newEntry];
  
    setEducation(updatedEducation);
  
    // Update formData with the new education array
    setFormData((prevForm) => ({
      ...prevForm,
      education: updatedEducation,
    }));
  };
  const removeEducation = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  
    // Update formData after removing the entry
    setFormData((prevForm) => ({
      ...prevForm,
      education: updatedEducation,
    }));
  };
  
  
  return (
    <div className="form-container">
      <form>
      <section className="personal-section">
  <h1>Personal Information</h1>
  <div className="form-group">
    <label htmlFor="FirstName">FirstName:</label>
    <input
      type="text"
      id="FirstName"
      name="FirstName"
      required
      onChange={handleinputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="LastName">LastName:</label>
    <input
      type="text"
      id="LastName"
      name="LastName"
      required
      onChange={handleinputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      onChange={handleinputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Phone:</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      required
      onChange={handleinputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="linkedIn">linkedIn:</label>
    <input
      type="text"
      id="linkedIn"
      name="linkedIn"
      required
      onChange={handleinputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="photo">Photo:</label>
    <input
      type="file"
      id="photo"
      name="photo"
      accept="image/*"
      onChange={handleinputChange}
    />
  </div>
</section>


        <section className="education-section">
          {education.map((entry, index) => (
            <div key={entry.id} className="education-entry">
              <h1>Education  {index > 0 ? '#'+index : ''}</h1>
              <div className="form-group">
          

                <label htmlFor={`institution-${index}`}>Institution Name:</label>
                <input
                  type="text"
                  id={`institution-${index}`}
                  name="institution"
                  value={entry.institution}
                  onChange={(e) => handleEduChange(e, index)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`degree-${index}`}>Degree:</label>
                <input
                  type="text"
                  id={`degree-${index}`}
                  name="degree"
                  value={entry.degree}
                  onChange={(e) => handleEduChange(e, index)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`field-${index}`}>Field of Study:</label>
                <input
                  type="text"
                  id={`field-${index}`}
                  name="field"
                  value={entry.field}
                  onChange={(e) => handleEduChange(e, index)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`gradYear-${index}`}>Year of Graduation:</label>
                <input
                  type="number"
                  id={`gradYear-${index}`}
                  name="gradYear"
                  value={entry.gradYear}
                  onChange={(e) => handleEduChange(e, index)}
                  required
                />
                {index > 0 && (
  <button
    className="remove-button"
    type="button"
    onClick={() => removeEducation(index)}
    style={{
      marginTop: '10px',
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
    Remove Education
  </button>
)}

              </div>
            </div>
          ))}
          <button onClick={addEducation}>Add more education</button>
          
        </section>

        <section className="experience-section">
  {experience.map((entry, index) => (
    <div key={entry.id} className="experience-entry">
      <h1>Experience {index > 0 ? `#${index}` : ''}</h1>
      <div className="form-group">
        <label htmlFor={`company-${index}`}>Company:</label>
        <input
          type="text"
          id={`company-${index}`}
          name="company"
          value={entry.company}
          onChange={(e) => handleExpChange(e, index)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`position-${index}`}>Position:</label>
        <input
          type="text"
          id={`position-${index}`}
          name="position"
          value={entry.position}
          onChange={(e) => handleExpChange(e, index)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`startYear-${index}`}>Start Year:</label>
        <input
          type="number"
          id={`startYear-${index}`}
          name="startYear"
          value={entry.startYear}
          onChange={(e) => handleExpChange(e, index)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`endYear-${index}`}>End Year:</label>
        <input
          type="number"
          id={`endYear-${index}`}
          name="endYear"
          value={entry.endYear}
          onChange={(e) => handleExpChange(e, index)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`description-${index}`}>Description:</label>
        <textarea
          id={`description-${index}`}
          name="description"
          value={entry.description}
          onChange={(e) => handleExpChange(e, index)}
          rows="4"
          placeholder="Describe your responsibilities or achievements..."
        />
      </div>

      {index > 0 && (
        <button
          className="remove-button"
          type="button"
          onClick={() => removeExperience(index)}
          style={{
            marginTop: '10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Remove Experience
        </button>
      )}
    </div>
  ))}
  <button onClick={addExperience}>Add more experience</button>
</section>
<section className="skills-section">
  <h1>Skills</h1>
  {skill.map((entry, index) => (
    <div key={index} className="skill-entry">
      <div className="form-group">
        <label htmlFor={`skill-${index}`}>Skill:</label>
        <input
          type="text"
          id={`skill-${index}`}
          name="skill"
          value={entry.skill}
          onChange={(e) => handleSkillChange(e, index)}
          required
        />
      </div>

      {index > 0 && (
        <button
          type="button"
          onClick={() => removeSkill(index)}
          className="remove-button"
          style={{
            marginTop: '10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Remove Skill
        </button>
      )}
    </div>
  ))}

  <button onClick={addSkill}>Add more skills</button>
</section>


      </form>
    </div>
  );
}

export default Form;
