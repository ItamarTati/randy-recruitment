import React from 'react'
import './index.scss'; 
import googleImage from './google-logo.jpeg'
import Data from './Data'




function jobBoard() {
    return ( Data.map((data) =>
      <div className="latest-jobs">
        
        <div className="job-img">
            <img alt="Google " src={googleImage}/>
        </div>
        
        <div className="main-details">
            <h3>{data.companyName} </h3>
            <p>{data.jobTitle}</p>
            <p>Based: {data.based}</p>
            <p>Salary: {data.salary}</p>
        </div>
        
        <div className = 'applyButtonDiv'> <button  className="applyButton" >Apply</button></div>        
      </div>)
      
    );
  }
  
  export default jobBoard;