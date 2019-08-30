import React from 'react';
import './index.scss';
import JobBoard from './jobBoard'

function Jobs() {
  return (
    <div className = 'jobs'>
        <h1>Latest Posts</h1>
        <JobBoard />
    </div>
  );
}

export default Jobs;