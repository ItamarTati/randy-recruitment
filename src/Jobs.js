import React from 'react';
import './index.scss';
import JobBoard from './jobBoard'

function Jobs() {
  return (
    <div className = 'jobs'>
        <h1>Companies Hiring this Week and Next Week</h1>
        <JobBoard />
    </div>
  );
}

export default Jobs;