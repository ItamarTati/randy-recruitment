import React from 'react'
import './index.scss'; 
import googleImage from './google-logo.jpeg'
import Data from './Data'
import { Link } from 'react-router-dom';



let jobs = Data()

function jobBoard() {
    return ( jobs.map((job) =>
      <div className="latest-jobs">
        
        <div className="job-img">
            <img alt="Google " src={googleImage}/>
        </div>
        
        <div className="main-details">
            <h3>{job.companyName} </h3>
            <p>{job.jobTitle}</p>
            <p>Based: {job.based}</p>
            <p>Salary: {job.salary}</p>
            <p></p>
        </div>
        
        <div className = 'applyButtonDiv'> <Link to={`/${job.id}`} ><button  className="applyButton" >Apply</button></Link></div>        
      </div>
      
      )
      
    );
  }
  
  export default jobBoard;