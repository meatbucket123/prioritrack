import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(): JSX.Element {
  return (
    <div className="container">
      {/* Table */}
      <div className="row">
        <div className="column1">
          <button className="button">Export Data</button>
          {/* Use Link for Reports button */}
          <Link to="/reports" className="button">Reports</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Property Location</th>
              <th>Document No.</th>
              <th>Most Recent Document</th>
              <th>Date of Submission</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
        <div className='card-capsule'></div>
        <div className='card'>
          <table className="table2">
            <tbody>
              {/* Sample Row */}
              <tr>
                <td>Jose Reyes</td>
                <td>Property Location</td>
                <td>U052345606-R</td>
                <td><div className='pill2'>Tax Clearance</div></td>
                <td>10/9/2023</td>
                <td><div className='pill'>Missed</div></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        {/* Row 1 - Single Column */}
      </div>
    </div>
  );
}

export default Dashboard;
