import '/cv.css'

function Cv({ value }) {
  return (
    <div className="cv">
      <div className="sidebar">
      <div className="photo-container">
  <div
    className="profile-photo"
    style={{
      backgroundImage: `url(${value.photo})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: '50%',
      marginBottom: '10px',
      backgroundColor: 'black',
      marginLeft: '10px',
      
    }}
  ></div>
</div>

  <div className="info">
  <span className="name">{value.FirstName} {value.LastName}</span>

  <p>
    <span className="field-label">📧</span>
    <span className="field-value email">{value.email}</span>
  </p>
  <p>
    <span className="field-label">📞</span>
    <span className="field-value">{value.phone}</span>
  </p>
  <p>
    <span className="field-label">🔗 </span>
    <span className="field-value">{value.linkedIn}</span>
  </p>

  </div>
       
</div>

      
        
        <div className="content">

        <div className="name">
        </div>
    

      <div className="cv-section">
        <h2 className="section-title">Education</h2>
        {value.education?.map((edu, i) => (
          <div key={i} className={`education-entry ${i % 2 === 0 ? 'even' : 'odd'}`}>
            <p><span className="field-label">Institution:</span>{edu.degree} {edu.institution}</p>
            <p><span className="field-label">Degree:</span> {edu.degree}</p>
            <p><span className="field-label">Field:</span> {edu.field}</p>
            <p><span className="field-label">Graduation Year:</span> {edu.gradYear}</p>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2 className="section-title">Experience</h2>
        {value.experience?.map((exp, i) => (
          <div key={i} className={`experience-entry ${i % 2 === 0 ? 'even' : 'odd'}`}>
            <p><span className="field-label">Company:</span> {exp.company}</p>
            <p><span className="field-label">Position:</span> {exp.position}</p>
            <p><span className="field-label">Start Year:</span> {exp.startYear}</p>
            <p><span className="field-label">End Year:</span> {exp.endYear}</p>
            <p><span className="field-label">description:</span> {exp.description}</p>
          </div>
        ))}
      </div>
      <div className="skill">
        <h2>Skills</h2>
        {value.skill?.map((entry, i) => (
  <div key={i} className={`skill-entry ${i % 2 === 0 ? 'even' : 'odd'}`}>
    <li>
      {entry.skill}
    </li>
  </div>
))}

        </div>
        </div>
    </div>
  );
}

export default Cv;