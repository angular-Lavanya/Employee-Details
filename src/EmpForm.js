import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const EmpForm = () => {
  const [applicants, setApplicants] = useState([
    { name: 'Employee1', isPrimary: true },
    { name: 'Employee2', isPrimary: false }
    
    
    // Add more applicants as needed
  ]);

  const handleCheckboxChange = (index) => {
    const updatedApplicants = applicants.map((applicant, i) => ({
      ...applicant,
      isPrimary: i === index,
    }));

    setApplicants(updatedApplicants);
  };

  return (
    <div className="container mt-5">
            <div className="card">
               
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/" className="btn btn-success">Back</Link>
                    </div>
                    
                    <form>
      {applicants.map((applicant, index) => (
        <div key={index}>
          <label>
            {applicant.name}
            <input
              type="checkbox"
              checked={applicant.isPrimary}
              onChange={() => handleCheckboxChange(index)}
            />
            Primary Applicant
          </label>
        </div>
      ))}
    </form>
                </div>
            </div>
        </div>
   
  );
};

export default EmpForm;
