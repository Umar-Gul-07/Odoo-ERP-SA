import React from 'react'
import { Link } from 'react-router-dom'

const SDashboard = () => {
  return (
    <div className="content">
      {/* Page Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Student Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Student Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* /Page Header */}

      {/* Greeting Section */}
      <div className="row">
        <div className="col-md-12 d-flex">
          <div className="card flex-fill bg-primary bg-03">
            <div className="card-body">
              <h1 className="text-white mb-1">Welcome Back!</h1>
              <p className="text-white mb-3">Have a great day of learning</p>
              <p className="text-light">
                Reminder: Your assignment is due tomorrow. Don't forget to submit it!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /Greeting Section */}

      {/* Stats Cards */}
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="avatar bg-primary-transparent">
                    <i className="ti ti-book fs-24 text-primary" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-1">Total Subjects</h6>
                  <h3 className="mb-0">8</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="avatar bg-success-transparent">
                    <i className="ti ti-calendar fs-24 text-success" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-1">Attendance</h6>
                  <h3 className="mb-0">95%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="avatar bg-warning-transparent">
                    <i className="ti ti-file-text fs-24 text-warning" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-1">Assignments</h6>
                  <h3 className="mb-0">12</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="avatar bg-info-transparent">
                    <i className="ti ti-trophy fs-24 text-info" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-1">GPA</h6>
                  <h3 className="mb-0">3.8</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Stats Cards */}

      {/* Today's Schedule */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Today's Schedule</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Subject</th>
                      <th>Teacher</th>
                      <th>Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:00 AM - 09:45 AM</td>
                      <td>Mathematics</td>
                      <td>Mr. Smith</td>
                      <td>Room 101</td>
                    </tr>
                    <tr>
                      <td>10:00 AM - 10:45 AM</td>
                      <td>Science</td>
                      <td>Ms. Johnson</td>
                      <td>Room 205</td>
                    </tr>
                    <tr>
                      <td>11:00 AM - 11:45 AM</td>
                      <td>English</td>
                      <td>Mrs. Williams</td>
                      <td>Room 103</td>
                    </tr>
                    <tr>
                      <td>12:00 PM - 12:45 PM</td>
                      <td>History</td>
                      <td>Mr. Brown</td>
                      <td>Room 201</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Today's Schedule */}

      {/* Recent Assignments */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Recent Assignments</h4>
              <Link to="/assignments" className="link-primary fw-medium">
                View All
              </Link>
            </div>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1">Math Homework - Chapter 5</h6>
                    <p className="mb-0 text-muted">Due: Tomorrow</p>
                  </div>
                  <span className="badge bg-warning">Pending</span>
                </div>
                <div className="list-group-item d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1">Science Project</h6>
                    <p className="mb-0 text-muted">Due: Next Week</p>
                  </div>
                  <span className="badge bg-info">In Progress</span>
                </div>
                <div className="list-group-item d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1">English Essay</h6>
                    <p className="mb-0 text-muted">Submitted: Yesterday</p>
                  </div>
                  <span className="badge bg-success">Submitted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Assignments */}
    </div>
  )
}

export default SDashboard

