import React from 'react'
import './index.scss'; 
import googleImage from './google-logo.jpeg'
import Data from './Data'


function jobBoard() {
    return (
      <div className="latest-jobs">
        
        <div className="job-img">
            <img alt="Google " src={googleImage}/>
        </div>
        
        <div className="main-details">
            <p>Google </p>
            <p>Junior-Mid Weight Designer</p>
            <p>Salary</p>
        </div>
        
        <div className="secondary-details">
          <p>Based: London</p>
          <p>Exprience Needed: Undisclosed</p>
          <p>Contract: Fixed-term</p>
        </div>
      
      </div>
      
    );
  }
  
  export default jobBoard;