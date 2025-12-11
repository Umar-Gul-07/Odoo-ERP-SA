import React from 'react'

const Home = () => {
  return (
    <>
      
      <div className="content">
  {/* Page Header */}
  <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
    <div className="my-auto mb-2">
      <h3 className="page-title mb-1">Admin Dashboard</h3>
      <nav>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Admin Dashboard
          </li>
        </ol>
      </nav>
    </div>
    <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
      <div className="mb-2">
        <a
          href="add-student.html"
          className="btn btn-primary d-flex align-items-center me-3"
        >
          <i className="ti ti-square-rounded-plus me-2" />
          Add New Student
        </a>
      </div>
      <div className="mb-2">
        <a
          href="collect-fees.html"
          className="btn btn-light d-flex align-items-center"
        >
          Fees Details
        </a>
      </div>
    </div>
  </div>
  {/* /Page Header */}
  <div className="row">
    <div className="col-md-12">
      <div className="alert-message">
        <div
          className="alert alert-success rounded-pill d-flex align-items-center justify-content-between border-success mb-4"
          role="alert"
        >
          <div className="d-flex align-items-center">
            <span className="me-1 avatar avatar-sm flex-shrink-0">
              <img
                src="assets/img/profiles/avatar-27.jpg"
                alt="Img"
                className="img-fluid rounded-circle"
              />
            </span>
            <p>
              Fahed III,C has paid Fees for the{" "}
              <strong className="mx-1">“Term1”</strong>
            </p>
          </div>
          <button
            type="button"
            className="btn-close p-0"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
            <span>
              <i className="ti ti-x" />
            </span>
          </button>
        </div>
      </div>
      {/* Dashboard Content */}
      <div className="card bg-dark">
        <div className="overlay-img">
          <img
            src="assets/img/bg/shape-04.png"
            alt="img"
            className="img-fluid shape-01"
          />
          <img
            src="assets/img/bg/shape-01.png"
            alt="img"
            className="img-fluid shape-02"
          />
          <img
            src="assets/img/bg/shape-02.png"
            alt="img"
            className="img-fluid shape-03"
          />
          <img
            src="assets/img/bg/shape-03.png"
            alt="img"
            className="img-fluid shape-04"
          />
        </div>
        <div className="card-body">
          <div className="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column">
            <div className="mb-3 mb-xl-0">
              <div className="d-flex align-items-center flex-wrap mb-2">
                <h1 className="text-white me-2">Welcome Back, Mr. Herald</h1>
                <a
                  href="profile.html"
                  className="avatar avatar-sm img-rounded bg-gray-800 dark-hover"
                >
                  <i className="ti ti-edit text-white" />
                </a>
              </div>
              <p className="text-white">Have a Good day at work</p>
            </div>
            <p className="text-white">
              <i className="ti ti-refresh me-1" />
              Updated Recently on 15 Jun 2024
            </p>
          </div>
        </div>
      </div>
      {/* /Dashboard Content */}
    </div>
  </div>
  <div className="row">
    {/* Total Students */}
    <div className="col-xxl-3 col-sm-6 d-flex">
      <div className="card flex-fill animate-card border-0">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-xl bg-danger-transparent me-2 p-1">
              <img src="assets/img/icons/student.svg" alt="img" />
            </div>
            <div className="overflow-hidden flex-fill">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="counter">3654</h2>
                <span className="badge bg-danger">1.2%</span>
              </div>
              <p>Total Students</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
            <p className="mb-0">
              Active : <span className="text-dark fw-semibold">3643</span>
            </p>
            <span className="text-light">|</span>
            <p>
              Inactive : <span className="text-dark fw-semibold">11</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* /Total Students */}
    {/* Total Teachers */}
    <div className="col-xxl-3 col-sm-6 d-flex">
      <div className="card flex-fill animate-card border-0">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-xl me-2 bg-secondary-transparent p-1">
              <img src="assets/img/icons/teacher.svg" alt="img" />
            </div>
            <div className="overflow-hidden flex-fill">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="counter">284</h2>
                <span className="badge bg-skyblue">1.2%</span>
              </div>
              <p>Total Teachers</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
            <p className="mb-0">
              Active : <span className="text-dark fw-semibold">254</span>
            </p>
            <span className="text-light">|</span>
            <p>
              Inactive : <span className="text-dark fw-semibold">30</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* /Total Teachers */}
    {/* Total Staff */}
    <div className="col-xxl-3 col-sm-6 d-flex">
      <div className="card flex-fill animate-card border-0">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-xl me-2 bg-warning-transparent p-1">
              <img src="assets/img/icons/staff.svg" alt="img" />
            </div>
            <div className="overflow-hidden flex-fill">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="counter">162</h2>
                <span className="badge bg-warning">1.2%</span>
              </div>
              <p>Total Staff</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
            <p className="mb-0">
              Active : <span className="text-dark fw-semibold">161</span>
            </p>
            <span className="text-light">|</span>
            <p>
              Inactive : <span className="text-dark fw-semibold">02</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* /Total Staff */}
    {/* Total Subjects */}
    <div className="col-xxl-3 col-sm-6 d-flex">
      <div className="card flex-fill animate-card border-0">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-xl me-2 bg-success-transparent p-1">
              <img src="assets/img/icons/subject.svg" alt="img" />
            </div>
            <div className="overflow-hidden flex-fill">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="counter">82</h2>
                <span className="badge bg-success">1.2%</span>
              </div>
              <p>Total Subjects</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
            <p className="mb-0">
              Active : <span className="text-dark fw-semibold">81</span>
            </p>
            <span className="text-light">|</span>
            <p>
              Inactive : <span className="text-dark fw-semibold">01</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* /Total Subjects */}
  </div>
  <div className="row">
    {/* Schedules */}
    <div className="col-xxl-4 col-xl-6 col-md-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div>
            <h4 className="card-title">Schedules</h4>
          </div>
          <a
            href="#"
            className="link-primary fw-medium me-2"
            data-bs-toggle="modal"
            data-bs-target="#add_event"
          >
            <i className="ti ti-square-plus me-1" />
            Add New
          </a>
        </div>
        <div className="card-body">
          <div className="datepic mb-4">
            <div className="bootstrap-datetimepicker-widget usetwentyfour">
              <ul className="list-unstyled">
                <li>
                  <div className="datepicker">
                    <div className="datepicker-days" style={{}}>
                      <table className="table-condensed">
                        <thead>
                          <tr>
                            <th className="prev" data-action="previous">
                              <span
                                className="fas fa-angle-left"
                                title="Previous Month"
                              />
                            </th>
                            <th
                              className="picker-switch"
                              data-action="pickerSwitch"
                              colSpan={5}
                              title="Select Month"
                            >
                              December 2025
                            </th>
                            <th className="next" data-action="next">
                              <span
                                className="fas fa-angle-right"
                                title="Next Month"
                              />
                            </th>
                          </tr>
                          <tr>
                            <th className="dow">Su</th>
                            <th className="dow">Mo</th>
                            <th className="dow">Tu</th>
                            <th className="dow">We</th>
                            <th className="dow">Th</th>
                            <th className="dow">Fr</th>
                            <th className="dow">Sa</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              data-action="selectDay"
                              data-day="11/30/2025"
                              className="day old weekend"
                            >
                              30
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/01/2025"
                              className="day"
                            >
                              1
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/02/2025"
                              className="day"
                            >
                              2
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/03/2025"
                              className="day"
                            >
                              3
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/04/2025"
                              className="day"
                            >
                              4
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/05/2025"
                              className="day"
                            >
                              5
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/06/2025"
                              className="day weekend"
                            >
                              6
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-action="selectDay"
                              data-day="12/07/2025"
                              className="day weekend"
                            >
                              7
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/08/2025"
                              className="day"
                            >
                              8
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/09/2025"
                              className="day"
                            >
                              9
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/10/2025"
                              className="day"
                            >
                              10
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/11/2025"
                              className="day active today"
                            >
                              11
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/12/2025"
                              className="day"
                            >
                              12
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/13/2025"
                              className="day weekend"
                            >
                              13
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-action="selectDay"
                              data-day="12/14/2025"
                              className="day weekend"
                            >
                              14
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/15/2025"
                              className="day"
                            >
                              15
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/16/2025"
                              className="day"
                            >
                              16
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/17/2025"
                              className="day"
                            >
                              17
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/18/2025"
                              className="day"
                            >
                              18
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/19/2025"
                              className="day"
                            >
                              19
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/20/2025"
                              className="day weekend"
                            >
                              20
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-action="selectDay"
                              data-day="12/21/2025"
                              className="day weekend"
                            >
                              21
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/22/2025"
                              className="day"
                            >
                              22
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/23/2025"
                              className="day"
                            >
                              23
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/24/2025"
                              className="day"
                            >
                              24
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/25/2025"
                              className="day"
                            >
                              25
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/26/2025"
                              className="day"
                            >
                              26
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/27/2025"
                              className="day weekend"
                            >
                              27
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-action="selectDay"
                              data-day="12/28/2025"
                              className="day weekend"
                            >
                              28
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/29/2025"
                              className="day"
                            >
                              29
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/30/2025"
                              className="day"
                            >
                              30
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="12/31/2025"
                              className="day"
                            >
                              31
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/01/2026"
                              className="day new"
                            >
                              1
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/02/2026"
                              className="day new"
                            >
                              2
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/03/2026"
                              className="day new weekend"
                            >
                              3
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-action="selectDay"
                              data-day="01/04/2026"
                              className="day new weekend"
                            >
                              4
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/05/2026"
                              className="day new"
                            >
                              5
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/06/2026"
                              className="day new"
                            >
                              6
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/07/2026"
                              className="day new"
                            >
                              7
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/08/2026"
                              className="day new"
                            >
                              8
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/09/2026"
                              className="day new"
                            >
                              9
                            </td>
                            <td
                              data-action="selectDay"
                              data-day="01/10/2026"
                              className="day new weekend"
                            >
                              10
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="datepicker-months"
                      style={{ display: "none" }}
                    >
                      <table className="table-condensed">
                        <thead>
                          <tr>
                            <th className="prev" data-action="previous">
                              <span
                                className="fas fa-angle-left"
                                title="Previous Year"
                              />
                            </th>
                            <th
                              className="picker-switch"
                              data-action="pickerSwitch"
                              colSpan={5}
                              title="Select Year"
                            >
                              2025
                            </th>
                            <th className="next" data-action="next">
                              <span
                                className="fas fa-angle-right"
                                title="Next Year"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={7}>
                              <span data-action="selectMonth" className="month">
                                Jan
                              </span>
                              <span data-action="selectMonth" className="month">
                                Feb
                              </span>
                              <span data-action="selectMonth" className="month">
                                Mar
                              </span>
                              <span data-action="selectMonth" className="month">
                                Apr
                              </span>
                              <span data-action="selectMonth" className="month">
                                May
                              </span>
                              <span data-action="selectMonth" className="month">
                                Jun
                              </span>
                              <span data-action="selectMonth" className="month">
                                Jul
                              </span>
                              <span data-action="selectMonth" className="month">
                                Aug
                              </span>
                              <span data-action="selectMonth" className="month">
                                Sep
                              </span>
                              <span data-action="selectMonth" className="month">
                                Oct
                              </span>
                              <span data-action="selectMonth" className="month">
                                Nov
                              </span>
                              <span
                                data-action="selectMonth"
                                className="month active"
                              >
                                Dec
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="datepicker-years"
                      style={{ display: "none" }}
                    >
                      <table className="table-condensed">
                        <thead>
                          <tr>
                            <th className="prev" data-action="previous">
                              <span
                                className="fas fa-angle-left"
                                title="Previous Decade"
                              />
                            </th>
                            <th
                              className="picker-switch"
                              data-action="pickerSwitch"
                              colSpan={5}
                              title="Select Decade"
                            >
                              2020-2031
                            </th>
                            <th className="next" data-action="next">
                              <span
                                className="fas fa-angle-right"
                                title="Next Decade"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={7}>
                              <span data-action="selectYear" className="year">
                                2020
                              </span>
                              <span data-action="selectYear" className="year">
                                2021
                              </span>
                              <span data-action="selectYear" className="year">
                                2022
                              </span>
                              <span data-action="selectYear" className="year">
                                2023
                              </span>
                              <span data-action="selectYear" className="year">
                                2024
                              </span>
                              <span
                                data-action="selectYear"
                                className="year active"
                              >
                                2025
                              </span>
                              <span data-action="selectYear" className="year">
                                2026
                              </span>
                              <span data-action="selectYear" className="year">
                                2027
                              </span>
                              <span data-action="selectYear" className="year">
                                2028
                              </span>
                              <span data-action="selectYear" className="year">
                                2029
                              </span>
                              <span data-action="selectYear" className="year">
                                2030
                              </span>
                              <span data-action="selectYear" className="year">
                                2031
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="datepicker-decades"
                      style={{ display: "none" }}
                    >
                      <table className="table-condensed">
                        <thead>
                          <tr>
                            <th className="prev" data-action="previous">
                              <span
                                className="fas fa-angle-left"
                                title="Previous Century"
                              />
                            </th>
                            <th
                              className="picker-switch"
                              data-action="pickerSwitch"
                              colSpan={5}
                            >
                              2000-2107
                            </th>
                            <th className="next" data-action="next">
                              <span
                                className="fas fa-angle-right"
                                title="Next Century"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={7}>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2005}
                              >
                                2000 - 2011
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2017}
                              >
                                2012 - 2023
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade active"
                                data-selection={2029}
                              >
                                2024 - 2035
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2041}
                              >
                                2036 - 2047
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2053}
                              >
                                2048 - 2059
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2065}
                              >
                                2060 - 2071
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2077}
                              >
                                2072 - 2083
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2089}
                              >
                                2084 - 2095
                              </span>
                              <span
                                data-action="selectDecade"
                                className="decade"
                                data-selection={2101}
                              >
                                2096 - 2107
                              </span>
                              <span />
                              <span />
                              <span />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>
                <li className="picker-switch accordion-toggle">
                  <table className="table-condensed">
                    <tbody>
                      <tr />
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="mb-3">Upcoming Events</h5>
          <div className="event-wrapper event-scroll">
            {/* Event Item */}
            <div className="border-start border-skyblue border-3 shadow-sm p-3 mb-3">
              <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span className="avatar p-1 me-2 bg-teal-transparent flex-shrink-0">
                  <i className="ti ti-user-edit text-info fs-20" />
                </span>
                <div className="flex-fill">
                  <h6 className="mb-1">Parents, Teacher Meet</h6>
                  <p className="d-flex align-items-center">
                    <i className="ti ti-calendar me-1" />
                    15 July 2024
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0">
                  <i className="ti ti-clock me-1" />
                  09:10AM - 10:50PM
                </p>
                <div className="avatar-list-stacked avatar-group-sm">
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-01.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-07.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-02.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* /Event Item */}
            {/* Event Item */}
            <div className="border-start border-info border-3 shadow-sm p-3 mb-3">
              <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span className="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                  <i className="ti ti-user-edit fs-20" />
                </span>
                <div className="flex-fill">
                  <h6 className="mb-1">Parents, Teacher Meet</h6>
                  <p className="d-flex align-items-center">
                    <i className="ti ti-calendar me-1" />
                    15 July 2024
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0">
                  <i className="ti ti-clock me-1" />
                  09:10AM - 10:50PM
                </p>
                <div className="avatar-list-stacked avatar-group-sm">
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-05.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-06.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-07.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* /Event Item */}
            {/* Event Item */}
            <div className="border-start border-danger border-3 shadow-sm p-3 mb-3">
              <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span className="avatar p-1 me-2 bg-danger-transparent flex-shrink-0">
                  <i className="ti ti-vacuum-cleaner fs-24" />
                </span>
                <div className="flex-fill">
                  <h6 className="mb-1">Vacation Meeting</h6>
                  <p className="d-flex align-items-center">
                    <i className="ti ti-calendar me-1" />
                    07 July 2024 - 07 July 2024
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0">
                  <i className="ti ti-clock me-1" />
                  09:10 AM - 10:50 PM
                </p>
                <div className="avatar-list-stacked avatar-group-sm">
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-11.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span className="avatar border-0">
                    <img
                      src="assets/img/parents/parent-13.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* /Event Item */}
          </div>
        </div>
      </div>
    </div>
    {/* /Schedules */}
    {/* Attendance */}
    <div className="col-xxl-4 col-xl-6 col-md-12 d-flex flex-column">
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Attendance</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar-due me-1" />
              Today
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Week
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last Week
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="list-tab mb-4">
            <ul className="nav" role="tablist">
              <li>
                <a
                  href="#"
                  className="active"
                  data-bs-toggle="tab"
                  data-bs-target="#students"
                  aria-selected="true"
                  role="tab"
                >
                  Students
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#teachers"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Teachers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#staff"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Staff
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="students"
              role="tabpanel"
            >
              <div className="row gx-3">
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>28</h5>
                      <p className="fs-12">Emergency</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>01</h5>
                      <p className="fs-12">Absent</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>01</h5>
                      <p className="fs-12">Late</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div
                  id="student-chart"
                  className="mb-4"
                  style={{ minHeight: 263 }}
                >
                  <div
                    id="apexchartsb4lwy6x8j"
                    className="apexcharts-canvas apexchartsb4lwy6x8j apexcharts-theme-light"
                    style={{ width: 509, height: 263 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      
                      transform="translate(0, 0)"
                      width={509}
                      height={263}
                    >
                      <foreignObject x={0} y={0} width={509} height={263}>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} "
                          }}
                        />
                      </foreignObject>
                      <g
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(124.5, 0)"
                      >
                        <defs>
                          <clipPath id="gridRectMaskb4lwy6x8j">
                            <rect
                              width={266}
                              height={266}
                              x={-3}
                              y={-3}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectBarMaskb4lwy6x8j">
                            <rect
                              width={266}
                              height={266}
                              x={-3}
                              y={-3}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectMarkerMaskb4lwy6x8j">
                            <rect
                              width={266}
                              height={260}
                              x={-3}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskb4lwy6x8j" />
                          <clipPath id="nonForecastMaskb4lwy6x8j" />
                          <filter
                            id="SvgjsFilter1029"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feOffset
                              id="SvgjsFeOffset1022"
                              result="offset"
                              in="SourceGraphic"
                              dx={1}
                              dy={1}
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1023"
                              result="blur"
                              in="offset"
                              stdDeviation={1}
                            />
                            <feFlood
                              id="SvgjsFeFlood1024"
                              result="flood"
                              in="SourceGraphic"
                              floodColor="#000000"
                              floodOpacity="0.8"
                            />
                            <feComposite
                              id="SvgjsFeComposite1025"
                              result="shadow"
                              in="flood"
                              in2="blur"
                              operator="in"
                            />
                            <feMerge
                              id="SvgjsFeMerge1026"
                              result="SvgjsFeMerge1026"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode1027"
                                result="SvgjsFeMergeNode1027"
                                in="shadow"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode1028"
                                result="SvgjsFeMergeNode1028"
                                in="SourceGraphic"
                              />
                            </feMerge>
                          </filter>
                        </defs>
                        <g className="apexcharts-pie">
                          <g transform="translate(0, 0) scale(1)">
                            <circle
                              r="78.53902439024391"
                              cx={130}
                              cy={130}
                              fill="transparent"
                            />
                            <g className="apexcharts-slices">
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Present"
                                rel={1}
                                data-realindex={0}
                              >
                                <path
                                  d="M 130 9.17073170731706 A 120.82926829268294 120.82926829268294 0 1 1 120.86682615560264 9.516402727702513 L 124.06343700114171 51.68566177300664 A 78.53902439024391 78.53902439024391 0 1 0 130 51.46097560975609 L 130 9.17073170731706 z "
                                  fill="rgba(61,94,225,1)"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-0"
                                  index={0}
                                  j={0}
                                  data-angle="355.6650246305419"
                                  data-startangle={0}
                                  data-strokewidth={2}
                                  data-value={3610}
                                  data-pathorig="M 130 9.17073170731706 A 120.82926829268294 120.82926829268294 0 1 1 120.86682615560264 9.516402727702513 L 124.06343700114171 51.68566177300664 A 78.53902439024391 78.53902439024391 0 1 0 130 51.46097560975609 L 130 9.17073170731706 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Absent"
                                rel={2}
                                data-realindex={1}
                              >
                                <path
                                  d="M 120.86682615560264 9.516402727702513 A 120.82926829268294 120.82926829268294 0 0 1 129.9789113144622 9.170733547652048 L 129.98629235440043 51.46097680597383 A 78.53902439024391 78.53902439024391 0 0 0 124.06343700114171 51.68566177300664 L 120.86682615560264 9.516402727702513 z "
                                  fill="rgba(111,204,216,1)"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-1"
                                  index={0}
                                  j={1}
                                  data-angle="4.334975369458107"
                                  data-startangle="355.6650246305419"
                                  data-strokewidth={2}
                                  data-value={44}
                                  data-pathorig="M 120.86682615560264 9.516402727702513 A 120.82926829268294 120.82926829268294 0 0 1 129.9789113144622 9.170733547652048 L 129.98629235440043 51.46097680597383 A 78.53902439024391 78.53902439024391 0 0 0 124.06343700114171 51.68566177300664 L 120.86682615560264 9.516402727702513 z "
                                />
                              </g>
                              <g className="apexcharts-datalabels">
                                <text
                                  x="133.77013159453605"
                                  y="229.6128261800968"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  filter="url(#SvgjsFilter1029)"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  98.8%
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          x1={0}
                          y1={0}
                          x2={260}
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          x1={0}
                          y1={0}
                          x2={260}
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                      </g>
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                    </svg>
                    <div className="apexcharts-legend" />
                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          shape="circle"
                          style={{ backgroundColor: "rgb(61, 94, 225)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-1"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          shape="circle"
                          style={{ backgroundColor: "rgb(111, 204, 216)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="student-attendance.html" className="btn btn-light">
                  <i className="ti ti-calendar-share me-1" />
                  View All
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="teachers" role="tabpanel">
              <div className="row gx-3">
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>30</h5>
                      <p className="fs-12">Emergency</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>03</h5>
                      <p className="fs-12">Absent</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>03</h5>
                      <p className="fs-12">Late</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div
                  id="teacher-chart"
                  className="mb-4"
                  style={{ minHeight: 260 }}
                >
                  <div
                    id="apexchartsi5qqfboy"
                    className="apexcharts-canvas apexchartsi5qqfboy"
                    style={{ width: 0, height: 260 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      
                      transform="translate(0, 0)"
                      width={0}
                      height={260}
                    >
                      <foreignObject x={0} y={0} width={0} height={260} />
                      <g className="apexcharts-inner apexcharts-graphical">
                        <defs />
                      </g>
                    </svg>
                    <div className="apexcharts-legend" />
                  </div>
                </div>
                <a href="teacher-attendance.html" className="btn btn-light">
                  <i className="ti ti-calendar-share me-1" />
                  View All
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="staff" role="tabpanel">
              <div className="row gx-3">
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>45</h5>
                      <p className="fs-12">Emergency</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>01</h5>
                      <p className="fs-12">Absent</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light-300 shadow-none border-0">
                    <div className="card-body p-3 text-center">
                      <h5>10</h5>
                      <p className="fs-12">Late</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div
                  id="staff-chart"
                  className="mb-4"
                  style={{ minHeight: 260 }}
                >
                  <div
                    id="apexchartsq41pc3f5l"
                    className="apexcharts-canvas apexchartsq41pc3f5l"
                    style={{ width: 0, height: 260 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      
                      transform="translate(0, 0)"
                      width={0}
                      height={260}
                    >
                      <foreignObject x={0} y={0} width={0} height={260} />
                      <g className="apexcharts-inner apexcharts-graphical">
                        <defs />
                      </g>
                    </svg>
                    <div className="apexcharts-legend" />
                  </div>
                </div>
                <a href="staff-attendance.html" className="btn btn-light">
                  <i className="ti ti-calendar-share me-1" />
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-fill">
        {/* Best Performer */}
        <div className="col-sm-6 d-flex flex-column">
          <div className="bg-success-800 p-3 br-5 text-center flex-fill mb-4 pb-0  owl-height bg-01">
            <div className="owl-carousel student-slider h-100 owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-510px, 0px, 0px)",
                    transition: "all",
                    width: 1532
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: "231.333px", marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Best Performer</h5>
                          <h4 className="mb-1 text-white">Rubell</h4>
                          <p className="text-light">Physics Teacher</p>
                        </div>
                        <img
                          src="assets/img/performer/performer-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "231.333px", marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Best Performer</h5>
                          <h4 className="mb-1 text-white">George Odell</h4>
                          <p className="text-light">English Teacher</p>
                        </div>
                        <img
                          src="assets/img/performer/performer-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: "231.333px", marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Best Performer</h5>
                          <h4 className="mb-1 text-white">Rubell</h4>
                          <p className="text-light">Physics Teacher</p>
                        </div>
                        <img
                          src="assets/img/performer/performer-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "231.333px", marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Best Performer</h5>
                          <h4 className="mb-1 text-white">George Odell</h4>
                          <p className="text-light">English Teacher</p>
                        </div>
                        <img
                          src="assets/img/performer/performer-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "231.333px", marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Best Performer</h5>
                          <h4 className="mb-1 text-white">Rubell</h4>
                          <p className="text-light">Physics Teacher</p>
                        </div>
                        <img
                          src="assets/img/performer/performer-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "231.333px", marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Best Performer</h5>
                          <h4 className="mb-1 text-white">George Odell</h4>
                          <p className="text-light">English Teacher</p>
                        </div>
                        <img
                          src="assets/img/performer/performer-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="fas fa-chevron-left" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
        {/* /Best Performer */}
        {/* Star Students */}
        <div className="col-sm-6 d-flex flex-column">
          <div className="bg-info p-3 br-5 text-center flex-fill mb-4 pb-0 owl-height bg-02">
            <div className="owl-carousel teacher-slider h-100 owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-508px, 0px, 0px)",
                    transition: "all",
                    width: 1524
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 230, marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Star Students</h5>
                          <h4 className="mb-1 text-white">Tenesa</h4>
                          <p className="text-light">XII, A</p>
                        </div>
                        <img
                          src="assets/img/performer/student-performer-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 230, marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Star Students</h5>
                          <h4 className="mb-1 text-white">Michael </h4>
                          <p>XII, B</p>
                        </div>
                        <img
                          src="assets/img/performer/student-performer-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 230, marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Star Students</h5>
                          <h4 className="mb-1 text-white">Tenesa</h4>
                          <p className="text-light">XII, A</p>
                        </div>
                        <img
                          src="assets/img/performer/student-performer-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 230, marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Star Students</h5>
                          <h4 className="mb-1 text-white">Michael </h4>
                          <p>XII, B</p>
                        </div>
                        <img
                          src="assets/img/performer/student-performer-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 230, marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Star Students</h5>
                          <h4 className="mb-1 text-white">Tenesa</h4>
                          <p className="text-light">XII, A</p>
                        </div>
                        <img
                          src="assets/img/performer/student-performer-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 230, marginRight: 24 }}
                  >
                    <div className="item h-100">
                      <div className="d-flex justify-content-between flex-column h-100">
                        <div>
                          <h5 className="mb-3 text-white">Star Students</h5>
                          <h4 className="mb-1 text-white">Michael </h4>
                          <p>XII, B</p>
                        </div>
                        <img
                          src="assets/img/performer/student-performer-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="fas fa-chevron-left" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
        {/* /Star Students */}
      </div>
    </div>
    {/* /Attendance */}
    <div className="col-xxl-4 col-md-12 d-flex flex-column">
      {/* Quick Links */}
      <div className="card flex-fill">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Quick Links</h4>
        </div>
        <div className="card-body pb-1">
          <div className="owl-carousel link-slider owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-533px, 0px, 0px)",
                  transition: "all",
                  width: 1601
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="class-time-table.html"
                      className="d-block bg-success-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-success rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                      <p className="text-dark">Calendar</p>
                    </a>
                    <a
                      href="fees-group.html"
                      className="d-block bg-secondary-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-secondary rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-secondary rounded-circle">
                          <i className="ti ti-license" />
                        </span>
                      </div>
                      <p className="text-dark">Fees</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="exam-results.html"
                      className="d-block bg-primary-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-primary rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle">
                          <i className="ti ti-hexagonal-prism" />
                        </span>
                      </div>
                      <p className="text-dark">Exam Result</p>
                    </a>
                    <a
                      href="class-home-work.html"
                      className="d-block bg-danger-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-danger rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-danger rounded-circle">
                          <i className="ti ti-report-money" />
                        </span>
                      </div>
                      <p className="text-dark">Home Works</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="student-attendance.html"
                      className="d-block bg-warning-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-warning rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle">
                          <i className="ti ti-calendar-share" />
                        </span>
                      </div>
                      <p className="text-dark">Attendance</p>
                    </a>
                    <a
                      href="attendance-report.html"
                      className="d-block bg-skyblue-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-skyblue rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-skyblue rounded-circle">
                          <i className="ti ti-file-pencil" />
                        </span>
                      </div>
                      <p className="text-dark">Reports</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="class-time-table.html"
                      className="d-block bg-success-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-success rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                      <p className="text-dark">Calendar</p>
                    </a>
                    <a
                      href="fees-group.html"
                      className="d-block bg-secondary-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-secondary rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-secondary rounded-circle">
                          <i className="ti ti-license" />
                        </span>
                      </div>
                      <p className="text-dark">Fees</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="exam-results.html"
                      className="d-block bg-primary-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-primary rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle">
                          <i className="ti ti-hexagonal-prism" />
                        </span>
                      </div>
                      <p className="text-dark">Exam Result</p>
                    </a>
                    <a
                      href="class-home-work.html"
                      className="d-block bg-danger-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-danger rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-danger rounded-circle">
                          <i className="ti ti-report-money" />
                        </span>
                      </div>
                      <p className="text-dark">Home Works</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="student-attendance.html"
                      className="d-block bg-warning-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-warning rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle">
                          <i className="ti ti-calendar-share" />
                        </span>
                      </div>
                      <p className="text-dark">Attendance</p>
                    </a>
                    <a
                      href="attendance-report.html"
                      className="d-block bg-skyblue-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-skyblue rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-skyblue rounded-circle">
                          <i className="ti ti-file-pencil" />
                        </span>
                      </div>
                      <p className="text-dark">Reports</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="class-time-table.html"
                      className="d-block bg-success-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-success rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                      <p className="text-dark">Calendar</p>
                    </a>
                    <a
                      href="fees-group.html"
                      className="d-block bg-secondary-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-secondary rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-secondary rounded-circle">
                          <i className="ti ti-license" />
                        </span>
                      </div>
                      <p className="text-dark">Fees</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="exam-results.html"
                      className="d-block bg-primary-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-primary rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle">
                          <i className="ti ti-hexagonal-prism" />
                        </span>
                      </div>
                      <p className="text-dark">Exam Result</p>
                    </a>
                    <a
                      href="class-home-work.html"
                      className="d-block bg-danger-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-danger rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-danger rounded-circle">
                          <i className="ti ti-report-money" />
                        </span>
                      </div>
                      <p className="text-dark">Home Works</p>
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "153.778px", marginRight: 24 }}
                >
                  <div className="item">
                    <a
                      href="student-attendance.html"
                      className="d-block bg-warning-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-warning rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle">
                          <i className="ti ti-calendar-share" />
                        </span>
                      </div>
                      <p className="text-dark">Attendance</p>
                    </a>
                    <a
                      href="attendance-report.html"
                      className="d-block bg-skyblue-transparent ronded p-2 text-center mb-3 class-hover"
                    >
                      <div className="avatar avatar-lg border p-1 border-skyblue rounded-circle mb-2">
                        <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-skyblue rounded-circle">
                          <i className="ti ti-file-pencil" />
                        </span>
                      </div>
                      <p className="text-dark">Reports</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </div>
      {/* /Quick Links */}
      {/* Class Routine */}
      <div className="card flex-fill">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Class Routine</h4>
          <a
            href="#"
            className="link-primary fw-medium"
            data-bs-toggle="modal"
            data-bs-target="#add_class_routine"
          >
            <i className="ti ti-square-plus me-1" />
            Add New
          </a>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center rounded border p-3 mb-3">
            <span className="avatar avatar-md flex-shrink-0 border rounded me-2">
              <img
                src="assets/img/teachers/teacher-01.jpg"
                className="rounded"
                alt="Profile"
              />
            </span>
            <div className="w-100">
              <p className="mb-1">Oct 2024</p>
              <div className="progress progress-xs  flex-grow-1 mb-1">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-primary rounded"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center rounded border p-3 mb-3">
            <span className="avatar avatar-md flex-shrink-0 border rounded me-2">
              <img
                src="assets/img/teachers/teacher-02.jpg"
                className="rounded"
                alt="Profile"
              />
            </span>
            <div className="w-100">
              <p className="mb-1">Nov 2024</p>
              <div className="progress progress-xs  flex-grow-1 mb-1">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center rounded border p-3 mb-0">
            <span className="avatar avatar-md flex-shrink-0 border rounded me-2">
              <img
                src="assets/img/teachers/teacher-03.jpg"
                className="rounded"
                alt="Profile"
              />
            </span>
            <div className="w-100">
              <p className="mb-1">Oct 2024</p>
              <div className="progress progress-xs  flex-grow-1 mb-1">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success rounded"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Class Routine */}
      {/* Class Wise Performance */}
      <div className="card flex-fill">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Performance</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-school-bell  me-2" />
              Class II
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class I
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class II
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class III
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class IV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="me-md-3 mb-3 mb-md-0 w-100">
              <div className="border border-dashed p-3 rounded d-flex align-items-center justify-content-between mb-1">
                <p className="mb-0 me-2">
                  <i className="ti ti-arrow-badge-down-filled me-2 text-primary" />
                  Top
                </p>
                <h5>45</h5>
              </div>
              <div className="border border-dashed p-3 rounde d-flex align-items-center justify-content-between mb-1">
                <p className="mb-0 me-2">
                  <i className="ti ti-arrow-badge-down-filled me-2 text-warning" />
                  Average
                </p>
                <h5>11</h5>
              </div>
              <div className="border border-dashed p-3 rounded d-flex align-items-center justify-content-between mb-0">
                <p className="mb-0 me-2">
                  <i className="ti ti-arrow-badge-down-filled me-2 text-danger" />
                  Below Avg
                </p>
                <h5>02</h5>
              </div>
            </div>
            <div
              id="class-chart"
              className="text-center text-md-left"
              style={{ minHeight: 127 }}
            >
              <div
                id="apexchartsiw82kuj0f"
                className="apexcharts-canvas apexchartsiw82kuj0f apexcharts-theme-light"
                style={{ width: 300, height: 127 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="apexcharts-svg"
                  
                  transform="translate(0, 0)"
                  width={300}
                  height={127}
                >
                  <foreignObject x={0} y={0} width={300} height={127}>
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} "
                      }}
                    />
                  </foreignObject>
                  <g
                    className="apexcharts-inner apexcharts-graphical"
                    transform="translate(77, 1)"
                  >
                    <defs>
                      <clipPath id="gridRectMaskiw82kuj0f">
                        <rect
                          width={144}
                          height={134}
                          x={-3}
                          y={-3}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="gridRectBarMaskiw82kuj0f">
                        <rect
                          width={144}
                          height={134}
                          x={-3}
                          y={-3}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="gridRectMarkerMaskiw82kuj0f">
                        <rect
                          width={144}
                          height={128}
                          x={-3}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="forecastMaskiw82kuj0f" />
                      <clipPath id="nonForecastMaskiw82kuj0f" />
                    </defs>
                    <g className="apexcharts-pie">
                      <g transform="translate(0, 0) scale(1)">
                        <circle
                          r="39.28536585365854"
                          cx={69}
                          cy={64}
                          fill="transparent"
                        />
                        <g className="apexcharts-slices">
                          <g
                            className="apexcharts-series apexcharts-pie-series"
                            seriesname="Good"
                            rel={1}
                            data-realindex={0}
                          >
                            <path
                              d="M 69 3.560975609756092 A 60.43902439024391 60.43902439024391 0 1 1 9.357167735173114 54.22205396444511 L 30.232159027862522 57.64433507688932 A 39.28536585365854 39.28536585365854 0 1 0 69 24.71463414634146 L 69 3.560975609756092 z "
                              fill="rgba(61,94,225,1)"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-pie-area apexcharts-donut-slice-0"
                              index={0}
                              j={0}
                              data-angle="279.3103448275862"
                              data-startangle={0}
                              data-strokewidth={2}
                              data-value={45}
                              data-pathorig="M 69 3.560975609756092 A 60.43902439024391 60.43902439024391 0 1 1 9.357167735173114 54.22205396444511 L 30.232159027862522 57.64433507688932 A 39.28536585365854 39.28536585365854 0 1 0 69 24.71463414634146 L 69 3.560975609756092 z "
                            />
                          </g>
                          <g
                            className="apexcharts-series apexcharts-pie-series"
                            seriesname="Average"
                            rel={2}
                            data-realindex={1}
                          >
                            <path
                              d="M 9.357167735173114 54.22205396444511 A 60.43902439024391 60.43902439024391 0 0 1 56.00739632090448 4.974006413424505 L 60.554807608587915 25.63310416872593 A 39.28536585365854 39.28536585365854 0 0 0 30.232159027862522 57.64433507688932 L 9.357167735173114 54.22205396444511 z "
                              fill="rgba(234,179,0,1)"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-pie-area apexcharts-donut-slice-1"
                              index={0}
                              j={1}
                              data-angle="68.27586206896552"
                              data-startangle="279.3103448275862"
                              data-strokewidth={2}
                              data-value={11}
                              data-pathorig="M 9.357167735173114 54.22205396444511 A 60.43902439024391 60.43902439024391 0 0 1 56.00739632090448 4.974006413424505 L 60.554807608587915 25.63310416872593 A 39.28536585365854 39.28536585365854 0 0 0 30.232159027862522 57.64433507688932 L 9.357167735173114 54.22205396444511 z "
                            />
                          </g>
                          <g
                            className="apexcharts-series apexcharts-pie-series"
                            seriesname="BelowxAverage"
                            rel={3}
                            data-realindex={2}
                          >
                            <path
                              d="M 56.00739632090448 4.974006413424505 A 60.43902439024391 60.43902439024391 0 0 1 68.98945140033051 3.560976530295072 L 68.99314341021484 24.714634744691793 A 39.28536585365854 39.28536585365854 0 0 0 60.554807608587915 25.63310416872593 L 56.00739632090448 4.974006413424505 z "
                              fill="rgba(232,38,70,1)"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-pie-area apexcharts-donut-slice-2"
                              index={0}
                              j={2}
                              data-angle="12.413793103448256"
                              data-startangle="347.58620689655174"
                              data-strokewidth={2}
                              data-value={2}
                              data-pathorig="M 56.00739632090448 4.974006413424505 A 60.43902439024391 60.43902439024391 0 0 1 68.98945140033051 3.560976530295072 L 68.99314341021484 24.714634744691793 A 39.28536585365854 39.28536585365854 0 0 0 60.554807608587915 25.63310416872593 L 56.00739632090448 4.974006413424505 z "
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <line
                      x1={0}
                      y1={0}
                      x2={138}
                      y2={0}
                      stroke="#b6b6b6"
                      strokeDasharray={0}
                      strokeWidth={1}
                      strokeLinecap="butt"
                      className="apexcharts-ycrosshairs"
                    />
                    <line
                      x1={0}
                      y1={0}
                      x2={138}
                      y2={0}
                      stroke="#b6b6b6"
                      strokeDasharray={0}
                      strokeWidth={0}
                      strokeLinecap="butt"
                      className="apexcharts-ycrosshairs-hidden"
                    />
                  </g>
                  <g
                    className="apexcharts-datalabels-group"
                    transform="translate(0, 0) scale(1)"
                  />
                  <g
                    className="apexcharts-datalabels-group"
                    transform="translate(0, 0) scale(1)"
                  />
                </svg>
                <div className="apexcharts-legend" />
                <div className="apexcharts-tooltip apexcharts-theme-dark">
                  <div
                    className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                    style={{ order: 1 }}
                  >
                    <span
                      className="apexcharts-tooltip-marker"
                      shape="circle"
                      style={{ backgroundColor: "rgb(61, 94, 225)" }}
                    />
                    <div
                      className="apexcharts-tooltip-text"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 12
                      }}
                    >
                      <div className="apexcharts-tooltip-y-group">
                        <span className="apexcharts-tooltip-text-y-label" />
                        <span className="apexcharts-tooltip-text-y-value" />
                      </div>
                      <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label" />
                        <span className="apexcharts-tooltip-text-goals-value" />
                      </div>
                      <div className="apexcharts-tooltip-z-group">
                        <span className="apexcharts-tooltip-text-z-label" />
                        <span className="apexcharts-tooltip-text-z-value" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-1"
                    style={{ order: 2 }}
                  >
                    <span
                      className="apexcharts-tooltip-marker"
                      shape="circle"
                      style={{ backgroundColor: "rgb(234, 179, 0)" }}
                    />
                    <div
                      className="apexcharts-tooltip-text"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 12
                      }}
                    >
                      <div className="apexcharts-tooltip-y-group">
                        <span className="apexcharts-tooltip-text-y-label" />
                        <span className="apexcharts-tooltip-text-y-value" />
                      </div>
                      <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label" />
                        <span className="apexcharts-tooltip-text-goals-value" />
                      </div>
                      <div className="apexcharts-tooltip-z-group">
                        <span className="apexcharts-tooltip-text-z-label" />
                        <span className="apexcharts-tooltip-text-z-value" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-2"
                    style={{ order: 3 }}
                  >
                    <span
                      className="apexcharts-tooltip-marker"
                      shape="circle"
                      style={{ backgroundColor: "rgb(232, 38, 70)" }}
                    />
                    <div
                      className="apexcharts-tooltip-text"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 12
                      }}
                    >
                      <div className="apexcharts-tooltip-y-group">
                        <span className="apexcharts-tooltip-text-y-label" />
                        <span className="apexcharts-tooltip-text-y-value" />
                      </div>
                      <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label" />
                        <span className="apexcharts-tooltip-text-goals-value" />
                      </div>
                      <div className="apexcharts-tooltip-z-group">
                        <span className="apexcharts-tooltip-text-z-label" />
                        <span className="apexcharts-tooltip-text-z-value" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Class Wise Performance */}
    </div>
  </div>
  <div className="row">
    {/* Fees Collection */}
    <div className="col-xxl-8 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header  d-flex align-items-center justify-content-between">
          <h4 className="card-title">Fees Collection</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar  me-2" />
              Last 8 Quater
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Month
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Year
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last 12 Quater
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last 16 Quater
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body pb-0">
          <div id="fees-chart" style={{ minHeight: 290 }}>
            <div
              id="apexchartsgnlzzup5"
              className="apexcharts-canvas apexchartsgnlzzup5 apexcharts-theme-light"
              style={{ width: 1084, height: 275 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="apexcharts-svg"
                
                transform="translate(0, 0)"
                width={1084}
                height={275}
              >
                <foreignObject x={0} y={0} width={1084} height={275}>
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} "
                    }}
                  />
                </foreignObject>
                <g
                  className="apexcharts-datalabels-group"
                  transform="translate(0, 0) scale(1)"
                />
                <g
                  className="apexcharts-datalabels-group"
                  transform="translate(0, 0) scale(1)"
                />
                <g
                  className="apexcharts-yaxis"
                  rel={0}
                  transform="translate(0.3541679382324219, 0)"
                >
                  <g className="apexcharts-yaxis-texts-g">
                    <text
                      x={20}
                      y="57.666666666666664"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="11px"
                      fontFamily="Helvetica, Arial, sans-serif"
                      fontWeight={400}
                      fill="#373d3f"
                      className="apexcharts-text apexcharts-yaxis-label "
                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                      <tspan>100</tspan>
                      <title>100</title>
                    </text>
                    <text
                      x={20}
                      y="149.87999948565164"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="11px"
                      fontFamily="Helvetica, Arial, sans-serif"
                      fontWeight={400}
                      fill="#373d3f"
                      className="apexcharts-text apexcharts-yaxis-label "
                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                      <tspan>50</tspan>
                      <title>50</title>
                    </text>
                    <text
                      x={20}
                      y="242.09333230463662"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="11px"
                      fontFamily="Helvetica, Arial, sans-serif"
                      fontWeight={400}
                      fill="#373d3f"
                      className="apexcharts-text apexcharts-yaxis-label "
                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                      <tspan>0</tspan>
                      <title>0</title>
                    </text>
                  </g>
                </g>
                <g
                  className="apexcharts-inner apexcharts-graphical"
                  transform="translate(25.354167938232422, 54)"
                >
                  <defs>
                    <linearGradient
                      x1={0}
                      y1={0}
                      x2={0}
                      y2={1}
                      id="SvgjsLinearGradient1030"
                    >
                      <stop
                        stopOpacity="0.4"
                        stopColor="rgba(216,227,240,0.4)"
                        offset={0}
                      />
                      <stop
                        stopOpacity="0.5"
                        stopColor="rgba(190,209,230,0.5)"
                        offset={1}
                      />
                      <stop
                        stopOpacity="0.5"
                        stopColor="rgba(190,209,230,0.5)"
                        offset={1}
                      />
                    </linearGradient>
                    <clipPath id="gridRectMaskgnlzzup5">
                      <rect
                        width="1024.2864570617676"
                        height="190.42666563796996"
                        x={-3}
                        y={-3}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fff"
                      />
                    </clipPath>
                    <clipPath id="gridRectBarMaskgnlzzup5">
                      <rect
                        width="1024.2864570617676"
                        height="190.42666563796996"
                        x={-3}
                        y={-3}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fff"
                      />
                    </clipPath>
                    <clipPath id="gridRectMarkerMaskgnlzzup5">
                      <rect
                        width="1024.2864570617676"
                        height="184.42666563796996"
                        x={-3}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fff"
                      />
                    </clipPath>
                    <clipPath id="forecastMaskgnlzzup5" />
                    <clipPath id="nonForecastMaskgnlzzup5" />
                  </defs>
                  <rect
                    width="56.57146983676486"
                    height="184.42666563796996"
                    x={0}
                    y={0}
                    rx={0}
                    ry={0}
                    opacity={1}
                    strokeWidth={0}
                    stroke="#b6b6b6"
                    strokeDasharray={3}
                    fill="url(#SvgjsLinearGradient1030)"
                    className="apexcharts-xcrosshairs"
                    y2="184.42666563796996"
                    filter="none"
                    fillOpacity="0.9"
                  />
                  <line
                    x1={0}
                    y1="184.42666563796996"
                    x2={0}
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="113.14293967352972"
                    y1="184.42666563796996"
                    x2="113.14293967352972"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="226.28587934705945"
                    y1="184.42666563796996"
                    x2="226.28587934705945"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="339.4288190205892"
                    y1="184.42666563796996"
                    x2="339.4288190205892"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="452.5717586941189"
                    y1="184.42666563796996"
                    x2="452.5717586941189"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="565.7146983676487"
                    y1="184.42666563796996"
                    x2="565.7146983676487"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="678.8576380411785"
                    y1="184.42666563796996"
                    x2="678.8576380411785"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="792.0005777147082"
                    y1="184.42666563796996"
                    x2="792.0005777147082"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="905.143517388238"
                    y1="184.42666563796996"
                    x2="905.143517388238"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <line
                    x1="1018.2864570617678"
                    y1="184.42666563796996"
                    x2="1018.2864570617678"
                    y2="190.42666563796996"
                    stroke="#e0e0e0"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                    className="apexcharts-xaxis-tick"
                  />
                  <g className="apexcharts-grid">
                    <g className="apexcharts-gridlines-horizontal">
                      <line
                        x1={0}
                        y1="92.21333281898498"
                        x2="1018.2864570617676"
                        y2="92.21333281898498"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        className="apexcharts-gridline"
                      />
                    </g>
                    <g className="apexcharts-gridlines-vertical" />
                    <line
                      x1={0}
                      y1="184.42666563796996"
                      x2="1018.2864570617676"
                      y2="184.42666563796996"
                      stroke="transparent"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                    />
                    <line
                      x1={0}
                      y1={1}
                      x2={0}
                      y2="184.42666563796996"
                      stroke="transparent"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                    />
                  </g>
                  <g className="apexcharts-grid-borders">
                    <line
                      x1={0}
                      y1={0}
                      x2="1018.2864570617676"
                      y2={0}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      x1={0}
                      y1="184.42666563796996"
                      x2="1018.2864570617676"
                      y2="184.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      x1={0}
                      y1="184.42666563796996"
                      x2="1018.2864570617676"
                      y2="184.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeWidth={1}
                      strokeLinecap="butt"
                    />
                  </g>
                  <g className="apexcharts-bar-series apexcharts-plot-series">
                    <g
                      className="apexcharts-series"
                      seriesname="CollectedxFee"
                      rel={1}
                      data-realindex={0}
                    >
                      <path
                        d="M 29.28573491838243 183.42766563796997 L 29.28573491838243 130.099665946579 C 29.28573491838243 130.099665946579 29.28573491838243 130.099665946579 29.28573491838243 130.099665946579 L 83.8572047551473 130.099665946579 C 83.8572047551473 130.099665946579 83.8572047551473 130.099665946579 83.8572047551473 130.099665946579 L 83.8572047551473 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 29.28573491838243 183.42766563796997 L 29.28573491838243 130.099665946579 C 29.28573491838243 130.099665946579 29.28573491838243 130.099665946579 29.28573491838243 130.099665946579 L 83.8572047551473 130.099665946579 C 83.8572047551473 130.099665946579 83.8572047551473 130.099665946579 83.8572047551473 130.099665946579 L 83.8572047551473 183.42766563796997 z "
                        pathfrom="M 29.28573491838243 183.42766563796997 L 29.28573491838243 183.42766563796997 L 83.8572047551473 183.42766563796997 L 83.8572047551473 183.42766563796997 L 83.8572047551473 183.42766563796997 L 83.8572047551473 183.42766563796997 L 83.8572047551473 183.42766563796997 L 29.28573491838243 183.42766563796997 z"
                        cy="129.098665946579"
                        cx="140.42867459191217"
                        j={0}
                        val={30}
                        barheight="55.327999691390986"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 142.42867459191217 183.42766563796997 L 142.42867459191217 111.65699938278199 C 142.42867459191217 111.65699938278199 142.42867459191217 111.65699938278199 142.42867459191217 111.65699938278199 L 197.00014442867703 111.65699938278199 C 197.00014442867703 111.65699938278199 197.00014442867703 111.65699938278199 197.00014442867703 111.65699938278199 L 197.00014442867703 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 142.42867459191217 183.42766563796997 L 142.42867459191217 111.65699938278199 C 142.42867459191217 111.65699938278199 142.42867459191217 111.65699938278199 142.42867459191217 111.65699938278199 L 197.00014442867703 111.65699938278199 C 197.00014442867703 111.65699938278199 197.00014442867703 111.65699938278199 197.00014442867703 111.65699938278199 L 197.00014442867703 183.42766563796997 z "
                        pathfrom="M 142.42867459191217 183.42766563796997 L 142.42867459191217 183.42766563796997 L 197.00014442867703 183.42766563796997 L 197.00014442867703 183.42766563796997 L 197.00014442867703 183.42766563796997 L 197.00014442867703 183.42766563796997 L 197.00014442867703 183.42766563796997 L 142.42867459191217 183.42766563796997 z"
                        cy="110.65599938278199"
                        cx="253.5716142654419"
                        j={1}
                        val={40}
                        barheight="73.77066625518798"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 255.5716142654419 183.42766563796997 L 255.5716142654419 115.3455326955414 C 255.5716142654419 115.3455326955414 255.5716142654419 115.3455326955414 255.5716142654419 115.3455326955414 L 310.1430841022068 115.3455326955414 C 310.1430841022068 115.3455326955414 310.1430841022068 115.3455326955414 310.1430841022068 115.3455326955414 L 310.1430841022068 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 255.5716142654419 183.42766563796997 L 255.5716142654419 115.3455326955414 C 255.5716142654419 115.3455326955414 255.5716142654419 115.3455326955414 255.5716142654419 115.3455326955414 L 310.1430841022068 115.3455326955414 C 310.1430841022068 115.3455326955414 310.1430841022068 115.3455326955414 310.1430841022068 115.3455326955414 L 310.1430841022068 183.42766563796997 z "
                        pathfrom="M 255.5716142654419 183.42766563796997 L 255.5716142654419 183.42766563796997 L 310.1430841022068 183.42766563796997 L 310.1430841022068 183.42766563796997 L 310.1430841022068 183.42766563796997 L 310.1430841022068 183.42766563796997 L 310.1430841022068 183.42766563796997 L 255.5716142654419 183.42766563796997 z"
                        cy="114.34453269554139"
                        cx="366.7145539389716"
                        j={2}
                        val={38}
                        barheight="70.08213294242857"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 368.7145539389716 183.42766563796997 L 368.7145539389716 111.65699938278199 C 368.7145539389716 111.65699938278199 368.7145539389716 111.65699938278199 368.7145539389716 111.65699938278199 L 423.28602377573645 111.65699938278199 C 423.28602377573645 111.65699938278199 423.28602377573645 111.65699938278199 423.28602377573645 111.65699938278199 L 423.28602377573645 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 368.7145539389716 183.42766563796997 L 368.7145539389716 111.65699938278199 C 368.7145539389716 111.65699938278199 368.7145539389716 111.65699938278199 368.7145539389716 111.65699938278199 L 423.28602377573645 111.65699938278199 C 423.28602377573645 111.65699938278199 423.28602377573645 111.65699938278199 423.28602377573645 111.65699938278199 L 423.28602377573645 183.42766563796997 z "
                        pathfrom="M 368.7145539389716 183.42766563796997 L 368.7145539389716 183.42766563796997 L 423.28602377573645 183.42766563796997 L 423.28602377573645 183.42766563796997 L 423.28602377573645 183.42766563796997 L 423.28602377573645 183.42766563796997 L 423.28602377573645 183.42766563796997 L 368.7145539389716 183.42766563796997 z"
                        cy="110.65599938278199"
                        cx="479.85749361250134"
                        j={3}
                        val={40}
                        barheight="73.77066625518798"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 481.85749361250134 183.42766563796997 L 481.85749361250134 115.3455326955414 C 481.85749361250134 115.3455326955414 481.85749361250134 115.3455326955414 481.85749361250134 115.3455326955414 L 536.4289634492662 115.3455326955414 C 536.4289634492662 115.3455326955414 536.4289634492662 115.3455326955414 536.4289634492662 115.3455326955414 L 536.4289634492662 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 481.85749361250134 183.42766563796997 L 481.85749361250134 115.3455326955414 C 481.85749361250134 115.3455326955414 481.85749361250134 115.3455326955414 481.85749361250134 115.3455326955414 L 536.4289634492662 115.3455326955414 C 536.4289634492662 115.3455326955414 536.4289634492662 115.3455326955414 536.4289634492662 115.3455326955414 L 536.4289634492662 183.42766563796997 z "
                        pathfrom="M 481.85749361250134 183.42766563796997 L 481.85749361250134 183.42766563796997 L 536.4289634492662 183.42766563796997 L 536.4289634492662 183.42766563796997 L 536.4289634492662 183.42766563796997 L 536.4289634492662 183.42766563796997 L 536.4289634492662 183.42766563796997 L 481.85749361250134 183.42766563796997 z"
                        cy="114.34453269554139"
                        cx="593.000433286031"
                        j={4}
                        val={38}
                        barheight="70.08213294242857"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 595.000433286031 183.42766563796997 L 595.000433286031 130.099665946579 C 595.000433286031 130.099665946579 595.000433286031 130.099665946579 595.000433286031 130.099665946579 L 649.5719031227959 130.099665946579 C 649.5719031227959 130.099665946579 649.5719031227959 130.099665946579 649.5719031227959 130.099665946579 L 649.5719031227959 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 595.000433286031 183.42766563796997 L 595.000433286031 130.099665946579 C 595.000433286031 130.099665946579 595.000433286031 130.099665946579 595.000433286031 130.099665946579 L 649.5719031227959 130.099665946579 C 649.5719031227959 130.099665946579 649.5719031227959 130.099665946579 649.5719031227959 130.099665946579 L 649.5719031227959 183.42766563796997 z "
                        pathfrom="M 595.000433286031 183.42766563796997 L 595.000433286031 183.42766563796997 L 649.5719031227959 183.42766563796997 L 649.5719031227959 183.42766563796997 L 649.5719031227959 183.42766563796997 L 649.5719031227959 183.42766563796997 L 649.5719031227959 183.42766563796997 L 595.000433286031 183.42766563796997 z"
                        cy="129.098665946579"
                        cx="706.1433729595608"
                        j={5}
                        val={30}
                        barheight="55.327999691390986"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 708.1433729595608 183.42766563796997 L 708.1433729595608 120.87833266468049 C 708.1433729595608 120.87833266468049 708.1433729595608 120.87833266468049 708.1433729595608 120.87833266468049 L 762.7148427963257 120.87833266468049 C 762.7148427963257 120.87833266468049 762.7148427963257 120.87833266468049 762.7148427963257 120.87833266468049 L 762.7148427963257 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 708.1433729595608 183.42766563796997 L 708.1433729595608 120.87833266468049 C 708.1433729595608 120.87833266468049 708.1433729595608 120.87833266468049 708.1433729595608 120.87833266468049 L 762.7148427963257 120.87833266468049 C 762.7148427963257 120.87833266468049 762.7148427963257 120.87833266468049 762.7148427963257 120.87833266468049 L 762.7148427963257 183.42766563796997 z "
                        pathfrom="M 708.1433729595608 183.42766563796997 L 708.1433729595608 183.42766563796997 L 762.7148427963257 183.42766563796997 L 762.7148427963257 183.42766563796997 L 762.7148427963257 183.42766563796997 L 762.7148427963257 183.42766563796997 L 762.7148427963257 183.42766563796997 L 708.1433729595608 183.42766563796997 z"
                        cy="119.87733266468048"
                        cx="819.2863126330906"
                        j={6}
                        val={35}
                        barheight="64.54933297328948"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 821.2863126330906 183.42766563796997 L 821.2863126330906 115.3455326955414 C 821.2863126330906 115.3455326955414 821.2863126330906 115.3455326955414 821.2863126330906 115.3455326955414 L 875.8577824698555 115.3455326955414 C 875.8577824698555 115.3455326955414 875.8577824698555 115.3455326955414 875.8577824698555 115.3455326955414 L 875.8577824698555 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 821.2863126330906 183.42766563796997 L 821.2863126330906 115.3455326955414 C 821.2863126330906 115.3455326955414 821.2863126330906 115.3455326955414 821.2863126330906 115.3455326955414 L 875.8577824698555 115.3455326955414 C 875.8577824698555 115.3455326955414 875.8577824698555 115.3455326955414 875.8577824698555 115.3455326955414 L 875.8577824698555 183.42766563796997 z "
                        pathfrom="M 821.2863126330906 183.42766563796997 L 821.2863126330906 183.42766563796997 L 875.8577824698555 183.42766563796997 L 875.8577824698555 183.42766563796997 L 875.8577824698555 183.42766563796997 L 875.8577824698555 183.42766563796997 L 875.8577824698555 183.42766563796997 L 821.2863126330906 183.42766563796997 z"
                        cy="114.34453269554139"
                        cx="932.4292523066204"
                        j={7}
                        val={38}
                        barheight="70.08213294242857"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 934.4292523066204 183.42766563796997 L 934.4292523066204 111.65699938278199 C 934.4292523066204 111.65699938278199 934.4292523066204 111.65699938278199 934.4292523066204 111.65699938278199 L 989.0007221433852 111.65699938278199 C 989.0007221433852 111.65699938278199 989.0007221433852 111.65699938278199 989.0007221433852 111.65699938278199 L 989.0007221433852 183.42766563796997 z "
                        fill="rgba(61,94,225,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={0}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 934.4292523066204 183.42766563796997 L 934.4292523066204 111.65699938278199 C 934.4292523066204 111.65699938278199 934.4292523066204 111.65699938278199 934.4292523066204 111.65699938278199 L 989.0007221433852 111.65699938278199 C 989.0007221433852 111.65699938278199 989.0007221433852 111.65699938278199 989.0007221433852 111.65699938278199 L 989.0007221433852 183.42766563796997 z "
                        pathfrom="M 934.4292523066204 183.42766563796997 L 934.4292523066204 183.42766563796997 L 989.0007221433852 183.42766563796997 L 989.0007221433852 183.42766563796997 L 989.0007221433852 183.42766563796997 L 989.0007221433852 183.42766563796997 L 989.0007221433852 183.42766563796997 L 934.4292523066204 183.42766563796997 z"
                        cy="110.65599938278199"
                        cx="1045.5721919801501"
                        j={8}
                        val={40}
                        barheight="73.77066625518798"
                        barwidth="56.57146983676486"
                      />
                      <g className="apexcharts-bar-goals-markers">
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                      </g>
                    </g>
                    <g
                      className="apexcharts-series"
                      seriesname="TotalxFee"
                      rel={2}
                      data-realindex={1}
                    >
                      <path
                        d="M 29.28573491838243 128.100665946579 L 29.28573491838243 47.10866640949252 C 29.28573491838243 47.10866640949252 29.28573491838243 47.10866640949252 29.28573491838243 47.10866640949252 L 83.8572047551473 47.10866640949252 C 83.8572047551473 47.10866640949252 83.8572047551473 47.10866640949252 83.8572047551473 47.10866640949252 L 83.8572047551473 128.100665946579 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 29.28573491838243 128.100665946579 L 29.28573491838243 47.10866640949252 C 29.28573491838243 47.10866640949252 29.28573491838243 47.10866640949252 29.28573491838243 47.10866640949252 L 83.8572047551473 47.10866640949252 C 83.8572047551473 47.10866640949252 83.8572047551473 47.10866640949252 83.8572047551473 47.10866640949252 L 83.8572047551473 128.100665946579 z "
                        pathfrom="M 29.28573491838243 128.100665946579 L 29.28573491838243 128.100665946579 L 83.8572047551473 128.100665946579 L 83.8572047551473 128.100665946579 L 83.8572047551473 128.100665946579 L 83.8572047551473 128.100665946579 L 83.8572047551473 128.100665946579 L 29.28573491838243 128.100665946579 z"
                        cy="46.10766640949252"
                        cx="140.42867459191217"
                        j={0}
                        val={45}
                        barheight="82.99199953708647"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 142.42867459191217 109.657999382782 L 142.42867459191217 19.444666563797025 C 142.42867459191217 19.444666563797025 142.42867459191217 19.444666563797025 142.42867459191217 19.444666563797025 L 197.00014442867703 19.444666563797025 C 197.00014442867703 19.444666563797025 197.00014442867703 19.444666563797025 197.00014442867703 19.444666563797025 L 197.00014442867703 109.657999382782 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 142.42867459191217 109.657999382782 L 142.42867459191217 19.444666563797025 C 142.42867459191217 19.444666563797025 142.42867459191217 19.444666563797025 142.42867459191217 19.444666563797025 L 197.00014442867703 19.444666563797025 C 197.00014442867703 19.444666563797025 197.00014442867703 19.444666563797025 197.00014442867703 19.444666563797025 L 197.00014442867703 109.657999382782 z "
                        pathfrom="M 142.42867459191217 109.657999382782 L 142.42867459191217 109.657999382782 L 197.00014442867703 109.657999382782 L 197.00014442867703 109.657999382782 L 197.00014442867703 109.657999382782 L 197.00014442867703 109.657999382782 L 197.00014442867703 109.657999382782 L 142.42867459191217 109.657999382782 z"
                        cy="18.443666563797024"
                        cx="253.5716142654419"
                        j={1}
                        val={50}
                        barheight="92.21333281898497"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 255.5716142654419 113.3465326955414 L 255.5716142654419 26.821733189315818 C 255.5716142654419 26.821733189315818 255.5716142654419 26.821733189315818 255.5716142654419 26.821733189315818 L 310.1430841022068 26.821733189315818 C 310.1430841022068 26.821733189315818 310.1430841022068 26.821733189315818 310.1430841022068 26.821733189315818 L 310.1430841022068 113.3465326955414 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 255.5716142654419 113.3465326955414 L 255.5716142654419 26.821733189315818 C 255.5716142654419 26.821733189315818 255.5716142654419 26.821733189315818 255.5716142654419 26.821733189315818 L 310.1430841022068 26.821733189315818 C 310.1430841022068 26.821733189315818 310.1430841022068 26.821733189315818 310.1430841022068 26.821733189315818 L 310.1430841022068 113.3465326955414 z "
                        pathfrom="M 255.5716142654419 113.3465326955414 L 255.5716142654419 113.3465326955414 L 310.1430841022068 113.3465326955414 L 310.1430841022068 113.3465326955414 L 310.1430841022068 113.3465326955414 L 310.1430841022068 113.3465326955414 L 310.1430841022068 113.3465326955414 L 255.5716142654419 113.3465326955414 z"
                        cy="25.820733189315817"
                        cx="366.7145539389716"
                        j={2}
                        val={48}
                        barheight="88.52479950622558"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 368.7145539389716 109.657999382782 L 368.7145539389716 19.444666563797025 C 368.7145539389716 19.444666563797025 368.7145539389716 19.444666563797025 368.7145539389716 19.444666563797025 L 423.28602377573645 19.444666563797025 C 423.28602377573645 19.444666563797025 423.28602377573645 19.444666563797025 423.28602377573645 19.444666563797025 L 423.28602377573645 109.657999382782 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 368.7145539389716 109.657999382782 L 368.7145539389716 19.444666563797025 C 368.7145539389716 19.444666563797025 368.7145539389716 19.444666563797025 368.7145539389716 19.444666563797025 L 423.28602377573645 19.444666563797025 C 423.28602377573645 19.444666563797025 423.28602377573645 19.444666563797025 423.28602377573645 19.444666563797025 L 423.28602377573645 109.657999382782 z "
                        pathfrom="M 368.7145539389716 109.657999382782 L 368.7145539389716 109.657999382782 L 423.28602377573645 109.657999382782 L 423.28602377573645 109.657999382782 L 423.28602377573645 109.657999382782 L 423.28602377573645 109.657999382782 L 423.28602377573645 109.657999382782 L 368.7145539389716 109.657999382782 z"
                        cy="18.443666563797024"
                        cx="479.85749361250134"
                        j={3}
                        val={50}
                        barheight="92.21333281898497"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 481.85749361250134 113.3465326955414 L 481.85749361250134 26.821733189315818 C 481.85749361250134 26.821733189315818 481.85749361250134 26.821733189315818 481.85749361250134 26.821733189315818 L 536.4289634492662 26.821733189315818 C 536.4289634492662 26.821733189315818 536.4289634492662 26.821733189315818 536.4289634492662 26.821733189315818 L 536.4289634492662 113.3465326955414 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 481.85749361250134 113.3465326955414 L 481.85749361250134 26.821733189315818 C 481.85749361250134 26.821733189315818 481.85749361250134 26.821733189315818 481.85749361250134 26.821733189315818 L 536.4289634492662 26.821733189315818 C 536.4289634492662 26.821733189315818 536.4289634492662 26.821733189315818 536.4289634492662 26.821733189315818 L 536.4289634492662 113.3465326955414 z "
                        pathfrom="M 481.85749361250134 113.3465326955414 L 481.85749361250134 113.3465326955414 L 536.4289634492662 113.3465326955414 L 536.4289634492662 113.3465326955414 L 536.4289634492662 113.3465326955414 L 536.4289634492662 113.3465326955414 L 536.4289634492662 113.3465326955414 L 481.85749361250134 113.3465326955414 z"
                        cy="25.820733189315817"
                        cx="593.000433286031"
                        j={4}
                        val={48}
                        barheight="88.52479950622558"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 595.000433286031 128.100665946579 L 595.000433286031 56.329999691391016 C 595.000433286031 56.329999691391016 595.000433286031 56.329999691391016 595.000433286031 56.329999691391016 L 649.5719031227959 56.329999691391016 C 649.5719031227959 56.329999691391016 649.5719031227959 56.329999691391016 649.5719031227959 56.329999691391016 L 649.5719031227959 128.100665946579 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 595.000433286031 128.100665946579 L 595.000433286031 56.329999691391016 C 595.000433286031 56.329999691391016 595.000433286031 56.329999691391016 595.000433286031 56.329999691391016 L 649.5719031227959 56.329999691391016 C 649.5719031227959 56.329999691391016 649.5719031227959 56.329999691391016 649.5719031227959 56.329999691391016 L 649.5719031227959 128.100665946579 z "
                        pathfrom="M 595.000433286031 128.100665946579 L 595.000433286031 128.100665946579 L 649.5719031227959 128.100665946579 L 649.5719031227959 128.100665946579 L 649.5719031227959 128.100665946579 L 649.5719031227959 128.100665946579 L 649.5719031227959 128.100665946579 L 595.000433286031 128.100665946579 z"
                        cy="55.32899969139102"
                        cx="706.1433729595608"
                        j={5}
                        val={40}
                        barheight="73.77066625518798"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 708.1433729595608 118.87933266468049 L 708.1433729595608 47.10866640949251 C 708.1433729595608 47.10866640949251 708.1433729595608 47.10866640949251 708.1433729595608 47.10866640949251 L 762.7148427963257 47.10866640949251 C 762.7148427963257 47.10866640949251 762.7148427963257 47.10866640949251 762.7148427963257 47.10866640949251 L 762.7148427963257 118.87933266468049 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 708.1433729595608 118.87933266468049 L 708.1433729595608 47.10866640949251 C 708.1433729595608 47.10866640949251 708.1433729595608 47.10866640949251 708.1433729595608 47.10866640949251 L 762.7148427963257 47.10866640949251 C 762.7148427963257 47.10866640949251 762.7148427963257 47.10866640949251 762.7148427963257 47.10866640949251 L 762.7148427963257 118.87933266468049 z "
                        pathfrom="M 708.1433729595608 118.87933266468049 L 708.1433729595608 118.87933266468049 L 762.7148427963257 118.87933266468049 L 762.7148427963257 118.87933266468049 L 762.7148427963257 118.87933266468049 L 762.7148427963257 118.87933266468049 L 762.7148427963257 118.87933266468049 L 708.1433729595608 118.87933266468049 z"
                        cy="46.10766640949251"
                        cx="819.2863126330906"
                        j={6}
                        val={40}
                        barheight="73.77066625518798"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 821.2863126330906 113.3465326955414 L 821.2863126330906 23.13319987655643 C 821.2863126330906 23.13319987655643 821.2863126330906 23.13319987655643 821.2863126330906 23.13319987655643 L 875.8577824698555 23.13319987655643 C 875.8577824698555 23.13319987655643 875.8577824698555 23.13319987655643 875.8577824698555 23.13319987655643 L 875.8577824698555 113.3465326955414 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 821.2863126330906 113.3465326955414 L 821.2863126330906 23.13319987655643 C 821.2863126330906 23.13319987655643 821.2863126330906 23.13319987655643 821.2863126330906 23.13319987655643 L 875.8577824698555 23.13319987655643 C 875.8577824698555 23.13319987655643 875.8577824698555 23.13319987655643 875.8577824698555 23.13319987655643 L 875.8577824698555 113.3465326955414 z "
                        pathfrom="M 821.2863126330906 113.3465326955414 L 821.2863126330906 113.3465326955414 L 875.8577824698555 113.3465326955414 L 875.8577824698555 113.3465326955414 L 875.8577824698555 113.3465326955414 L 875.8577824698555 113.3465326955414 L 875.8577824698555 113.3465326955414 L 821.2863126330906 113.3465326955414 z"
                        cy="22.132199876556427"
                        cx="932.4292523066204"
                        j={7}
                        val={50}
                        barheight="92.21333281898497"
                        barwidth="56.57146983676486"
                      />
                      <path
                        d="M 934.4292523066204 109.657999382782 L 934.4292523066204 10.223333281898514 C 934.4292523066204 10.223333281898514 934.4292523066204 10.223333281898514 934.4292523066204 10.223333281898514 L 989.0007221433852 10.223333281898514 C 989.0007221433852 10.223333281898514 989.0007221433852 10.223333281898514 989.0007221433852 10.223333281898514 L 989.0007221433852 109.657999382782 z "
                        fill="rgba(233,237,244,1)"
                        fillOpacity={1}
                        stroke="transparent"
                        strokeOpacity={1}
                        strokeLinecap="square"
                        strokeWidth={2}
                        strokeDasharray={0}
                        className="apexcharts-bar-area "
                        index={1}
                        clipPath="url(#gridRectBarMaskgnlzzup5)"
                        pathto="M 934.4292523066204 109.657999382782 L 934.4292523066204 10.223333281898514 C 934.4292523066204 10.223333281898514 934.4292523066204 10.223333281898514 934.4292523066204 10.223333281898514 L 989.0007221433852 10.223333281898514 C 989.0007221433852 10.223333281898514 989.0007221433852 10.223333281898514 989.0007221433852 10.223333281898514 L 989.0007221433852 109.657999382782 z "
                        pathfrom="M 934.4292523066204 109.657999382782 L 934.4292523066204 109.657999382782 L 989.0007221433852 109.657999382782 L 989.0007221433852 109.657999382782 L 989.0007221433852 109.657999382782 L 989.0007221433852 109.657999382782 L 989.0007221433852 109.657999382782 L 934.4292523066204 109.657999382782 z"
                        cy="9.222333281898514"
                        cx="1045.5721919801501"
                        j={8}
                        val={55}
                        barheight="101.43466610088348"
                        barwidth="56.57146983676486"
                      />
                      <g className="apexcharts-bar-goals-markers">
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                        <g
                          classname="apexcharts-bar-goals-groups"
                          className="apexcharts-hidden-element-shown"
                          clipPath="url(#gridRectMarkerMaskgnlzzup5)"
                        />
                      </g>
                    </g>
                    <g className="apexcharts-datalabels" data-realindex={0} />
                    <g className="apexcharts-datalabels" data-realindex={1} />
                  </g>
                  <line
                    x1={0}
                    y1={0}
                    x2="1018.2864570617676"
                    y2={0}
                    stroke="#b6b6b6"
                    strokeDasharray={0}
                    strokeWidth={1}
                    strokeLinecap="butt"
                    className="apexcharts-ycrosshairs"
                  />
                  <line
                    x1={0}
                    y1={0}
                    x2="1018.2864570617676"
                    y2={0}
                    stroke="#b6b6b6"
                    strokeDasharray={0}
                    strokeWidth={0}
                    strokeLinecap="butt"
                    className="apexcharts-ycrosshairs-hidden"
                  />
                  <g className="apexcharts-xaxis" transform="translate(0, 0)">
                    <g
                      className="apexcharts-xaxis-texts-g"
                      transform="translate(0, -4)"
                    >
                      <text
                        x="56.57146983676486"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="169.7144095102946"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="282.85734918382434"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="396.000288857354"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="509.1432285308838"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="622.2861682044136"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>uQ1: 2023l</tspan>
                        <title>uQ1: 2023l</title>
                      </text>
                      <text
                        x="735.4291078779434"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="848.5720475514731"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                      <text
                        x="961.7149872250029"
                        y="212.42666563796996"
                        textAnchor="middle"
                        dominantBaseline="auto"
                        fontSize="12px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-xaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>Q1: 2023</tspan>
                        <title>Q1: 2023</title>
                      </text>
                    </g>
                  </g>
                  <g className="apexcharts-yaxis-annotations" />
                  <g className="apexcharts-xaxis-annotations" />
                  <g className="apexcharts-point-annotations" />
                </g>
              </svg>
              <div
                className="apexcharts-legend apexcharts-align-left apx-legend-position-top"
                style={{
                  right: 0,
                  position: "absolute",
                  left: 0,
                  top: 4,
                  maxHeight: "137.5px"
                }}
              >
                <div
                  className="apexcharts-legend-series"
                  rel={1}
                  seriesname="CollectedxFee"
                  data-collapsed="false"
                  style={{ margin: "4px 5px" }}
                >
                  <span
                    className="apexcharts-legend-marker"
                    rel={1}
                    data-collapsed="false"
                    style={{ height: 16, width: 16, left: 0, top: 0 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100%"
                      height="100%"
                    >
                      <path
                        d="M -6.222222222222222 -6.222222222222222 
     L 6.222222222222222 -6.222222222222222 
     L 6.222222222222222 6.222222222222222 
     L -6.222222222222222 6.222222222222222 
     Z"
                        fill="#3d5ee1"
                        fillOpacity={1}
                        stroke="#ffffff"
                        strokeOpacity="0.9"
                        strokeLinecap="square"
                        strokeWidth={1}
                        strokeDasharray={0}
                        cx={0}
                        cy={0}
                        shape="square"
                        className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-square"
                        style={{ transform: "translate(50%, 50%)" }}
                      />
                    </svg>
                  </span>
                  <span
                    className="apexcharts-legend-text"
                    rel={1}
                    i={0}
                    data-default-text="Collected%20Fee"
                    data-collapsed="false"
                    style={{
                      color: "rgb(93, 99, 105)",
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Helvetica, Arial, sans-serif"
                    }}
                  >
                    Collected Fee
                  </span>
                </div>
                <div
                  className="apexcharts-legend-series"
                  rel={2}
                  seriesname="TotalxFee"
                  data-collapsed="false"
                  style={{ margin: "4px 5px" }}
                >
                  <span
                    className="apexcharts-legend-marker"
                    rel={2}
                    data-collapsed="false"
                    style={{ height: 16, width: 16, left: 0, top: 0 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100%"
                      height="100%"
                    >
                      <path
                        d="M -6.222222222222222 -6.222222222222222 
     L 6.222222222222222 -6.222222222222222 
     L 6.222222222222222 6.222222222222222 
     L -6.222222222222222 6.222222222222222 
     Z"
                        fill="#e9edf4"
                        fillOpacity={1}
                        stroke="#ffffff"
                        strokeOpacity="0.9"
                        strokeLinecap="square"
                        strokeWidth={1}
                        strokeDasharray={0}
                        cx={0}
                        cy={0}
                        shape="square"
                        className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-square"
                        style={{ transform: "translate(50%, 50%)" }}
                      />
                    </svg>
                  </span>
                  <span
                    className="apexcharts-legend-text"
                    rel={2}
                    i={1}
                    data-default-text="Total%20Fee"
                    data-collapsed="false"
                    style={{
                      color: "rgb(93, 99, 105)",
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Helvetica, Arial, sans-serif"
                    }}
                  >
                    Total Fee
                  </span>
                </div>
              </div>
              <div className="apexcharts-tooltip apexcharts-theme-light">
                <div
                  className="apexcharts-tooltip-title"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 12
                  }}
                />
                <div
                  className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                  style={{ order: 1 }}
                >
                  <span
                    className="apexcharts-tooltip-marker"
                    shape="circle"
                    style={{ color: "rgb(61, 94, 225)" }}
                  />
                  <div
                    className="apexcharts-tooltip-text"
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 12
                    }}
                  >
                    <div className="apexcharts-tooltip-y-group">
                      <span className="apexcharts-tooltip-text-y-label" />
                      <span className="apexcharts-tooltip-text-y-value" />
                    </div>
                    <div className="apexcharts-tooltip-goals-group">
                      <span className="apexcharts-tooltip-text-goals-label" />
                      <span className="apexcharts-tooltip-text-goals-value" />
                    </div>
                    <div className="apexcharts-tooltip-z-group">
                      <span className="apexcharts-tooltip-text-z-label" />
                      <span className="apexcharts-tooltip-text-z-value" />
                    </div>
                  </div>
                </div>
                <div
                  className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-1"
                  style={{ order: 2 }}
                >
                  <span
                    className="apexcharts-tooltip-marker"
                    shape="circle"
                    style={{ color: "rgb(233, 237, 244)" }}
                  />
                  <div
                    className="apexcharts-tooltip-text"
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 12
                    }}
                  >
                    <div className="apexcharts-tooltip-y-group">
                      <span className="apexcharts-tooltip-text-y-label" />
                      <span className="apexcharts-tooltip-text-y-value" />
                    </div>
                    <div className="apexcharts-tooltip-goals-group">
                      <span className="apexcharts-tooltip-text-goals-label" />
                      <span className="apexcharts-tooltip-text-goals-value" />
                    </div>
                    <div className="apexcharts-tooltip-z-group">
                      <span className="apexcharts-tooltip-text-z-label" />
                      <span className="apexcharts-tooltip-text-z-value" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                <div className="apexcharts-yaxistooltip-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Fees Collection */}
    {/* Leave Requests */}
    <div className="col-xxl-4 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header  d-flex align-items-center justify-content-between">
          <h4 className="card-title">Leave Requests</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar-due me-1" />
              Today
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Week
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last Week
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="card mb-2">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-lg flex-shrink-0 me-2"
                  >
                    <img
                      src="assets/img/profiles/avatar-14.jpg"
                      alt="student"
                    />
                  </a>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      <a href="javascript:void(0);">James</a>
                      <span className="badge badge-soft-danger ms-1">
                        Emergency
                      </span>
                    </h6>
                    <p className="text-truncate">Physics Teacher</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="avatar avatar-xs p-0 btn btn-success me-1"
                  >
                    <i className="ti ti-checks" />
                  </a>
                  <a href="#" className="avatar avatar-xs p-0 btn btn-danger">
                    <i className="ti ti-x" />
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <p className="mb-0">
                  Leave : <span className="fw-semibold">12 -13 May</span>
                </p>
                <p>
                  Apply on : <span className="fw-semibold">12 May</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-lg flex-shrink-0 me-2"
                  >
                    <img
                      src="assets/img/profiles/avatar-19.jpg"
                      alt="student"
                    />
                  </a>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate ">
                      <a href="javascript:void(0);">Ramien</a>
                      <span className="badge badge-soft-warning ms-1">
                        Casual
                      </span>
                    </h6>
                    <p className="text-truncate">Accountant</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="avatar avatar-xs p-0 btn btn-success me-1"
                  >
                    <i className="ti ti-checks" />
                  </a>
                  <a href="#" className="avatar avatar-xs p-0 btn btn-danger">
                    <i className="ti ti-x" />
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <p className="mb-0">
                  Leave : <span className="fw-semibold">12 -13 May</span>
                </p>
                <p>
                  Apply on : <span className="fw-semibold">11 May</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Leave Requests */}
  </div>
  <div className="row">
    {/* Links */}
    <div className="col-xl-3 col-md-6 d-flex">
      <a
        href="student-attendance.html"
        className="card bg-warning-transparent border border-5 border-white animate-card flex-fill"
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-lg bg-warning rounded flex-shrink-0 me-2">
                <i className="ti ti-calendar-share fs-24" />
              </span>
              <div className="overflow-hidden">
                <h6 className="fw-semibold text-default">View Attendance</h6>
              </div>
            </div>
            <span className="btn btn-white warning-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle">
              <i className="ti ti-chevron-right fs-14" />
            </span>
          </div>
        </div>
      </a>
    </div>
    {/* /Links */}
    {/* Links */}
    <div className="col-xl-3 col-md-6 d-flex">
      <a
        href="events.html"
        className="card bg-success-transparent border border-5 border-white animate-card flex-fill "
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-lg bg-success rounded flex-shrink-0 me-2">
                <i className="ti ti-speakerphone fs-24" />
              </span>
              <div className="overflow-hidden">
                <h6 className="fw-semibold text-default">New Events</h6>
              </div>
            </div>
            <span className="btn btn-white success-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle">
              <i className="ti ti-chevron-right fs-14" />
            </span>
          </div>
        </div>
      </a>
    </div>
    {/* /Links */}
    {/* Links */}
    <div className="col-xl-3 col-md-6 d-flex">
      <a
        href="membership-plans.html"
        className="card bg-danger-transparent border border-5 border-white animate-card flex-fill"
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-lg bg-danger rounded flex-shrink-0 me-2">
                <i className="ti ti-sphere fs-24" />
              </span>
              <div className="overflow-hidden">
                <h6 className="fw-semibold text-default">Membership Plans</h6>
              </div>
            </div>
            <span className="btn btn-white avatar avatar-sm p-0 flex-shrink-0 rounded-circle danger-btn-hover">
              <i className="ti ti-chevron-right fs-14" />
            </span>
          </div>
        </div>
      </a>
    </div>
    {/* /Links */}
    {/* Links */}
    <div className="col-xl-3 col-md-6 d-flex">
      <a
        href="student-attendance.html"
        className="card bg-secondary-transparent border border-5 border-white animate-card flex-fill"
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-lg bg-secondary rounded flex-shrink-0 me-2">
                <i className="ti ti-moneybag fs-24" />
              </span>
              <div className="overflow-hidden">
                <h6 className="fw-semibold text-default">
                  Finance &amp; Accounts
                </h6>
              </div>
            </div>
            <span className="btn btn-white secondary-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle">
              <i className="ti ti-chevron-right fs-14" />
            </span>
          </div>
        </div>
      </a>
    </div>
    {/* /Links */}
  </div>
  <div className="row">
    {/* Total Earnings */}
    <div className="col-xxl-4 col-xl-6 d-flex flex-column">
      <div className="card flex-fill">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className="mb-1">Total Earnings</h6>
              <h2>$64,522,24</h2>
            </div>
            <span className="avatar avatar-lg bg-primary">
              <i className="ti ti-user-dollar" />
            </span>
          </div>
        </div>
        <div id="total-earning" style={{ minHeight: 90 }}>
          <div
            id="apexchartsnop16fmb"
            className="apexcharts-canvas apexchartsnop16fmb apexcharts-theme-light"
            style={{ width: 549, height: 90 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="apexcharts-svg"
              
              transform="translate(0, 0)"
              width={549}
              height={90}
            >
              <foreignObject x={0} y={0} width={549} height={90}>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} "
                  }}
                />
              </foreignObject>
              <rect
                width={0}
                height={0}
                x={0}
                y={0}
                rx={0}
                ry={0}
                opacity={1}
                strokeWidth={0}
                stroke="none"
                strokeDasharray={0}
                fill="#fefefe"
              />
              <g
                className="apexcharts-datalabels-group"
                transform="translate(0, 0) scale(1)"
              />
              <g
                className="apexcharts-datalabels-group"
                transform="translate(0, 0) scale(1)"
              />
              <g
                className="apexcharts-yaxis"
                rel={0}
                transform="translate(-18, 0)"
              />
              <g
                className="apexcharts-inner apexcharts-graphical"
                transform="translate(0, 2)"
              >
                <defs>
                  <clipPath id="gridRectMasknop16fmb">
                    <rect
                      width={557}
                      height={94}
                      x={-4}
                      y={-4}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="gridRectBarMasknop16fmb">
                    <rect
                      width={557}
                      height={94}
                      x={-4}
                      y={-4}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="gridRectMarkerMasknop16fmb">
                    <rect
                      width={557}
                      height={86}
                      x={-4}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="forecastMasknop16fmb" />
                  <clipPath id="nonForecastMasknop16fmb" />
                  <linearGradient
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={1}
                    id="SvgjsLinearGradient1031"
                  >
                    <stop
                      stopOpacity="0.65"
                      stopColor="rgba(61,94,225,0.65)"
                      offset={0}
                    />
                    <stop
                      stopOpacity="0.5"
                      stopColor="rgba(158,175,240,0.5)"
                      offset={1}
                    />
                    <stop
                      stopOpacity="0.5"
                      stopColor="rgba(158,175,240,0.5)"
                      offset={1}
                    />
                  </linearGradient>
                </defs>
                <line
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={86}
                  stroke="#b6b6b6"
                  strokeDasharray={3}
                  strokeLinecap="butt"
                  className="apexcharts-xcrosshairs"
                  x={0}
                  y={0}
                  width={1}
                  height={86}
                  fill="#b1b9c4"
                  filter="none"
                  fillOpacity="0.9"
                  strokeWidth={1}
                />
                <g className="apexcharts-grid">
                  <g
                    className="apexcharts-gridlines-horizontal"
                    style={{ display: "none" }}
                  >
                    <line
                      x1={0}
                      y1={0}
                      x2={549}
                      y2={0}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      x1={0}
                      y1={43}
                      x2={549}
                      y2={43}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      x1={0}
                      y1={86}
                      x2={549}
                      y2={86}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <g
                    className="apexcharts-gridlines-vertical"
                    style={{ display: "none" }}
                  />
                  <line
                    x1={0}
                    y1={86}
                    x2={549}
                    y2={86}
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                  <line
                    x1={0}
                    y1={1}
                    x2={0}
                    y2={86}
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                </g>
                <g
                  className="apexcharts-grid-borders"
                  style={{ display: "none" }}
                />
                <g className="apexcharts-area-series apexcharts-plot-series">
                  <g
                    className="apexcharts-series"
                    zindex={0}
                    seriesname="Earnings"
                    data-longestseries="true"
                    rel={1}
                    data-realindex={0}
                  >
                    <path
                      d="M 0 43 L 91.5 0 L 183 86 L 274.5 43 L 366 64.5 L 457.5 21.5 L 549 43 L 549 86 L 0 86z"
                      fill="url(#SvgjsLinearGradient1031)"
                      fillOpacity={1}
                      stroke="none"
                      strokeOpacity={1}
                      strokeLinecap="butt"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-area"
                      index={0}
                      clipPath="url(#gridRectMasknop16fmb)"
                      pathto="M 0 43 L 91.5 0 L 183 86 L 274.5 43 L 366 64.5 L 457.5 21.5 L 549 43 L 549 86 L 0 86z"
                      pathfrom="M 0 86 L 0 86 L 91.5 86 L 183 86 L 274.5 86 L 366 86 L 457.5 86 L 549 86z"
                    />
                    <path
                      d="M 0 43 L 91.5 0 L 183 86 L 274.5 43 L 366 64.5 L 457.5 21.5 L 549 43"
                      fill="none"
                      fillOpacity={1}
                      stroke="#3d5ee1"
                      strokeOpacity={1}
                      strokeLinecap="butt"
                      strokeWidth={4}
                      strokeDasharray={0}
                      className="apexcharts-area"
                      index={0}
                      clipPath="url(#gridRectMasknop16fmb)"
                      pathto="M 0 43 L 91.5 0 L 183 86 L 274.5 43 L 366 64.5 L 457.5 21.5 L 549 43"
                      pathfrom="M 0 86 L 0 86 L 91.5 86 L 183 86 L 274.5 86 L 366 86 L 457.5 86 L 549 86"
                      fillRule="evenodd"
                    />
                    <g
                      className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                      data-realindex={0}
                    >
                      <g className="apexcharts-series-markers">
                        <path
                          d="M 0, 0 
     m -0, 0 
     a 0,0 0 1,0 0,0 
     a 0,0 0 1,0 -0,0"
                          fill="#3d5ee1"
                          fillOpacity={1}
                          stroke="#ffffff"
                          strokeOpacity="0.9"
                          strokeLinecap="butt"
                          strokeWidth={2}
                          strokeDasharray={0}
                          cx={0}
                          cy={0}
                          shape="circle"
                          className="apexcharts-marker wbii0jds4 no-pointer-events"
                          default-marker-size={0}
                        />
                      </g>
                    </g>
                  </g>
                  <g className="apexcharts-datalabels" data-realindex={0} />
                </g>
                <line
                  x1={0}
                  y1={0}
                  x2={549}
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={1}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs"
                />
                <line
                  x1={0}
                  y1={0}
                  x2={549}
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={0}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs-hidden"
                />
                <g className="apexcharts-xaxis" transform="translate(0, 0)">
                  <g
                    className="apexcharts-xaxis-texts-g"
                    transform="translate(0, -4)"
                  />
                </g>
                <g className="apexcharts-yaxis-annotations" />
                <g className="apexcharts-xaxis-annotations" />
                <g className="apexcharts-point-annotations" />
              </g>
            </svg>
            <div className="apexcharts-legend" style={{ maxHeight: 45 }} />
            <div className="apexcharts-tooltip apexcharts-theme-light">
              <div
                className="apexcharts-tooltip-title"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
              <div
                className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                style={{ order: 1 }}
              >
                <span
                  className="apexcharts-tooltip-marker"
                  shape="circle"
                  style={{ color: "rgb(61, 94, 225)" }}
                />
                <div
                  className="apexcharts-tooltip-text"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 12
                  }}
                >
                  <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-y-label" />
                    <span className="apexcharts-tooltip-text-y-value" />
                  </div>
                  <div className="apexcharts-tooltip-goals-group">
                    <span className="apexcharts-tooltip-text-goals-label" />
                    <span className="apexcharts-tooltip-text-goals-value" />
                  </div>
                  <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label" />
                    <span className="apexcharts-tooltip-text-z-value" />
                  </div>
                </div>
              </div>
            </div>
            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
              <div className="apexcharts-yaxistooltip-text" />
            </div>
          </div>
        </div>
      </div>
      <div className="card flex-fill">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className="mb-1">Total Expenses</h6>
              <h2>$60,522,24</h2>
            </div>
            <span className="avatar avatar-lg bg-danger">
              <i className="ti ti-user-dollar" />
            </span>
          </div>
        </div>
        <div id="total-expenses" style={{ minHeight: 90 }}>
          <div
            id="apexchartso9b3a65s"
            className="apexcharts-canvas apexchartso9b3a65s apexcharts-theme-light"
            style={{ width: 549, height: 90 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="apexcharts-svg"
              
              transform="translate(0, 0)"
              width={549}
              height={90}
            >
              <foreignObject x={0} y={0} width={549} height={90}>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} "
                  }}
                />
              </foreignObject>
              <rect
                width={0}
                height={0}
                x={0}
                y={0}
                rx={0}
                ry={0}
                opacity={1}
                strokeWidth={0}
                stroke="none"
                strokeDasharray={0}
                fill="#fefefe"
              />
              <g
                className="apexcharts-datalabels-group"
                transform="translate(0, 0) scale(1)"
              />
              <g
                className="apexcharts-datalabels-group"
                transform="translate(0, 0) scale(1)"
              />
              <g
                className="apexcharts-yaxis"
                rel={0}
                transform="translate(-18, 0)"
              />
              <g
                className="apexcharts-inner apexcharts-graphical"
                transform="translate(0, 2)"
              >
                <defs>
                  <clipPath id="gridRectMasko9b3a65s">
                    <rect
                      width={557}
                      height={94}
                      x={-4}
                      y={-4}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="gridRectBarMasko9b3a65s">
                    <rect
                      width={557}
                      height={94}
                      x={-4}
                      y={-4}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="gridRectMarkerMasko9b3a65s">
                    <rect
                      width={557}
                      height={86}
                      x={-4}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="forecastMasko9b3a65s" />
                  <clipPath id="nonForecastMasko9b3a65s" />
                  <linearGradient
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={1}
                    id="SvgjsLinearGradient1032"
                  >
                    <stop
                      stopOpacity="0.65"
                      stopColor="rgba(232,38,70,0.65)"
                      offset={0}
                    />
                    <stop
                      stopOpacity="0.5"
                      stopColor="rgba(244,147,163,0.5)"
                      offset={1}
                    />
                    <stop
                      stopOpacity="0.5"
                      stopColor="rgba(244,147,163,0.5)"
                      offset={1}
                    />
                  </linearGradient>
                </defs>
                <line
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={86}
                  stroke="#b6b6b6"
                  strokeDasharray={3}
                  strokeLinecap="butt"
                  className="apexcharts-xcrosshairs"
                  x={0}
                  y={0}
                  width={1}
                  height={86}
                  fill="#b1b9c4"
                  filter="none"
                  fillOpacity="0.9"
                  strokeWidth={1}
                />
                <g className="apexcharts-grid">
                  <g
                    className="apexcharts-gridlines-horizontal"
                    style={{ display: "none" }}
                  >
                    <line
                      x1={0}
                      y1={0}
                      x2={549}
                      y2={0}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      x1={0}
                      y1={43}
                      x2={549}
                      y2={43}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      x1={0}
                      y1={86}
                      x2={549}
                      y2={86}
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <g
                    className="apexcharts-gridlines-vertical"
                    style={{ display: "none" }}
                  />
                  <line
                    x1={0}
                    y1={86}
                    x2={549}
                    y2={86}
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                  <line
                    x1={0}
                    y1={1}
                    x2={0}
                    y2={86}
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                </g>
                <g
                  className="apexcharts-grid-borders"
                  style={{ display: "none" }}
                />
                <g className="apexcharts-area-series apexcharts-plot-series">
                  <g
                    className="apexcharts-series"
                    zindex={0}
                    seriesname="Earnings"
                    data-longestseries="true"
                    rel={1}
                    data-realindex={0}
                  >
                    <path
                      d="M 0 43 L 91.5 86 L 183 0 L 274.5 10.75 L 366 21.5 L 457.5 10.75 L 549 43 L 549 86 L 0 86z"
                      fill="url(#SvgjsLinearGradient1032)"
                      fillOpacity={1}
                      stroke="none"
                      strokeOpacity={1}
                      strokeLinecap="butt"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-area"
                      index={0}
                      clipPath="url(#gridRectMasko9b3a65s)"
                      pathto="M 0 43 L 91.5 86 L 183 0 L 274.5 10.75 L 366 21.5 L 457.5 10.75 L 549 43 L 549 86 L 0 86z"
                      pathfrom="M 0 86 L 0 86 L 91.5 86 L 183 86 L 274.5 86 L 366 86 L 457.5 86 L 549 86z"
                    />
                    <path
                      d="M 0 43 L 91.5 86 L 183 0 L 274.5 10.75 L 366 21.5 L 457.5 10.75 L 549 43"
                      fill="none"
                      fillOpacity={1}
                      stroke="#e82646"
                      strokeOpacity={1}
                      strokeLinecap="butt"
                      strokeWidth={4}
                      strokeDasharray={0}
                      className="apexcharts-area"
                      index={0}
                      clipPath="url(#gridRectMasko9b3a65s)"
                      pathto="M 0 43 L 91.5 86 L 183 0 L 274.5 10.75 L 366 21.5 L 457.5 10.75 L 549 43"
                      pathfrom="M 0 86 L 0 86 L 91.5 86 L 183 86 L 274.5 86 L 366 86 L 457.5 86 L 549 86"
                      fillRule="evenodd"
                    />
                    <g
                      className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                      data-realindex={0}
                    >
                      <g className="apexcharts-series-markers">
                        <path
                          d="M 0, 0 
     m -0, 0 
     a 0,0 0 1,0 0,0 
     a 0,0 0 1,0 -0,0"
                          fill="#e82646"
                          fillOpacity={1}
                          stroke="#ffffff"
                          strokeOpacity="0.9"
                          strokeLinecap="butt"
                          strokeWidth={2}
                          strokeDasharray={0}
                          cx={0}
                          cy={0}
                          shape="circle"
                          className="apexcharts-marker wfd4e8brt no-pointer-events"
                          default-marker-size={0}
                        />
                      </g>
                    </g>
                  </g>
                  <g className="apexcharts-datalabels" data-realindex={0} />
                </g>
                <line
                  x1={0}
                  y1={0}
                  x2={549}
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={1}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs"
                />
                <line
                  x1={0}
                  y1={0}
                  x2={549}
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={0}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs-hidden"
                />
                <g className="apexcharts-xaxis" transform="translate(0, 0)">
                  <g
                    className="apexcharts-xaxis-texts-g"
                    transform="translate(0, -4)"
                  />
                </g>
                <g className="apexcharts-yaxis-annotations" />
                <g className="apexcharts-xaxis-annotations" />
                <g className="apexcharts-point-annotations" />
              </g>
            </svg>
            <div className="apexcharts-legend" style={{ maxHeight: 45 }} />
            <div className="apexcharts-tooltip apexcharts-theme-light">
              <div
                className="apexcharts-tooltip-title"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
              <div
                className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                style={{ order: 1 }}
              >
                <span
                  className="apexcharts-tooltip-marker"
                  shape="circle"
                  style={{ color: "rgb(232, 38, 70)" }}
                />
                <div
                  className="apexcharts-tooltip-text"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 12
                  }}
                >
                  <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-y-label" />
                    <span className="apexcharts-tooltip-text-y-value" />
                  </div>
                  <div className="apexcharts-tooltip-goals-group">
                    <span className="apexcharts-tooltip-text-goals-label" />
                    <span className="apexcharts-tooltip-text-goals-value" />
                  </div>
                  <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label" />
                    <span className="apexcharts-tooltip-text-z-value" />
                  </div>
                </div>
              </div>
            </div>
            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
              <div className="apexcharts-yaxistooltip-text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Total Earnings */}
    {/* Notice Board */}
    <div className="col-xxl-5 col-xl-12 order-3 order-xxl-2 d-flex">
      <div className="card flex-fill">
        <div className="card-header  d-flex align-items-center justify-content-between">
          <h4 className="card-title">Notice Board</h4>
          <a href="notice-board.html" className="fw-medium">
            View All
          </a>
        </div>
        <div className="card-body">
          <div className="notice-widget">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0">
                <span className="bg-primary-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-books fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">
                    New Syllabus Instructions
                  </h6>
                  <p>
                    <i className="ti ti-calendar me-2" />
                    Added on : 11 Mar 2024
                  </p>
                </div>
              </div>
              <span className="badge bg-light text-dark">
                <i className="ti ti-clck me-1" />
                20 Days
              </span>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0">
                <span className="bg-success-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-note fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">
                    World Environment Day Program.....!!!
                  </h6>
                  <p>
                    <i className="ti ti-calendar me-2" />
                    Added on : 21 Apr 2024
                  </p>
                </div>
              </div>
              <span className="badge bg-light text-dark">
                <i className="ti ti-clck me-1" />
                15 Days
              </span>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0">
                <span className="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-bell-check fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">
                    Exam Preparation Notification!
                  </h6>
                  <p>
                    <i className="ti ti-calendar me-2" />
                    Added on : 13 Mar 2024
                  </p>
                </div>
              </div>
              <span className="badge bg-light text-dark">
                <i className="ti ti-clck me-1" />
                12 Days
              </span>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0">
                <span className="bg-skyblue-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-notes fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">
                    Online Classes Preparation
                  </h6>
                  <p>
                    <i className="ti ti-calendar me-2" />
                    Added on : 24 May 2024
                  </p>
                </div>
              </div>
              <span className="badge bg-light text-dark">
                <i className="ti ti-clck me-1" />
                02 Days
              </span>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-0">
              <div className="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0">
                <span className="bg-warning-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-package fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">
                    Exam Time Table Release
                  </h6>
                  <p>
                    <i className="ti ti-calendar me-2" />
                    Added on : 24 May 2024
                  </p>
                </div>
              </div>
              <span className="badge bg-light text-dark">
                <i className="ti ti-clck me-1" />
                06 Days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Notice Board */}
    {/* Fees Collection */}
    <div className="col-xxl-3 col-xl-6 order-2 order-xxl-3 d-flex flex-column">
      <div className="card flex-fill mb-2">
        <div className="card-body">
          <p className="mb-2">Total Fees Collected</p>
          <div className="d-flex align-items-end justify-content-between">
            <h4>$25,000,02</h4>
            <span className="badge badge-soft-success">
              <i className="ti ti-chart-line me-1" />
              1.2%
            </span>
          </div>
        </div>
      </div>
      <div className="card flex-fill mb-2">
        <div className="card-body">
          <p className="mb-2">Fine Collected till date</p>
          <div className="d-flex align-items-end justify-content-between">
            <h4>$4,56,64</h4>
            <span className="badge badge-soft-danger">
              <i className="ti ti-chart-line me-1" />
              1.2%
            </span>
          </div>
        </div>
      </div>
      <div className="card flex-fill mb-2">
        <div className="card-body">
          <p className="mb-2">Student Not Paid</p>
          <div className="d-flex align-items-end justify-content-between">
            <h4>$545</h4>
            <span className="badge badge-soft-info">
              <i className="ti ti-chart-line me-1" />
              1.2%
            </span>
          </div>
        </div>
      </div>
      <div className="card flex-fill mb-4">
        <div className="card-body">
          <p className="mb-2">Total Outstanding</p>
          <div className="d-flex align-items-end justify-content-between">
            <h4>$4,56,64</h4>
            <span className="badge badge-soft-danger">
              <i className="ti ti-chart-line me-1" />
              1.2%
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* /Fees Collection */}
  </div>
  <div className="row">
    {/* Top Subjects */}
    <div className="col-xxl-4 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header  d-flex align-items-center justify-content-between">
          <h4 className="card-title">Top Subjects</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-school-bell  me-2" />
              Class II
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class I
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class II
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class III
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Class IV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div
            className="alert alert-success d-flex align-items-center mb-24"
            role="alert"
          >
            <i className="ti ti-info-square-rounded me-2 fs-14" />
            <div className="fs-14">
              These Result are obtained from the syllabus completion on the
              respective Class
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">Maths</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-primary rounded"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">Physics</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-secondary rounded"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">Chemistry</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-info rounded"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">Botany</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-success rounded"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">English</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-warning rounded"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">Spanish</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-danger rounded"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <p className="text-dark">Japanese</p>
                </div>
                <div className="col-sm-8">
                  <div className="progress progress-xs flex-grow-1">
                    <div
                      className="progress-bar bg-primary rounded"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Top Subjects */}
    {/* Student Activity */}
    <div className="col-xxl-4 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header  d-flex align-items-center justify-content-between">
          <h4 className="card-title">Student Activity</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-2" />
              This Month
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Month
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Year
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center overflow-hidden p-3 mb-3 border rounded">
            <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
              <img src="assets/img/students/student-09.jpg" alt="student" />
            </span>
            <div className="overflow-hidden">
              <h6 className="mb-1 text-truncate">1st place in "Chess”</h6>
              <p>This event took place in Our School</p>
            </div>
          </div>
          <div className="d-flex align-items-center overflow-hidden p-3 mb-3 border rounded">
            <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
              <img src="assets/img/students/student-12.jpg" alt="student" />
            </span>
            <div className="overflow-hidden">
              <h6 className="mb-1 text-truncate">Participated in "Carrom"</h6>
              <p>Justin Lee participated in "Carrom"</p>
            </div>
          </div>
          <div className="d-flex align-items-center overflow-hidden p-3 mb-3 border rounded">
            <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
              <img src="assets/img/students/student-11.jpg" alt="student" />
            </span>
            <div className="overflow-hidden">
              <h6 className="mb-1 text-truncate">1st place in "100M”</h6>
              <p>This event took place in Our School</p>
            </div>
          </div>
          <div className="d-flex align-items-center overflow-hidden p-3 mb-0 border rounded">
            <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
              <img src="assets/img/students/student-10.jpg" alt="student" />
            </span>
            <div className="overflow-hidden">
              <h6 className="mb-1 text-truncate">International conference</h6>
              <p className="text-truncate">
                We attended international conference
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Student Activity */}
    {/* Todo */}
    <div className="col-xxl-4 col-xl-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header  d-flex align-items-center justify-content-between">
          <h4 className="card-title">Todo</h4>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-2" />
              Today
            </a>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Month
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  This Year
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush todo-list">
            <li className="list-group-item py-3 px-0 pt-0">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center overflow-hidden me-2 todo-strike-content">
                  <div className="form-check form-check-md me-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked=""
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      Send Reminder to Students
                    </h6>
                    <p>01:00 PM</p>
                  </div>
                </div>
                <span className="badge badge-soft-success mt-2 mt-sm-0">
                  Compeleted
                </span>
              </div>
            </li>
            <li className="list-group-item py-3 px-0">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <div className="form-check form-check-md me-2">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      Create Routine to new staff
                    </h6>
                    <p>04:50 PM</p>
                  </div>
                </div>
                <span className="badge badge-soft-skyblue mt-2 mt-sm-0">
                  Inprogress
                </span>
              </div>
            </li>
            <li className="list-group-item py-3 px-0">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <div className="form-check form-check-md me-2">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      Extra Class Info to Students
                    </h6>
                    <p>04:55 PM</p>
                  </div>
                </div>
                <span className="badge badge-soft-warning mt-2 mt-sm-0">
                  Yet to Start
                </span>
              </div>
            </li>
            <li className="list-group-item py-3 px-0">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <div className="form-check form-check-md me-2">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      Fees for Upcoming Academics
                    </h6>
                    <p>04:55 PM</p>
                  </div>
                </div>
                <span className="badge badge-soft-warning mt-2 mt-sm-0">
                  Yet to Start
                </span>
              </div>
            </li>
            <li className="list-group-item py-3 px-0 pb-0">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <div className="form-check form-check-md me-2">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      English - Essay on Visit
                    </h6>
                    <p>05:55 PM</p>
                  </div>
                </div>
                <span className="badge badge-soft-warning mt-2 mt-sm-0">
                  Yet to Start
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Todo */}
  </div>
  </div>




  <div className="modal fade" id="add_class_routine">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-wrapper">
        <div className="modal-header">
          <h4 className="modal-title">Add Class Routine</h4>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="index.html">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Teacher</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={1}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={3}>Select</option>
                    <option>Erickson</option>
                    <option>Mori</option>
                    <option>Joseph</option>
                    <option>James</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={2}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-l9vu-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-l9vu-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select"
                        >
                          Select
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Class</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={4}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={6}>Select</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={5}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-e810-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-e810-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select"
                        >
                          Select
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Section</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={7}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={9}>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={8}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-2f17-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-2f17-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select"
                        >
                          Select
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Day</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={10}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={12}>Select</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wedneshday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={11}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-veir-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-veir-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select"
                        >
                          Select
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Time</label>
                      <div className="date-pic">
                        <input
                          type="text"
                          className="form-control timepicker"
                          placeholder="Choose"
                        />
                        <span className="cal-icon">
                          <i className="ti ti-clock" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End Time</label>
                      <div className="date-pic">
                        <input
                          type="text"
                          className="form-control timepicker"
                          placeholder="Choose"
                        />
                        <span className="cal-icon">
                          <i className="ti ti-clock" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Class Room</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={13}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={15}>Select</option>
                    <option>101</option>
                    <option>102</option>
                    <option>103</option>
                    <option>104</option>
                    <option>105</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={14}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-fy5c-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-fy5c-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select"
                        >
                          Select
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="modal-satus-toggle d-flex align-items-center justify-content-between">
                  <div className="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle </p>
                  </div>
                  <div className="status-toggle modal-status">
                    <input type="checkbox" id="user1" className="check" />
                    <label htmlFor="user1" className="checktoggle">
                      {" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">
              Add Class Routine
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="add_event">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">New Event</h4>
        <button
          type="button"
          className="btn-close custom-btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="ti ti-x" />
        </button>
      </div>
      <form action="index.html">
        <div className="modal-body">
          <div className="row">
            <div className="col-md-12">
              <div>
                <label className="form-label">Event For</label>
                <div className="d-flex align-items-center flex-wrap">
                  <div className="form-check me-3 mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="event"
                      id="all"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="all">
                      All
                    </label>
                  </div>
                  <div className="form-check me-3 mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="event"
                      id="students"
                    />
                    <label className="form-check-label" htmlFor="students">
                      Students
                    </label>
                  </div>
                  <div className="form-check me-3 mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="event"
                      id="staffs"
                    />
                    <label className="form-check-label" htmlFor="staffs">
                      Staffs
                    </label>
                  </div>
                </div>
              </div>
              <div className="all-content" id="all-student">
                <div className="mb-3">
                  <label className="form-label">Classes</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={16}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={18}>All Classes</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={17}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-wlj8-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-wlj8-container"
                          role="textbox"
                          aria-readonly="true"
                          title="All Classes"
                        >
                          All Classes
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Sections</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={19}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={21}>All Sections</option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={20}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-v8fq-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-v8fq-container"
                          role="textbox"
                          aria-readonly="true"
                          title="All Sections"
                        >
                          All Sections
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="all-content" id="all-staffs">
                <div className="mb-3">
                  <div className="bg-light-500 p-3 pb-2 rounded">
                    <label className="form-label">Role</label>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-check form-check-sm mb-2">
                          <input className="form-check-input" type="checkbox" />
                          Admin
                        </div>
                        <div className="form-check form-check-sm mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked=""
                          />
                          Teacher
                        </div>
                        <div className="form-check form-check-sm mb-2">
                          <input className="form-check-input" type="checkbox" />
                          Driver
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check form-check-sm mb-2">
                          <input className="form-check-input" type="checkbox" />
                          Accountant
                        </div>
                        <div className="form-check form-check-sm mb-2">
                          <input className="form-check-input" type="checkbox" />
                          Librarian
                        </div>
                        <div className="form-check form-check-sm mb-2">
                          <input className="form-check-input" type="checkbox" />
                          Receptionist
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">All Teachers</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={22}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={24}>Select</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={23}
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-hspc-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-hspc-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select"
                        >
                          Select
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Event Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Event Category</label>
              <select
                className="select select2-hidden-accessible"
                data-select2-id={25}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option data-select2-id={27}>Select</option>
                <option>Celebration</option>
                <option>Training</option>
                <option>Meeting</option>
                <option>Holidays</option>
              </select>
              <span
                className="select2 select2-container select2-container--default"
                dir="ltr"
                data-select2-id={26}
                style={{ width: "100%" }}
              >
                <span className="selection">
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    aria-disabled="false"
                    aria-labelledby="select2-axuy-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-axuy-container"
                      role="textbox"
                      aria-readonly="true"
                      title="Select"
                    >
                      Select
                    </span>
                    <span
                      className="select2-selection__arrow"
                      role="presentation"
                    >
                      <b role="presentation" />
                    </span>
                  </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true" />
              </span>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Start Date</label>
                <div className="date-pic">
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    placeholder="15 May 2024"
                  />
                  <span className="cal-icon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">End Date</label>
                <div className="date-pic">
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    placeholder="21 May 2024"
                  />
                  <span className="cal-icon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Start Time</label>
                <div className="date-pic">
                  <input
                    type="text"
                    className="form-control timepicker"
                    placeholder="09:10 AM"
                  />
                  <span className="cal-icon">
                    <i className="ti ti-clock" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">End Time</label>
                <div className="date-pic">
                  <input
                    type="text"
                    className="form-control timepicker"
                    placeholder="12:50 PM"
                  />
                  <span className="cal-icon">
                    <i className="ti ti-clock" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <div className="bg-light p-3 pb-2 rounded">
                  <div className="mb-3">
                    <label className="form-label">Attachment</label>
                    <p>Upload size of 4MB, Accepted Format PDF</p>
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="btn btn-primary drag-upload-btn mb-2 me-2">
                      <i className="ti ti-file-upload me-1" />
                      Upload
                      <input
                        type="file"
                        className="form-control image_sign"
                        multiple=""
                      />
                    </div>
                    <p className="mb-2">Fees_Structure.pdf</p>
                  </div>
                </div>
              </div>
              <div className="mb-0">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows={4}
                  defaultValue={
                    "Meeting with Staffs on the Quality Improvement s and completion of syllabus before the August,  enhance the students health issue"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">
            Cancel
          </a>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</div>



<div className="sidebar-contact ">
  <div
    className="toggle-theme"
    data-bs-toggle="offcanvas"
    data-bs-target="#theme-setting"
  >
    <i className="fa fa-cog fa-w-16 fa-spin" />
  </div>
</div>



    </>
  )
}

export default Home


