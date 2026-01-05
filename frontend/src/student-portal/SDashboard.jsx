import React from 'react'
import { useEffect } from 'react'

const SDashboard = () => {
const svgRef =  React.useRef(null);  
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.setAttribute("xmlns:data", "apexchartsNS");
    }
 
  }, [])



  return (
    <div className="content" style={{ overflowX: 'hidden', width: '100%' }}>
    {/* Page Header */}
    <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
      <div className="my-auto mb-2">
        <h3 className="page-title mb-1">Student Dashboard</h3>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Student Dashboard
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row g-3" style={{ margin: 0, width: '100%', maxWidth: '100%' }}>
      <div className="col-12 col-lg-8 col-xxl-8 d-flex" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="row flex-fill" style={{ width: '100%', margin: 0 }}>
          {/* Profile */}
          <div className="col-12 col-md-6 col-xl-6 d-flex" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <div className="flex-fill" style={{ width: '100%', maxWidth: '100%' }}>
              <div className="card bg-dark position-relative" style={{ width: '100%', maxWidth: '100%' }}>
                <div className="card-body">
                  <div className="d-flex align-items-center row-gap-3 mb-3 flex-wrap">
                    <div className="avatar avatar-xxl rounded flex-shrink-0 me-3 mb-2 mb-md-0">
                      <img src="assets/img/students/student-13.jpg" alt="Img" className="img-fluid" />
                    </div>
                    <div className="d-block flex-grow-1">
                      <span className="badge bg-transparent-primary text-primary mb-1 d-inline-block">
                        #ST1234546
                      </span>
                      <h3 className="text-truncate text-white mb-1 fs-4 fs-md-3">
                        Angelo Riana
                      </h3>
                      <div className="d-flex align-items-center flex-wrap row-gap-2 text-gray-2">
                        <span className="border-end me-2 pe-2 mb-1 mb-md-0">
                          Class : III, C
                        </span>
                        <span>Roll No : 36545</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between profile-footer flex-wrap row-gap-3 pt-4">
                    <div className="d-flex align-items-center">
                      <h6 className="text-white">1st Quarterly</h6>
                      <span className="badge bg-success d-inline-flex align-items-center ms-2">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Pass
                      </span>
                    </div>
                    <a href="edit-student.html" className="btn btn-primary">
                      Edit Profile
                    </a>
                  </div>
                  <div className="student-card-bg">
                    <img src="assets/img/bg/circle-shape.png" alt="Bg" />
                    <img src="assets/img/bg/shape-02.png" alt="Bg" />
                    <img src="assets/img/bg/shape-04.png" alt="Bg" />
                    <img src="assets/img/bg/blue-polygon.png" alt="Bg" />
                  </div>
                </div>
              </div>
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h4 className="card-title mb-0">Today's Class</h4>
                  <div className="d-inline-flex align-items-center class-datepick">
                    <span className="icon">
                      <i className="ti ti-chevron-left me-2" />
                    </span>
                    <input
                      type="text"
                      className="form-control datetimepicker border-0"
                      placeholder="16 May 2024"
                    />
                    <span className="icon">
                      <i className="ti ti-chevron-right" />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                          <img
                            src="assets/img/parents/parent-07.jpg"
                            alt="Profile"
                            className="img-fluid"
                          />
                        </span>
                        <div>
                          <h6 className="mb-1 text-decoration-line-through">
                            English
                          </h6>
                          <span>
                            <i className="ti ti-clock me-2" />
                            09:00 - 09:45 AM
                          </span>
                        </div>
                      </div>
                      <span className="badge badge-soft-success shadow-none mb-2">
                        <i className="ti ti-circle-filled fs-8 me-1" />
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                          <img
                            src="assets/img/parents/parent-02.jpg"
                            alt="Profile"
                            className="img-fluid"
                          />
                        </span>
                        <div>
                          <h6 className="mb-1 text-decoration-line-through">
                            Chemistry
                          </h6>
                          <span>
                            <i className="ti ti-clock me-2" />
                            10:45 - 11:30 AM
                          </span>
                        </div>
                      </div>
                      <span className="badge badge-soft-success shadow-none mb-2">
                        <i className="ti ti-circle-filled fs-8 me-1" />
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                          <img
                            src="assets/img/profiles/avatar-17.jpg"
                            alt="Profile"
                            className="img-fluid"
                          />
                        </span>
                        <div>
                          <h6 className="mb-1">Physics</h6>
                          <span>
                            <i className="ti ti-clock me-2" />
                            11:30 - 12:15 AM
                          </span>
                        </div>
                      </div>
                      <span className="badge badge-soft-warning shadow-none mb-2">
                        <i className="ti ti-circle-filled fs-8 me-1" />
                        Inprogress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Profile */}
          {/* Attendance */}
          <div className="col-12 col-md-6 col-xl-6 d-flex" style={{ maxWidth: '100%' }}>
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h4 className="card-title mb-0">Attendance</h4>
                <div className="card-dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle p-2"
                    data-bs-toggle="dropdown"
                  >
                    <span>
                      <i className="ti ti-calendar-due" />
                    </span>
                    This Week
                  </a>
                  <div className="dropdown-menu  dropdown-menu-end">
                    <ul>
                      <li>
                        <a href="javascript:void(0);">This Week</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Last Week</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Last Month</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="attendance-chart">
                  <p className="mb-3">
                    <i className="ti ti-calendar-heart text-primary me-2" />
                    No of total working days{" "}
                    <span className="fw-medium text-dark"> 28 Days</span>
                  </p>
                  <div className="border rounded p-3">
                    <div className="row">
                      <div className="col text-center border-end">
                        <p className="mb-1">Present</p>
                        <h5>25</h5>
                      </div>
                      <div className="col text-center border-end">
                        <p className="mb-1">Absent</p>
                        <h5>2</h5>
                      </div>
                      <div className="col text-center">
                        <p className="mb-1">Halfday</p>
                        <h5>0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{ width: '100%', overflow: 'hidden' }}>
                    <div id="attendance_chart" style={{ minHeight: 255, width: '100%', overflow: 'hidden' }}>
                      <div
                        id="apexchartsmkg8bufr"
                        className="apexcharts-canvas apexchartsmkg8bufr apexcharts-theme-light"
                        style={{ width: '100%', maxWidth: '100%', height: 255, margin: '0 auto' }}
                      >
                        <svg
                        ref= {svgRef}
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg"
                           transform="translate(0, 0)"
                          width="100%"
                          height={255}
                          style={{ maxWidth: '100%' }}
                          viewBox="0 0 818 255"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <foreignObject x={0} y={0} width="100%" height={255}>
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
                            transform="translate(0, 0)"
                          >
                            <defs>
                              <clipPath id="gridRectMaskmkg8bufr">
                                <rect
                                  width="100%"
                                  height={229}
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
                              <clipPath id="gridRectBarMaskmkg8bufr">
                                <rect
                                  width="100%"
                                  height={229}
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
                              <clipPath id="gridRectMarkerMaskmkg8bufr">
                                <rect
                                  width="100%"
                                  height={223}
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
                              <clipPath id="forecastMaskmkg8bufr" />
                              <clipPath id="nonForecastMaskmkg8bufr" />
                            </defs>
                            <g className="apexcharts-pie">
                              <g transform="translate(0, 0) scale(1)">
                                <circle
                                  r="66.80731707317074"
                                  cx={409}
                                  cy="111.5"
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
                                      d="M 409 8.719512195121936 A 102.78048780487806 102.78048780487806 0 1 1 348.5871450448663 194.6511613242934 L 369.7316442791631 165.5482548607907 A 66.80731707317074 66.80731707317074 0 1 0 409 44.692682926829264 L 409 8.719512195121936 z "
                                      fill="rgba(26,190,23,1)"
                                      fillOpacity={1}
                                      stroke="#ffffff"
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={2}
                                      strokeDasharray={0}
                                      className="apexcharts-pie-area apexcharts-donut-slice-0"
                                      index={0}
                                      j={0}
                                      data-angle={216}
                                      data-startangle={0}
                                      data-strokewidth={2}
                                      data-value={60}
                                      data-pathorig="M 409 8.719512195121936 A 102.78048780487806 102.78048780487806 0 1 1 348.5871450448663 194.6511613242934 L 369.7316442791631 165.5482548607907 A 66.80731707317074 66.80731707317074 0 1 0 409 44.692682926829264 L 409 8.719512195121936 z "
                                    />
                                  </g>
                                  <g
                                    className="apexcharts-series apexcharts-pie-series"
                                    seriesname="Late"
                                    rel={2}
                                    data-realindex={1}
                                  >
                                    <path
                                      d="M 348.5871450448663 194.6511613242934 A 102.78048780487806 102.78048780487806 0 0 1 325.8488386757066 171.91285495513372 L 354.9517451392093 150.76835572083692 A 66.80731707317074 66.80731707317074 0 0 0 369.7316442791631 165.5482548607907 L 348.5871450448663 194.6511613242934 z "
                                      fill="rgba(17,112,228,1)"
                                      fillOpacity={1}
                                      stroke="#ffffff"
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={2}
                                      strokeDasharray={0}
                                      className="apexcharts-pie-area apexcharts-donut-slice-1"
                                      index={0}
                                      j={1}
                                      data-angle={18}
                                      data-startangle={216}
                                      data-strokewidth={2}
                                      data-value={5}
                                      data-pathorig="M 348.5871450448663 194.6511613242934 A 102.78048780487806 102.78048780487806 0 0 1 325.8488386757066 171.91285495513372 L 354.9517451392093 150.76835572083692 A 66.80731707317074 66.80731707317074 0 0 0 369.7316442791631 165.5482548607907 L 348.5871450448663 194.6511613242934 z "
                                    />
                                  </g>
                                  <g
                                    className="apexcharts-series apexcharts-pie-series"
                                    seriesname="HalfxDay"
                                    rel={3}
                                    data-realindex={2}
                                  >
                                    <path
                                      d="M 325.8488386757066 171.91285495513372 A 102.78048780487806 102.78048780487806 0 0 1 311.24994732517615 79.73908257814561 L 345.4624657613645 90.85540367579465 A 66.80731707317074 66.80731707317074 0 0 0 354.9517451392093 150.76835572083692 L 325.8488386757066 171.91285495513372 z "
                                      fill="rgba(233,237,244,1)"
                                      fillOpacity={1}
                                      stroke="#ffffff"
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={2}
                                      strokeDasharray={0}
                                      className="apexcharts-pie-area apexcharts-donut-slice-2"
                                      index={0}
                                      j={2}
                                      data-angle={54}
                                      data-startangle={234}
                                      data-strokewidth={2}
                                      data-value={15}
                                      data-pathorig="M 325.8488386757066 171.91285495513372 A 102.78048780487806 102.78048780487806 0 0 1 311.24994732517615 79.73908257814561 L 345.4624657613645 90.85540367579465 A 66.80731707317074 66.80731707317074 0 0 0 354.9517451392093 150.76835572083692 L 325.8488386757066 171.91285495513372 z "
                                    />
                                  </g>
                                  <g
                                    className="apexcharts-series apexcharts-pie-series"
                                    seriesname="Absent"
                                    rel={4}
                                    data-realindex={3}
                                  >
                                    <path
                                      d="M 311.24994732517615 79.73908257814561 A 102.78048780487806 102.78048780487806 0 0 1 408.98206142090106 8.719513760558272 L 408.98833992358567 44.692683944362884 A 66.80731707317074 66.80731707317074 0 0 0 345.4624657613645 90.85540367579465 L 311.24994732517615 79.73908257814561 z "
                                      fill="rgba(232,38,70,1)"
                                      fillOpacity={1}
                                      stroke="#ffffff"
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={2}
                                      strokeDasharray={0}
                                      className="apexcharts-pie-area apexcharts-donut-slice-3"
                                      index={0}
                                      j={3}
                                      data-angle={72}
                                      data-startangle={288}
                                      data-strokewidth={2}
                                      data-value={20}
                                      data-pathorig="M 311.24994732517615 79.73908257814561 A 102.78048780487806 102.78048780487806 0 0 1 408.98206142090106 8.719513760558272 L 408.98833992358567 44.692683944362884 A 66.80731707317074 66.80731707317074 0 0 0 345.4624657613645 90.85540367579465 L 311.24994732517615 79.73908257814561 z "
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <line
                              x1={0}
                              y1={0}
                              x2={818}
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
                              x2={818}
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
                        <div
                          className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                          style={{
                            right: 0,
                            position: "absolute",
                            left: 0,
                            top: 232,
                            maxHeight: "127.5px"
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            rel={1}
                            seriesname="Present"
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
                                  d="M 0, 0 
     m -7, 0 
     a 7,7 0 1,0 14,0 
     a 7,7 0 1,0 -14,0"
                                  fill="#1abe17"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={1}
                                  strokeDasharray={0}
                                  cx={0}
                                  cy={0}
                                  shape="circle"
                                  className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                                  style={{ transform: "translate(50%, 50%)" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="apexcharts-legend-text"
                              rel={1}
                              i={0}
                              data-default-text="Present"
                              data-collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Present
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={2}
                            seriesname="Late"
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
                                  d="M 0, 0 
     m -7, 0 
     a 7,7 0 1,0 14,0 
     a 7,7 0 1,0 -14,0"
                                  fill="#1170e4"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={1}
                                  strokeDasharray={0}
                                  cx={0}
                                  cy={0}
                                  shape="circle"
                                  className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                                  style={{ transform: "translate(50%, 50%)" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="apexcharts-legend-text"
                              rel={2}
                              i={1}
                              data-default-text="Late"
                              data-collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Late
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={3}
                            seriesname="HalfxDay"
                            data-collapsed="false"
                            style={{ margin: "4px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={3}
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
                                  d="M 0, 0 
     m -7, 0 
     a 7,7 0 1,0 14,0 
     a 7,7 0 1,0 -14,0"
                                  fill="#e9edf4"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={1}
                                  strokeDasharray={0}
                                  cx={0}
                                  cy={0}
                                  shape="circle"
                                  className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                                  style={{ transform: "translate(50%, 50%)" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="apexcharts-legend-text"
                              rel={3}
                              i={2}
                              data-default-text="Half%20Day"
                              data-collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Half Day
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={4}
                            seriesname="Absent"
                            data-collapsed="false"
                            style={{ margin: "4px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={4}
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
                                  d="M 0, 0 
     m -7, 0 
     a 7,7 0 1,0 14,0 
     a 7,7 0 1,0 -14,0"
                                  fill="#e82646"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={1}
                                  strokeDasharray={0}
                                  cx={0}
                                  cy={0}
                                  shape="circle"
                                  className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                                  style={{ transform: "translate(50%, 50%)" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="apexcharts-legend-text"
                              rel={4}
                              i={3}
                              data-default-text="Absent"
                              data-collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Absent
                            </span>
                          </div>
                        </div>
                        <div className="apexcharts-tooltip apexcharts-theme-dark">
                          <div
                            className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                            style={{ order: 1 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              shape="circle"
                              style={{ backgroundColor: "rgb(26, 190, 23)" }}
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
                              style={{ backgroundColor: "rgb(17, 112, 228)" }}
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
                              style={{ backgroundColor: "rgb(233, 237, 244)" }}
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
                            className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-3"
                            style={{ order: 4 }}
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
                  <div className="bg-light-300 rounded border p-3 mb-0">
                    <div className="d-flex align-items-center justify-content-between flex-wrap mb-1">
                      <h6 className="mb-2">Last 7 Days </h6>
                      <p className="fs-12 mb-2">14 May 2024 - 21 May 2024</p>
                    </div>
                    <div className="d-flex align-items-center rounded gap-1 flex-wrap">
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg bg-success text-white"
                      >
                        M
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg bg-success text-white"
                      >
                        T
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg bg-success text-white"
                      >
                        W
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg bg-success text-white"
                      >
                        T
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg bg-danger text-white"
                      >
                        F
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg bg-white border text-default"
                      >
                        S
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge badge-lg  bg-white border text-gray-1"
                      >
                        S
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Attendance */}
          {/* Fees */}
          <div className="col-xl-12 d-flex">
            <div className="row flex-fill">
              <div className="col-6 col-sm-6 col-xl-3 d-flex">
                <a
                  href="student-fees.html"
                  className="card border-0 border-bottom border-primary border-2 flex-fill animate-card"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-md rounded bg-primary me-2">
                        <i className="ti ti-report-money fs-16" />
                      </span>
                      <h6>Pay Fees</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 col-sm-6 col-xl-3 d-flex">
                <a
                  href="student-result.html"
                  className="card border-0 border-bottom border-success flex-fill animate-card"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-md rounded bg-success me-2">
                        <i className="ti ti-hexagonal-prism-plus fs-16" />
                      </span>
                      <h6>Exam Result</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 col-sm-6 col-xl-3 d-flex">
                <a
                  href="student-time-table.html"
                  className="card border-0 border-bottom border-warning flex-fill animate-card"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-md rounded bg-warning me-2">
                        <i className="ti ti-calendar fs-16" />
                      </span>
                      <h6>Calendar</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 col-sm-6 col-xl-3 d-flex">
                <a
                  href="student-leaves.html"
                  className="card border-0 border-bottom border-dark border-2 flex-fill animate-card"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-md rounded bg-dark me-2">
                        <i className="ti ti-calendar-share fs-16" />
                      </span>
                      <h6>Attendance</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* /Fees */}
        </div>
      </div>
      {/* Schedules */}
      <div className="col-12 col-lg-4 col-xxl-4 d-flex" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-title">Schedules</h4>
            <a
              href="#"
              className="link-primary fw-medium me-2"
              data-bs-toggle="modal"
              data-bs-target="#add_exam_schedule"
            >
              <i className="ti ti-square-plus me-1" />
              Add New
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="datepic mb-2">
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
                                January 2026
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
                                data-day="12/28/2025"
                                className="day old weekend"
                              >
                                28
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="12/29/2025"
                                className="day old"
                              >
                                29
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="12/30/2025"
                                className="day old"
                              >
                                30
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="12/31/2025"
                                className="day old"
                              >
                                31
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/01/2026"
                                className="day"
                              >
                                1
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/02/2026"
                                className="day"
                              >
                                2
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/03/2026"
                                className="day weekend"
                              >
                                3
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-action="selectDay"
                                data-day="01/04/2026"
                                className="day weekend"
                              >
                                4
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/05/2026"
                                className="day active today"
                              >
                                5
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/06/2026"
                                className="day"
                              >
                                6
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/07/2026"
                                className="day"
                              >
                                7
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/08/2026"
                                className="day"
                              >
                                8
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/09/2026"
                                className="day"
                              >
                                9
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/10/2026"
                                className="day weekend"
                              >
                                10
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-action="selectDay"
                                data-day="01/11/2026"
                                className="day weekend"
                              >
                                11
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/12/2026"
                                className="day"
                              >
                                12
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/13/2026"
                                className="day"
                              >
                                13
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/14/2026"
                                className="day"
                              >
                                14
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/15/2026"
                                className="day"
                              >
                                15
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/16/2026"
                                className="day"
                              >
                                16
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/17/2026"
                                className="day weekend"
                              >
                                17
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-action="selectDay"
                                data-day="01/18/2026"
                                className="day weekend"
                              >
                                18
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/19/2026"
                                className="day"
                              >
                                19
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/20/2026"
                                className="day"
                              >
                                20
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/21/2026"
                                className="day"
                              >
                                21
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/22/2026"
                                className="day"
                              >
                                22
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/23/2026"
                                className="day"
                              >
                                23
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/24/2026"
                                className="day weekend"
                              >
                                24
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-action="selectDay"
                                data-day="01/25/2026"
                                className="day weekend"
                              >
                                25
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/26/2026"
                                className="day"
                              >
                                26
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/27/2026"
                                className="day"
                              >
                                27
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/28/2026"
                                className="day"
                              >
                                28
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/29/2026"
                                className="day"
                              >
                                29
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/30/2026"
                                className="day"
                              >
                                30
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="01/31/2026"
                                className="day weekend"
                              >
                                31
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-action="selectDay"
                                data-day="02/01/2026"
                                className="day new weekend"
                              >
                                1
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="02/02/2026"
                                className="day new"
                              >
                                2
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="02/03/2026"
                                className="day new"
                              >
                                3
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="02/04/2026"
                                className="day new"
                              >
                                4
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="02/05/2026"
                                className="day new"
                              >
                                5
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="02/06/2026"
                                className="day new"
                              >
                                6
                              </td>
                              <td
                                data-action="selectDay"
                                data-day="02/07/2026"
                                className="day new weekend"
                              >
                                7
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
                                2026
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
                                <span
                                  data-action="selectMonth"
                                  className="month active"
                                >
                                  Jan
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Feb
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Mar
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Apr
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  May
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Jun
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Jul
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Aug
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Sep
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Oct
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
                                >
                                  Nov
                                </span>
                                <span
                                  data-action="selectMonth"
                                  className="month"
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
                                2021-2032
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
                                <span data-action="selectYear" className="year">
                                  2025
                                </span>
                                <span
                                  data-action="selectYear"
                                  className="year active"
                                >
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
                                <span data-action="selectYear" className="year">
                                  2032
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
            <h5 className="mb-3">Exams</h5>
            <div className="p-3 pb-0 mb-3 border rounded">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-3">1st Quarterly</h5>
                <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                  <i className="ti ti-clock me-1" />
                  19 Days More
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3">
                  <h6 className="mb-1">Mathematics</h6>
                  <p>
                    <i className="ti ti-clock me-1" />
                    01:30 - 02:15 PM
                  </p>
                </div>
                <div className="mb-3 text-end">
                  <p className="mb-1">
                    <i className="ti ti-calendar-bolt me-1" />
                    06 May 2024
                  </p>
                  <p className="text-primary">Room No : 15</p>
                </div>
              </div>
            </div>
            <div className="p-3 pb-0 mb-3 border rounded">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-3">2nd Quarterly</h5>
                <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                  <i className="ti ti-clock me-1" />
                  20 Days More
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3">
                  <h6 className="mb-1">Physics</h6>
                  <p>
                    <i className="ti ti-clock me-1" />
                    01:30 - 02:15 PM
                  </p>
                </div>
                <div className="mb-3 text-end">
                  <p className="mb-1">
                    <i className="ti ti-calendar-bolt me-1" />
                    07 May 2024
                  </p>
                  <p className="text-primary">Room No : 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Schedules */}
    </div>
    <div className="row">
      {/* Performance */}
      <div className="col-12 col-lg-7 col-xxl-7 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-title">Performance</h4>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-2" />
                2024 - 2025
              </a>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    2024 - 2025
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    2023 - 2024
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    2022 - 2023
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body pb-0">
            <div id="performance_chart" style={{ minHeight: 370, width: '100%', overflow: 'hidden' }}>
              <div
                id="apexcharts5jqn6trlk"
                className="apexcharts-canvas apexcharts5jqn6trlk apexcharts-theme-light"
                style={{ width: '100%', maxWidth: '100%', height: 355, margin: '0 auto' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="apexcharts-svg apexcharts-zoomable"
                  transform="translate(0, 0)"
                  width="100%"
                  height={355}
                  style={{ maxWidth: '100%' }}
                  viewBox="0 0 818 355"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <foreignObject x={0} y={0} width="100%" height={355}>
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
                    transform="translate(-5.760416030883789, 0)"
                  >
                    <g className="apexcharts-yaxis-texts-g">
                      <text
                        x={20}
                        y="33.666666666666664"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>85</tspan>
                        <title>85</title>
                      </text>
                      <text
                        x={20}
                        y="99.77333307615916"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>80</tspan>
                        <title>80</title>
                      </text>
                      <text
                        x={20}
                        y="165.87999948565164"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>75</tspan>
                        <title>75</title>
                      </text>
                      <text
                        x={20}
                        y="231.98666589514414"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>70</tspan>
                        <title>70</title>
                      </text>
                      <text
                        x={20}
                        y="298.09333230463665"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>65</tspan>
                        <title>65</title>
                      </text>
                    </g>
                  </g>
                  <g
                    className="apexcharts-inner apexcharts-graphical"
                    transform="translate(39.23958396911621, 30)"
                  >
                    <defs>
                      <clipPath id="gridRectMask5jqn6trlk">
                        <rect
                          width="762.7552070617676"
                          height="272.42666563796996"
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
                      <clipPath id="gridRectBarMask5jqn6trlk">
                        <rect
                          width="762.7552070617676"
                          height="272.42666563796996"
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
                      <clipPath id="gridRectMarkerMask5jqn6trlk">
                        <rect
                          width="768.7552070617676"
                          height="278.42666563796996"
                          x={-7}
                          y={-7}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="forecastMask5jqn6trlk" />
                      <clipPath id="nonForecastMask5jqn6trlk" />
                      <linearGradient
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={1}
                        id="SvgjsLinearGradient1013"
                      >
                        <stop
                          stopOpacity="0.7"
                          stopColor="rgba(61,94,225,0.7)"
                          offset={0}
                        />
                        <stop
                          stopOpacity="0.9"
                          stopColor="rgba(255,255,255,0.9)"
                          offset="0.9"
                        />
                        <stop
                          stopOpacity="0.9"
                          stopColor="rgba(255,255,255,0.9)"
                          offset={1}
                        />
                      </linearGradient>
                      <linearGradient
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={1}
                        id="SvgjsLinearGradient1014"
                      >
                        <stop
                          stopOpacity="0.7"
                          stopColor="rgba(111,204,216,0.7)"
                          offset={0}
                        />
                        <stop
                          stopOpacity="0.9"
                          stopColor="rgba(255,255,255,0.9)"
                          offset="0.9"
                        />
                        <stop
                          stopOpacity="0.9"
                          stopColor="rgba(255,255,255,0.9)"
                          offset={1}
                        />
                      </linearGradient>
                    </defs>
                    <line
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="264.42666563796996"
                      stroke="#b6b6b6"
                      strokeDasharray={3}
                      strokeLinecap="butt"
                      className="apexcharts-xcrosshairs"
                      x={0}
                      y={0}
                      width={1}
                      height="264.42666563796996"
                      fill="#b1b9c4"
                      filter="none"
                      fillOpacity="0.9"
                      strokeWidth={1}
                    />
                    <line
                      x1={0}
                      y1="264.42666563796996"
                      x2={0}
                      y2="270.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="188.6888017654419"
                      y1="264.42666563796996"
                      x2="188.6888017654419"
                      y2="270.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="377.3776035308838"
                      y1="264.42666563796996"
                      x2="377.3776035308838"
                      y2="270.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="566.0664052963257"
                      y1="264.42666563796996"
                      x2="566.0664052963257"
                      y2="270.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="754.7552070617676"
                      y1="264.42666563796996"
                      x2="754.7552070617676"
                      y2="270.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <g className="apexcharts-grid">
                      <g className="apexcharts-gridlines-horizontal">
                        <line
                          x1={0}
                          y1="66.10666640949249"
                          x2="754.7552070617676"
                          y2="66.10666640949249"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        />
                        <line
                          x1={0}
                          y1="132.21333281898498"
                          x2="754.7552070617676"
                          y2="132.21333281898498"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        />
                        <line
                          x1={0}
                          y1="198.31999922847746"
                          x2="754.7552070617676"
                          y2="198.31999922847746"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        />
                      </g>
                      <g className="apexcharts-gridlines-vertical" />
                      <line
                        x1={0}
                        y1="264.42666563796996"
                        x2="754.7552070617676"
                        y2="264.42666563796996"
                        stroke="transparent"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                      />
                      <line
                        x1={0}
                        y1={1}
                        x2={0}
                        y2="264.42666563796996"
                        stroke="transparent"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                      />
                    </g>
                    <g className="apexcharts-grid-borders">
                      <line
                        x1={0}
                        y1={0}
                        x2="754.7552070617676"
                        y2={0}
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        className="apexcharts-gridline"
                      />
                      <line
                        x1={0}
                        y1="264.42666563796996"
                        x2="754.7552070617676"
                        y2="264.42666563796996"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                        className="apexcharts-gridline"
                      />
                      <line
                        x1={0}
                        y1="264.42666563796996"
                        x2="754.7552070617676"
                        y2="264.42666563796996"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                      />
                    </g>
                    <g className="apexcharts-area-series apexcharts-plot-series">
                      <g
                        className="apexcharts-series"
                        zindex={0}
                        seriesname="AvgxxExamxScore"
                        data-longestseries="true"
                        rel={1}
                        data-realindex={0}
                      >
                        <path
                          d="M 0 132.2133328189849C 66.04108061790465 132.2133328189849 122.64772114753724 224.76266579227445 188.6888017654419 224.76266579227445C 254.72988238334653 224.76266579227445 311.33652291297915 264.4266656379699 377.3776035308838 264.4266656379699C 443.41868414878843 264.4266656379699 500.02532467842104 224.76266579227445 566.0664052963257 224.76266579227445C 632.1074859142303 224.76266579227445 688.7141264438629 132.2133328189849 754.7552070617676 132.2133328189849C 754.7552070617676 132.2133328189849 754.7552070617676 132.2133328189849 754.7552070617676 264.42666563796996 L 0 264.42666563796996z"
                          fill="url(#SvgjsLinearGradient1013)"
                          fillOpacity={1}
                          stroke="none"
                          strokeOpacity={1}
                          strokeLinecap="butt"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-area"
                          index={0}
                          clipPath="url(#gridRectMask5jqn6trlk)"
                          pathto="M 0 132.2133328189849C 66.04108061790465 132.2133328189849 122.64772114753724 224.76266579227445 188.6888017654419 224.76266579227445C 254.72988238334653 224.76266579227445 311.33652291297915 264.4266656379699 377.3776035308838 264.4266656379699C 443.41868414878843 264.4266656379699 500.02532467842104 224.76266579227445 566.0664052963257 224.76266579227445C 632.1074859142303 224.76266579227445 688.7141264438629 132.2133328189849 754.7552070617676 132.2133328189849C 754.7552070617676 132.2133328189849 754.7552070617676 132.2133328189849 754.7552070617676 264.42666563796996 L 0 264.42666563796996z"
                          pathfrom="M 0 264.42666563796996 L 0 264.42666563796996 L 188.6888017654419 264.42666563796996 L 377.3776035308838 264.42666563796996 L 566.0664052963257 264.42666563796996 L 754.7552070617676 264.42666563796996z"
                        />
                        <path
                          d="M 0 132.2133328189849C 66.04108061790465 132.2133328189849 122.64772114753724 224.76266579227445 188.6888017654419 224.76266579227445C 254.72988238334653 224.76266579227445 311.33652291297915 264.4266656379699 377.3776035308838 264.4266656379699C 443.41868414878843 264.4266656379699 500.02532467842104 224.76266579227445 566.0664052963257 224.76266579227445C 632.1074859142303 224.76266579227445 688.7141264438629 132.2133328189849 754.7552070617676 132.2133328189849"
                          fill="none"
                          fillOpacity={1}
                          stroke="#3d5ee1"
                          strokeOpacity={1}
                          strokeLinecap="butt"
                          strokeWidth={4}
                          strokeDasharray={0}
                          className="apexcharts-area"
                          index={0}
                          clipPath="url(#gridRectMask5jqn6trlk)"
                          pathto="M 0 132.2133328189849C 66.04108061790465 132.2133328189849 122.64772114753724 224.76266579227445 188.6888017654419 224.76266579227445C 254.72988238334653 224.76266579227445 311.33652291297915 264.4266656379699 377.3776035308838 264.4266656379699C 443.41868414878843 264.4266656379699 500.02532467842104 224.76266579227445 566.0664052963257 224.76266579227445C 632.1074859142303 224.76266579227445 688.7141264438629 132.2133328189849 754.7552070617676 132.2133328189849"
                          pathfrom="M 0 264.42666563796996 L 0 264.42666563796996 L 188.6888017654419 264.42666563796996 L 377.3776035308838 264.42666563796996 L 566.0664052963257 264.42666563796996 L 754.7552070617676 264.42666563796996"
                          fillRule="evenodd"
                        />
                        <g
                          className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                          data-realindex={0}
                        >
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 0, 132.2133328189849 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#1e90ff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx={0}
                              cy="132.2133328189849"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wcrkox3d7"
                              rel={0}
                              j={0}
                              index={0}
                              default-marker-size={5}
                            />
                            <path
                              d="M 188.6888017654419, 224.76266579227445 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#1e90ff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="188.6888017654419"
                              cy="224.76266579227445"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wktiwfqmgg"
                              rel={1}
                              j={1}
                              index={0}
                              default-marker-size={5}
                            />
                          </g>
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 377.3776035308838, 264.4266656379699 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#1e90ff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="377.3776035308838"
                              cy="264.4266656379699"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events w4nt7ysep"
                              rel={2}
                              j={2}
                              index={0}
                              default-marker-size={5}
                            />
                          </g>
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 566.0664052963257, 224.76266579227445 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#1e90ff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="566.0664052963257"
                              cy="224.76266579227445"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wli323q6x"
                              rel={3}
                              j={3}
                              index={0}
                              default-marker-size={5}
                            />
                          </g>
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 754.7552070617676, 132.2133328189849 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#1e90ff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="754.7552070617676"
                              cy="132.2133328189849"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wv1widrzaf"
                              rel={4}
                              j={4}
                              index={0}
                              default-marker-size={5}
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        className="apexcharts-series"
                        zindex={1}
                        seriesname="AvgxxAttendance"
                        data-longestseries="true"
                        rel={2}
                        data-realindex={1}
                      >
                        <path
                          d="M 0 0C 66.04108061790465 0 122.64772114753724 92.54933297328944 188.6888017654419 92.54933297328944C 254.72988238334653 92.54933297328944 311.33652291297915 132.2133328189849 377.3776035308838 132.2133328189849C 443.41868414878843 132.2133328189849 500.02532467842104 92.54933297328944 566.0664052963257 92.54933297328944C 632.1074859142303 92.54933297328944 688.7141264438629 0 754.7552070617676 0C 754.7552070617676 0 754.7552070617676 0 754.7552070617676 264.42666563796996 L 0 264.42666563796996z"
                          fill="url(#SvgjsLinearGradient1014)"
                          fillOpacity={1}
                          stroke="none"
                          strokeOpacity={1}
                          strokeLinecap="butt"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-area"
                          index={1}
                          clipPath="url(#gridRectMask5jqn6trlk)"
                          pathto="M 0 0C 66.04108061790465 0 122.64772114753724 92.54933297328944 188.6888017654419 92.54933297328944C 254.72988238334653 92.54933297328944 311.33652291297915 132.2133328189849 377.3776035308838 132.2133328189849C 443.41868414878843 132.2133328189849 500.02532467842104 92.54933297328944 566.0664052963257 92.54933297328944C 632.1074859142303 92.54933297328944 688.7141264438629 0 754.7552070617676 0C 754.7552070617676 0 754.7552070617676 0 754.7552070617676 264.42666563796996 L 0 264.42666563796996z"
                          pathfrom="M 0 264.42666563796996 L 0 264.42666563796996 L 188.6888017654419 264.42666563796996 L 377.3776035308838 264.42666563796996 L 566.0664052963257 264.42666563796996 L 754.7552070617676 264.42666563796996z"
                        />
                        <path
                          d="M 0 0C 66.04108061790465 0 122.64772114753724 92.54933297328944 188.6888017654419 92.54933297328944C 254.72988238334653 92.54933297328944 311.33652291297915 132.2133328189849 377.3776035308838 132.2133328189849C 443.41868414878843 132.2133328189849 500.02532467842104 92.54933297328944 566.0664052963257 92.54933297328944C 632.1074859142303 92.54933297328944 688.7141264438629 0 754.7552070617676 0"
                          fill="none"
                          fillOpacity={1}
                          stroke="#6fccd8"
                          strokeOpacity={1}
                          strokeLinecap="butt"
                          strokeWidth={4}
                          strokeDasharray={0}
                          className="apexcharts-area"
                          index={1}
                          clipPath="url(#gridRectMask5jqn6trlk)"
                          pathto="M 0 0C 66.04108061790465 0 122.64772114753724 92.54933297328944 188.6888017654419 92.54933297328944C 254.72988238334653 92.54933297328944 311.33652291297915 132.2133328189849 377.3776035308838 132.2133328189849C 443.41868414878843 132.2133328189849 500.02532467842104 92.54933297328944 566.0664052963257 92.54933297328944C 632.1074859142303 92.54933297328944 688.7141264438629 0 754.7552070617676 0"
                          pathfrom="M 0 264.42666563796996 L 0 264.42666563796996 L 188.6888017654419 264.42666563796996 L 377.3776035308838 264.42666563796996 L 566.0664052963257 264.42666563796996 L 754.7552070617676 264.42666563796996"
                          fillRule="evenodd"
                        />
                        <g
                          className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                          data-realindex={1}
                        >
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 0, 0 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#00bfff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx={0}
                              cy={0}
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wkd5q1n18"
                              rel={0}
                              j={0}
                              index={1}
                              default-marker-size={5}
                            />
                            <path
                              d="M 188.6888017654419, 92.54933297328944 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#00bfff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="188.6888017654419"
                              cy="92.54933297328944"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wptkhi76hl"
                              rel={1}
                              j={1}
                              index={1}
                              default-marker-size={5}
                            />
                          </g>
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 377.3776035308838, 132.2133328189849 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#00bfff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="377.3776035308838"
                              cy="132.2133328189849"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wj6p4xygk"
                              rel={2}
                              j={2}
                              index={1}
                              default-marker-size={5}
                            />
                          </g>
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 566.0664052963257, 92.54933297328944 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#00bfff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="566.0664052963257"
                              cy="92.54933297328944"
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wtgzyaou2"
                              rel={3}
                              j={3}
                              index={1}
                              default-marker-size={5}
                            />
                          </g>
                          <g
                            className="apexcharts-series-markers"
                            clipPath="url(#gridRectMarkerMask5jqn6trlk)"
                          >
                            <path
                              d="M 754.7552070617676, 0 
     m -5, 0 
     a 5,5 0 1,0 10,0 
     a 5,5 0 1,0 -10,0"
                              fill="#00bfff"
                              fillOpacity={1}
                              stroke="#ffffff"
                              strokeOpacity="0.9"
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              cx="754.7552070617676"
                              cy={0}
                              shape="circle"
                              className="apexcharts-marker no-pointer-events wv0fiwr2r"
                              rel={4}
                              j={4}
                              index={1}
                              default-marker-size={5}
                            />
                          </g>
                        </g>
                      </g>
                      <g className="apexcharts-datalabels" data-realindex={0} />
                      <g className="apexcharts-datalabels" data-realindex={1} />
                    </g>
                    <line
                      x1={0}
                      y1={0}
                      x2="754.7552070617676"
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
                      x2="754.7552070617676"
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
                          x={0}
                          y="292.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Quarter 1</tspan>
                          <title>Quarter 1</title>
                        </text>
                        <text
                          x="188.6888017654419"
                          y="292.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Quarter 2</tspan>
                          <title>Quarter 2</title>
                        </text>
                        <text
                          x="377.3776035308838"
                          y="292.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Half yearly</tspan>
                          <title>Half yearly</title>
                        </text>
                        <text
                          x="566.0664052963257"
                          y="292.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Model</tspan>
                          <title>Model</title>
                        </text>
                        <text
                          x="754.7552070617676"
                          y="292.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Final</tspan>
                          <title>Final</title>
                        </text>
                      </g>
                    </g>
                    <g className="apexcharts-yaxis-annotations" />
                    <g className="apexcharts-xaxis-annotations" />
                    <g className="apexcharts-point-annotations" />
                  </g>
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
                    className="apexcharts-zoom-rect"
                  />
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
                    className="apexcharts-selection-rect"
                  />
                </svg>
                <div
                  className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                  style={{
                    right: 0,
                    position: "absolute",
                    left: 0,
                    top: 330,
                    maxHeight: "177.5px"
                  }}
                >
                  <div
                    className="apexcharts-legend-series"
                    rel={1}
                    seriesname="AvgxxExamxScore"
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
                          d="M 0, 0 
     m -7, 0 
     a 7,7 0 1,0 14,0 
     a 7,7 0 1,0 -14,0"
                          fill="#3d5ee1"
                          fillOpacity={1}
                          stroke="#ffffff"
                          strokeOpacity="0.9"
                          strokeLinecap="butt"
                          strokeWidth={1}
                          strokeDasharray={0}
                          cx={0}
                          cy={0}
                          shape="circle"
                          className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                          style={{ transform: "translate(50%, 50%)" }}
                        />
                      </svg>
                    </span>
                    <span
                      className="apexcharts-legend-text"
                      rel={1}
                      i={0}
                      data-default-text="Avg.%20Exam%20Score"
                      data-collapsed="false"
                      style={{
                        color: "rgb(55, 61, 63)",
                        fontSize: 12,
                        fontWeight: 400,
                        fontFamily: "Helvetica, Arial, sans-serif"
                      }}
                    >
                      Avg. Exam Score
                    </span>
                  </div>
                  <div
                    className="apexcharts-legend-series"
                    rel={2}
                    seriesname="AvgxxAttendance"
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
                          d="M 0, 0 
     m -7, 0 
     a 7,7 0 1,0 14,0 
     a 7,7 0 1,0 -14,0"
                          fill="#6fccd8"
                          fillOpacity={1}
                          stroke="#ffffff"
                          strokeOpacity="0.9"
                          strokeLinecap="butt"
                          strokeWidth={1}
                          strokeDasharray={0}
                          cx={0}
                          cy={0}
                          shape="circle"
                          className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                          style={{ transform: "translate(50%, 50%)" }}
                        />
                      </svg>
                    </span>
                    <span
                      className="apexcharts-legend-text"
                      rel={2}
                      i={1}
                      data-default-text="Avg.%20Attendance"
                      data-collapsed="false"
                      style={{
                        color: "rgb(55, 61, 63)",
                        fontSize: 12,
                        fontWeight: 400,
                        fontFamily: "Helvetica, Arial, sans-serif"
                      }}
                    >
                      Avg. Attendance
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
                      style={{ color: "rgb(111, 204, 216)" }}
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
                <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                  <div
                    className="apexcharts-xaxistooltip-text"
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 12
                    }}
                  />
                </div>
                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                  <div className="apexcharts-yaxistooltip-text" />
                </div>
                <div
                  className="apexcharts-toolbar"
                  style={{ top: 0, right: 3 }}
                >
                  <div className="apexcharts-zoomin-icon" title="Zoom In">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                  <div className="apexcharts-zoomout-icon" title="Zoom Out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                  <div
                    className="apexcharts-zoom-icon apexcharts-selected"
                    title="Selection Zoom"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      height={24}
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                    </svg>
                  </div>
                  <div className="apexcharts-pan-icon" title="Panning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                      height={24}
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <defs>
                        <path d="M0 0h24v24H0z" id="a" />
                      </defs>
                      <clipPath id="b">
                        <use overflow="visible" xlinkHref="#a" />
                      </clipPath>
                      <path
                        clipPath="url(#b)"
                        d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"
                      />
                    </svg>
                  </div>
                  <div className="apexcharts-reset-icon" title="Reset Zoom">
                    <svg
                      fill="#000000"
                      height={24}
                      viewBox="0 0 24 24"
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <div className="apexcharts-menu-icon" title="Menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z" />
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                  </div>
                  <div className="apexcharts-menu">
                    <div
                      className="apexcharts-menu-item exportSVG"
                      title="Download SVG"
                    >
                      Download SVG
                    </div>
                    <div
                      className="apexcharts-menu-item exportPNG"
                      title="Download PNG"
                    >
                      Download PNG
                    </div>
                    <div
                      className="apexcharts-menu-item exportCSV"
                      title="Download CSV"
                    >
                      Download CSV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Performance */}
      {/* Home Works */}
      <div className="col-12 col-lg-5 col-xxl-5 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-titile">Home Works</h4>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-book-2 me-2" />
                All Subject
              </a>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    Physics
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    Chemistry
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    Maths
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body py-1">
            <ul className="list-group list-group-flush">
              <li className="list-group-item py-3 px-0 pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="d-flex align-items-center overflow-hidden mb-3">
                    <a
                      href="javascript:void(0);"
                      className="avatar avatar-xl flex-shrink-0 me-2"
                    >
                      <img
                        src="assets/img/home-work/home-work-01.jpg"
                        alt="img"
                      />
                    </a>
                    <div className="overflow-hidden">
                      <p className="d-flex align-items-center text-info mb-1">
                        <i className="ti ti-tag me-2" />
                        Physics
                      </p>
                      <h6 className="text-truncate mb-1">
                        <a href="class-home-work.html">
                          Write about Theory of Pendulum
                        </a>
                      </h6>
                      <div className="d-flex align-items-center flex-wrap">
                        <div className="d-flex align-items-center border-end me-1 pe-1">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-xs flex-shrink-0 me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-01.jpg"
                              className="rounded-circle"
                              alt="teacher"
                            />
                          </a>
                          <p className="text-dark">Aaron</p>
                        </div>
                        <p>Due by : 16 Jun 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="circle-progress mb-3" data-value={80}>
                    <span className="progress-left">
                      <span
                        className="progress-bar border-success"
                        style={{ transform: "rotate(108deg)" }}
                      />
                    </span>
                    <span className="progress-right">
                      <span
                        className="progress-bar border-success"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </span>
                    <div className="progress-value">90%</div>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0 pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="d-flex align-items-center overflow-hidden mb-3">
                    <a
                      href="javascript:void(0);"
                      className="avatar avatar-xl flex-shrink-0 me-2"
                    >
                      <img
                        src="assets/img/home-work/home-work-02.jpg"
                        alt="img"
                      />
                    </a>
                    <div className="overflow-hidden">
                      <p className="d-flex align-items-center text-success mb-1">
                        <i className="ti ti-tag me-2" />
                        Chemistry
                      </p>
                      <h6 className="text-truncate mb-1">
                        <a href="class-home-work.html">
                          Chemistry - Change of Elements
                        </a>
                      </h6>
                      <div className="d-flex align-items-center flex-wrap">
                        <div className="d-flex align-items-center border-end me-1 pe-1">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-xs flex-shrink-0 me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-01.jpg"
                              className="rounded-circle"
                              alt="teacher"
                            />
                          </a>
                          <p className="text-dark">Hellana</p>
                        </div>
                        <p>Due by : 16 Jun 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="circle-progress mb-3" data-value={65}>
                    <span className="progress-left">
                      <span
                        className="progress-bar border-info"
                        style={{ transform: "rotate(54deg)" }}
                      />
                    </span>
                    <span className="progress-right">
                      <span
                        className="progress-bar border-info"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </span>
                    <div className="progress-value">65%</div>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0 pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="d-flex align-items-center overflow-hidden mb-3">
                    <a
                      href="javascript:void(0);"
                      className="avatar avatar-xl flex-shrink-0 me-2"
                    >
                      <img
                        src="assets/img/home-work/home-work-03.jpg"
                        alt="img"
                      />
                    </a>
                    <div className="overflow-hidden">
                      <p className="d-flex align-items-center text-danger mb-1">
                        <i className="ti ti-tag me-2" />
                        Maths
                      </p>
                      <h6 className="text-truncate mb-1">
                        <a href="class-home-work.html">
                          Maths - Problems to Solve Page 21
                        </a>
                      </h6>
                      <div className="d-flex align-items-center flex-wrap">
                        <div className="d-flex align-items-center border-end me-1 pe-1">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-xs flex-shrink-0 me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-01.jpg"
                              className="rounded-circle"
                              alt="teacher"
                            />
                          </a>
                          <p className="text-dark">Morgan</p>
                        </div>
                        <p>Due by : 21 Jun 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="circle-progress mb-3" data-value={30}>
                    <span className="progress-left">
                      <span className="progress-bar border-warning" />
                    </span>
                    <span className="progress-right">
                      <span
                        className="progress-bar border-warning"
                        style={{ transform: "rotate(108deg)" }}
                      />
                    </span>
                    <div className="progress-value">30%</div>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0 pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="d-flex align-items-center overflow-hidden mb-3">
                    <a
                      href="javascript:void(0);"
                      className="avatar avatar-xl flex-shrink-0 me-2"
                    >
                      <img
                        src="assets/img/home-work/home-work-04.jpg"
                        alt="img"
                      />
                    </a>
                    <div className="overflow-hidden">
                      <p className="d-flex align-items-center text-skyblue mb-1">
                        <i className="ti ti-tag me-2" />
                        Engish
                      </p>
                      <h6 className="text-truncate mb-1">
                        <a href="class-home-work.html">
                          English - Vocabulary Introduction
                        </a>
                      </h6>
                      <div className="d-flex align-items-center flex-wrap">
                        <div className="d-flex align-items-center border-end me-1 pe-1">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-xs flex-shrink-0 me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-01.jpg"
                              className="rounded-circle"
                              alt="teacher"
                            />
                          </a>
                          <p className="text-dark">Daniel Josua</p>
                        </div>
                        <p>Due by : 21 Jun 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="circle-progress mb-3" data-value={10}>
                    <span className="progress-left">
                      <span className="progress-bar border-danger" />
                    </span>
                    <span className="progress-right">
                      <span
                        className="progress-bar border-danger"
                        style={{ transform: "rotate(36deg)" }}
                      />
                    </span>
                    <div className="progress-value">10%</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Home Works */}
    </div>
    <div className="row">
      {/* Class Faculties */}
      <div className="col-xl-12">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-title">Class Faculties</h4>
            <div className="owl-nav slide-nav text-end nav-control">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fas fa-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="teachers-profile-slider owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-833px, 0px, 0px)",
                    transition: "all",
                    width: 3333
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-02.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Daniel Josua</a>
                            </h6>
                            <p>Spanish</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-01.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Teresa</a>
                            </h6>
                            <p>Maths</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-09.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Jacquelin</a>
                            </h6>
                            <p>Biology</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-06.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Aaron</a>
                            </h6>
                            <p>Chemistry</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-03.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Hellana</a>
                            </h6>
                            <p>English</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-05.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Morgan</a>
                            </h6>
                            <p>Physics</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-02.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Daniel Josua</a>
                            </h6>
                            <p>Spanish</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-01.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Teresa</a>
                            </h6>
                            <p>Maths</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-09.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Jacquelin</a>
                            </h6>
                            <p>Biology</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-06.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Aaron</a>
                            </h6>
                            <p>Chemistry</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-03.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Hellana</a>
                            </h6>
                            <p>English</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "262.667px", marginRight: 15 }}
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <a
                            href="teacher-details.html"
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="assets/img/teachers/teacher-05.jpg"
                              alt="Teacher"
                            />
                          </a>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <a href="teacher-details.html">Morgan</a>
                            </h6>
                            <p>Physics</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
      </div>
      {/* /Class Faculties */}
    </div>
    <div className="row">
      {/* Leave Status */}
      <div className="col-12 col-md-6 col-xl-6 col-xxl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-title">Leave Status</h4>
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
            <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                  <i className="ti ti-brand-socket-io" />
                </div>
                <div>
                  <h6 className="mb-1">Emergency Leave</h6>
                  <p>Date : 15 Jun 2024</p>
                </div>
              </div>
              <span className="badge bg-skyblue d-inline-flex align-items-center">
                <i className="ti ti-circle-filled fs-5 me-1" />
                Pending
              </span>
            </div>
            <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <div className="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                  <i className="ti ti-medical-cross" />
                </div>
                <div>
                  <h6 className="mb-1">Medical Leave</h6>
                  <p>Date : 15 Jun 2024</p>
                </div>
              </div>
              <span className="badge bg-success d-inline-flex align-items-center">
                <i className="ti ti-circle-filled fs-5 me-1" />
                Approved
              </span>
            </div>
            <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <div className="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                  <i className="ti ti-medical-cross" />
                </div>
                <div>
                  <h6 className="mb-1">Medical Leave</h6>
                  <p>Date : 16 Jun 2024</p>
                </div>
              </div>
              <span className="badge bg-danger d-inline-flex align-items-center">
                <i className="ti ti-circle-filled fs-5 me-1" />
                Declined
              </span>
            </div>
            <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-0">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                  <i className="ti ti-brand-socket-io" />
                </div>
                <div>
                  <h6 className="mb-1">Fever</h6>
                  <p>Date : 16 Jun 2024</p>
                </div>
              </div>
              <span className="badge bg-success d-inline-flex align-items-center">
                <i className="ti ti-circle-filled fs-5 me-1" />
                Approved
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* /Leave Status */}
      {/* Exam Result */}
      <div className="col-12 col-md-6 col-xl-6 col-xxl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-title">Exam Result</h4>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-2" />
                1st Quarter
              </a>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    1st Quarter
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item rounded-1"
                  >
                    2nd Quarter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge badge-soft-primary badge-md me-1 mb-3">
                Mat : 100{" "}
              </span>
              <span className="badge badge-soft-success badge-md me-1 mb-3">
                Phy: 92
              </span>
              <span className="badge badge-soft-warning badge-md me-1 mb-3">
                Che : 90
              </span>
              <span className="badge badge-soft-danger badge-md mb-3">
                Eng : 80
              </span>
            </div>
            <div id="exam-result-chart" style={{ minHeight: 325, width: '100%', overflow: 'hidden' }}>
              <div
                id="apexchartswed010ob"
                className="apexcharts-canvas apexchartswed010ob apexcharts-theme-light"
                style={{ width: '100%', maxWidth: '100%', height: 310, margin: '0 auto' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="apexcharts-svg"
                  transform="translate(0, 0)"
                  width="100%"
                  height={310}
                  style={{ maxWidth: '100%' }}
                  viewBox="0 0 833 310"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <foreignObject x={0} y={0} width="100%" height={310}>
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
                    transform="translate(15.354167938232422, 0)"
                  >
                    <g className="apexcharts-yaxis-texts-g">
                      <text
                        x={20}
                        y="33.666666666666664"
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
                        y="82.35199979426065"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>80</tspan>
                        <title>80</title>
                      </text>
                      <text
                        x={20}
                        y="131.03733292185464"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>60</tspan>
                        <title>60</title>
                      </text>
                      <text
                        x={20}
                        y="179.72266604944863"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>40</tspan>
                        <title>40</title>
                      </text>
                      <text
                        x={20}
                        y="228.40799917704263"
                        textAnchor="end"
                        dominantBaseline="auto"
                        fontSize="11px"
                        fontFamily="Helvetica, Arial, sans-serif"
                        fontWeight={400}
                        fill="#373d3f"
                        className="apexcharts-text apexcharts-yaxis-label "
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        <tspan>20</tspan>
                        <title>20</title>
                      </text>
                      <text
                        x={20}
                        y="277.09333230463665"
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
                    transform="translate(45.35416793823242, 30)"
                  >
                    <defs>
                      <linearGradient
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={1}
                        id="SvgjsLinearGradient1012"
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
                      <clipPath id="gridRectMaskwed010ob">
                        <rect
                          width="781.6458320617676"
                          height="247.42666563796996"
                          x={-2}
                          y={-2}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="gridRectBarMaskwed010ob">
                        <rect
                          width="781.6458320617676"
                          height="247.42666563796996"
                          x={-2}
                          y={-2}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="gridRectMarkerMaskwed010ob">
                        <rect
                          width="781.6458320617676"
                          height="243.42666563796996"
                          x={-2}
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
                      <clipPath id="forecastMaskwed010ob" />
                      <clipPath id="nonForecastMaskwed010ob" />
                    </defs>
                    <rect
                      width="77.76458320617675"
                      height="243.42666563796996"
                      x={0}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="#b6b6b6"
                      strokeDasharray={3}
                      fill="url(#SvgjsLinearGradient1012)"
                      className="apexcharts-xcrosshairs"
                      y2="243.42666563796996"
                      filter="none"
                      fillOpacity="0.9"
                    />
                    <line
                      x1={0}
                      y1="243.42666563796996"
                      x2={0}
                      y2="249.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="155.5291664123535"
                      y1="243.42666563796996"
                      x2="155.5291664123535"
                      y2="249.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="311.058332824707"
                      y1="243.42666563796996"
                      x2="311.058332824707"
                      y2="249.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="466.5874992370605"
                      y1="243.42666563796996"
                      x2="466.5874992370605"
                      y2="249.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="622.116665649414"
                      y1="243.42666563796996"
                      x2="622.116665649414"
                      y2="249.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <line
                      x1="777.6458320617676"
                      y1="243.42666563796996"
                      x2="777.6458320617676"
                      y2="249.42666563796996"
                      stroke="#e0e0e0"
                      strokeDasharray={0}
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    />
                    <g className="apexcharts-grid">
                      <g className="apexcharts-gridlines-horizontal" />
                      <g className="apexcharts-gridlines-vertical" />
                      <line
                        x1={0}
                        y1="243.42666563796996"
                        x2="777.6458320617676"
                        y2="243.42666563796996"
                        stroke="transparent"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                      />
                      <line
                        x1={0}
                        y1={1}
                        x2={0}
                        y2="243.42666563796996"
                        stroke="transparent"
                        strokeDasharray={0}
                        strokeLinecap="butt"
                      />
                    </g>
                    <g className="apexcharts-grid-borders">
                      <line
                        x1={0}
                        y1="243.42666563796996"
                        x2="777.6458320617676"
                        y2="243.42666563796996"
                        stroke="#e0e0e0"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                      />
                    </g>
                    <g className="apexcharts-bar-series apexcharts-plot-series">
                      <g
                        className="apexcharts-series"
                        rel={1}
                        seriesname="Marks"
                        data-realindex={0}
                      >
                        <rect
                          width="77.76458320617675"
                          height="243.42666563796996"
                          x="38.882291603088376"
                          y={0}
                          rx={5}
                          ry={5}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#E9EDF4"
                          className="apexcharts-backgroundBar"
                        />
                        <path
                          d="M 38.882291603088376 243.42766563796997 L 38.882291603088376 0.001 C 38.882291603088376 0.001 38.882291603088376 0.001 38.882291603088376 0.001 L 116.64687480926513 0.001 C 116.64687480926513 0.001 116.64687480926513 0.001 116.64687480926513 0.001 L 116.64687480926513 243.42766563796997 C 116.64687480926513 243.42766563796997 116.64687480926513 243.42766563796997 116.64687480926513 243.42766563796997 L 38.882291603088376 243.42766563796997 C 38.882291603088376 243.42766563796997 38.882291603088376 243.42766563796997 38.882291603088376 243.42766563796997 Z "
                          fill="rgba(233,237,244,0.85)"
                          fillOpacity={1}
                          stroke="#e9edf4"
                          strokeOpacity={1}
                          strokeLinecap="square"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-bar-area undefined"
                          index={0}
                          clipPath="url(#gridRectBarMaskwed010ob)"
                          pathto="M 38.882291603088376 243.42766563796997 L 38.882291603088376 0.001 C 38.882291603088376 0.001 38.882291603088376 0.001 38.882291603088376 0.001 L 116.64687480926513 0.001 C 116.64687480926513 0.001 116.64687480926513 0.001 116.64687480926513 0.001 L 116.64687480926513 243.42766563796997 C 116.64687480926513 243.42766563796997 116.64687480926513 243.42766563796997 116.64687480926513 243.42766563796997 L 38.882291603088376 243.42766563796997 C 38.882291603088376 243.42766563796997 38.882291603088376 243.42766563796997 38.882291603088376 243.42766563796997 Z "
                          pathfrom="M 38.882291603088376 243.42766563796997 L 38.882291603088376 243.42766563796997 L 116.64687480926513 243.42766563796997 L 116.64687480926513 243.42766563796997 L 116.64687480926513 243.42766563796997 L 116.64687480926513 243.42766563796997 L 116.64687480926513 243.42766563796997 L 38.882291603088376 243.42766563796997 Z"
                          cy={0}
                          cx="194.4114580154419"
                          j={0}
                          val={100}
                          barheight="243.42666563796996"
                          barwidth="77.76458320617675"
                        />
                        <rect
                          width="77.76458320617675"
                          height="243.42666563796996"
                          x="194.4114580154419"
                          y={0}
                          rx={5}
                          ry={5}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                          className="apexcharts-backgroundBar"
                        />
                        <path
                          d="M 194.4114580154419 243.42766563796997 L 194.4114580154419 19.475133251037587 C 194.4114580154419 19.475133251037587 194.4114580154419 19.475133251037587 194.4114580154419 19.475133251037587 L 272.1760412216187 19.475133251037587 C 272.1760412216187 19.475133251037587 272.1760412216187 19.475133251037587 272.1760412216187 19.475133251037587 L 272.1760412216187 243.42766563796997 C 272.1760412216187 243.42766563796997 272.1760412216187 243.42766563796997 272.1760412216187 243.42766563796997 L 194.4114580154419 243.42766563796997 C 194.4114580154419 243.42766563796997 194.4114580154419 243.42766563796997 194.4114580154419 243.42766563796997 Z "
                          fill="rgba(61,94,225,0.85)"
                          fillOpacity={1}
                          stroke="#3d5ee1"
                          strokeOpacity={1}
                          strokeLinecap="square"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-bar-area undefined"
                          index={0}
                          clipPath="url(#gridRectBarMaskwed010ob)"
                          pathto="M 194.4114580154419 243.42766563796997 L 194.4114580154419 19.475133251037587 C 194.4114580154419 19.475133251037587 194.4114580154419 19.475133251037587 194.4114580154419 19.475133251037587 L 272.1760412216187 19.475133251037587 C 272.1760412216187 19.475133251037587 272.1760412216187 19.475133251037587 272.1760412216187 19.475133251037587 L 272.1760412216187 243.42766563796997 C 272.1760412216187 243.42766563796997 272.1760412216187 243.42766563796997 272.1760412216187 243.42766563796997 L 194.4114580154419 243.42766563796997 C 194.4114580154419 243.42766563796997 194.4114580154419 243.42766563796997 194.4114580154419 243.42766563796997 Z "
                          pathfrom="M 194.4114580154419 243.42766563796997 L 194.4114580154419 243.42766563796997 L 272.1760412216187 243.42766563796997 L 272.1760412216187 243.42766563796997 L 272.1760412216187 243.42766563796997 L 272.1760412216187 243.42766563796997 L 272.1760412216187 243.42766563796997 L 194.4114580154419 243.42766563796997 Z"
                          cy="19.474133251037586"
                          cx="349.9406244277954"
                          j={1}
                          val={92}
                          barheight="223.95253238693238"
                          barwidth="77.76458320617675"
                        />
                        <rect
                          width="77.76458320617675"
                          height="243.42666563796996"
                          x="349.9406244277954"
                          y={0}
                          rx={5}
                          ry={5}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#E9EDF4"
                          className="apexcharts-backgroundBar"
                        />
                        <path
                          d="M 349.9406244277954 243.42766563796997 L 349.9406244277954 24.343666563796997 C 349.9406244277954 24.343666563796997 349.9406244277954 24.343666563796997 349.9406244277954 24.343666563796997 L 427.7052076339721 24.343666563796997 C 427.7052076339721 24.343666563796997 427.7052076339721 24.343666563796997 427.7052076339721 24.343666563796997 L 427.7052076339721 243.42766563796997 C 427.7052076339721 243.42766563796997 427.7052076339721 243.42766563796997 427.7052076339721 243.42766563796997 L 349.9406244277954 243.42766563796997 C 349.9406244277954 243.42766563796997 349.9406244277954 243.42766563796997 349.9406244277954 243.42766563796997 Z "
                          fill="rgba(233,237,244,0.85)"
                          fillOpacity={1}
                          stroke="#e9edf4"
                          strokeOpacity={1}
                          strokeLinecap="square"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-bar-area undefined"
                          index={0}
                          clipPath="url(#gridRectBarMaskwed010ob)"
                          pathto="M 349.9406244277954 243.42766563796997 L 349.9406244277954 24.343666563796997 C 349.9406244277954 24.343666563796997 349.9406244277954 24.343666563796997 349.9406244277954 24.343666563796997 L 427.7052076339721 24.343666563796997 C 427.7052076339721 24.343666563796997 427.7052076339721 24.343666563796997 427.7052076339721 24.343666563796997 L 427.7052076339721 243.42766563796997 C 427.7052076339721 243.42766563796997 427.7052076339721 243.42766563796997 427.7052076339721 243.42766563796997 L 349.9406244277954 243.42766563796997 C 349.9406244277954 243.42766563796997 349.9406244277954 243.42766563796997 349.9406244277954 243.42766563796997 Z "
                          pathfrom="M 349.9406244277954 243.42766563796997 L 349.9406244277954 243.42766563796997 L 427.7052076339721 243.42766563796997 L 427.7052076339721 243.42766563796997 L 427.7052076339721 243.42766563796997 L 427.7052076339721 243.42766563796997 L 427.7052076339721 243.42766563796997 L 349.9406244277954 243.42766563796997 Z"
                          cy="24.342666563796996"
                          cx="505.4697908401489"
                          j={2}
                          val={90}
                          barheight="219.08399907417297"
                          barwidth="77.76458320617675"
                        />
                        <rect
                          width="77.76458320617675"
                          height="243.42666563796996"
                          x="505.4697908401489"
                          y={0}
                          rx={5}
                          ry={5}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                          className="apexcharts-backgroundBar"
                        />
                        <path
                          d="M 505.4697908401489 243.42766563796997 L 505.4697908401489 43.81779981483458 C 505.4697908401489 43.81779981483458 505.4697908401489 43.81779981483458 505.4697908401489 43.81779981483458 L 583.2343740463257 43.81779981483458 C 583.2343740463257 43.81779981483458 583.2343740463257 43.81779981483458 583.2343740463257 43.81779981483458 L 583.2343740463257 243.42766563796997 C 583.2343740463257 243.42766563796997 583.2343740463257 243.42766563796997 583.2343740463257 243.42766563796997 L 505.4697908401489 243.42766563796997 C 505.4697908401489 243.42766563796997 505.4697908401489 243.42766563796997 505.4697908401489 243.42766563796997 Z "
                          fill="rgba(233,237,244,0.85)"
                          fillOpacity={1}
                          stroke="#e9edf4"
                          strokeOpacity={1}
                          strokeLinecap="square"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-bar-area undefined"
                          index={0}
                          clipPath="url(#gridRectBarMaskwed010ob)"
                          pathto="M 505.4697908401489 243.42766563796997 L 505.4697908401489 43.81779981483458 C 505.4697908401489 43.81779981483458 505.4697908401489 43.81779981483458 505.4697908401489 43.81779981483458 L 583.2343740463257 43.81779981483458 C 583.2343740463257 43.81779981483458 583.2343740463257 43.81779981483458 583.2343740463257 43.81779981483458 L 583.2343740463257 243.42766563796997 C 583.2343740463257 243.42766563796997 583.2343740463257 243.42766563796997 583.2343740463257 243.42766563796997 L 505.4697908401489 243.42766563796997 C 505.4697908401489 243.42766563796997 505.4697908401489 243.42766563796997 505.4697908401489 243.42766563796997 Z "
                          pathfrom="M 505.4697908401489 243.42766563796997 L 505.4697908401489 243.42766563796997 L 583.2343740463257 243.42766563796997 L 583.2343740463257 243.42766563796997 L 583.2343740463257 243.42766563796997 L 583.2343740463257 243.42766563796997 L 583.2343740463257 243.42766563796997 L 505.4697908401489 243.42766563796997 Z"
                          cy="43.81679981483458"
                          cx="660.9989572525024"
                          j={3}
                          val={82}
                          barheight="199.60986582313538"
                          barwidth="77.76458320617675"
                        />
                        <rect
                          width="77.76458320617675"
                          height="243.42666563796996"
                          x="660.9989572525024"
                          y={0}
                          rx={5}
                          ry={5}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#E9EDF4"
                          className="apexcharts-backgroundBar"
                        />
                        <path
                          d="M 660.9989572525024 243.42766563796997 L 660.9989572525024 24.343666563796997 C 660.9989572525024 24.343666563796997 660.9989572525024 24.343666563796997 660.9989572525024 24.343666563796997 L 738.7635404586791 24.343666563796997 C 738.7635404586791 24.343666563796997 738.7635404586791 24.343666563796997 738.7635404586791 24.343666563796997 L 738.7635404586791 243.42766563796997 C 738.7635404586791 243.42766563796997 738.7635404586791 243.42766563796997 738.7635404586791 243.42766563796997 L 660.9989572525024 243.42766563796997 C 660.9989572525024 243.42766563796997 660.9989572525024 243.42766563796997 660.9989572525024 243.42766563796997 Z "
                          fill="rgba(233,237,244,0.85)"
                          fillOpacity={1}
                          stroke="#e9edf4"
                          strokeOpacity={1}
                          strokeLinecap="square"
                          strokeWidth={0}
                          strokeDasharray={0}
                          className="apexcharts-bar-area undefined"
                          index={0}
                          clipPath="url(#gridRectBarMaskwed010ob)"
                          pathto="M 660.9989572525024 243.42766563796997 L 660.9989572525024 24.343666563796997 C 660.9989572525024 24.343666563796997 660.9989572525024 24.343666563796997 660.9989572525024 24.343666563796997 L 738.7635404586791 24.343666563796997 C 738.7635404586791 24.343666563796997 738.7635404586791 24.343666563796997 738.7635404586791 24.343666563796997 L 738.7635404586791 243.42766563796997 C 738.7635404586791 243.42766563796997 738.7635404586791 243.42766563796997 738.7635404586791 243.42766563796997 L 660.9989572525024 243.42766563796997 C 660.9989572525024 243.42766563796997 660.9989572525024 243.42766563796997 660.9989572525024 243.42766563796997 Z "
                          pathfrom="M 660.9989572525024 243.42766563796997 L 660.9989572525024 243.42766563796997 L 738.7635404586791 243.42766563796997 L 738.7635404586791 243.42766563796997 L 738.7635404586791 243.42766563796997 L 738.7635404586791 243.42766563796997 L 738.7635404586791 243.42766563796997 L 660.9989572525024 243.42766563796997 Z"
                          cy="24.342666563796996"
                          cx="816.5281236648559"
                          j={4}
                          val={90}
                          barheight="219.08399907417297"
                          barwidth="77.76458320617675"
                        />
                        <g className="apexcharts-bar-goals-markers">
                          <g
                            classname="apexcharts-bar-goals-groups"
                            className="apexcharts-hidden-element-shown"
                            clipPath="url(#gridRectMarkerMaskwed010ob)"
                          />
                          <g
                            classname="apexcharts-bar-goals-groups"
                            className="apexcharts-hidden-element-shown"
                            clipPath="url(#gridRectMarkerMaskwed010ob)"
                          />
                          <g
                            classname="apexcharts-bar-goals-groups"
                            className="apexcharts-hidden-element-shown"
                            clipPath="url(#gridRectMarkerMaskwed010ob)"
                          />
                          <g
                            classname="apexcharts-bar-goals-groups"
                            className="apexcharts-hidden-element-shown"
                            clipPath="url(#gridRectMarkerMaskwed010ob)"
                          />
                          <g
                            classname="apexcharts-bar-goals-groups"
                            className="apexcharts-hidden-element-shown"
                            clipPath="url(#gridRectMarkerMaskwed010ob)"
                          />
                        </g>
                        <g className="apexcharts-bar-shadows apexcharts-hidden-element-shown" />
                      </g>
                      <g
                        className="apexcharts-datalabels apexcharts-hidden-element-shown"
                        data-realindex={0}
                      >
                        <g
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            x="77.76458320617677"
                            y={0}
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="14px"
                            fontFamily="Helvetica, Arial, sans-serif"
                            fontWeight={600}
                            fill="#304758"
                            className="apexcharts-datalabel"
                            cx="77.76458320617677"
                            cy={0}
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            100%
                          </text>
                        </g>
                        <g
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            x="233.29374961853028"
                            y="14.807467220153796"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="14px"
                            fontFamily="Helvetica, Arial, sans-serif"
                            fontWeight={600}
                            fill="#304758"
                            className="apexcharts-datalabel"
                            cx="233.29374961853028"
                            cy="14.807467220153796"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            92%
                          </text>
                        </g>
                        <g
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            x="388.8229160308838"
                            y="19.676000532913207"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="14px"
                            fontFamily="Helvetica, Arial, sans-serif"
                            fontWeight={600}
                            fill="#304758"
                            className="apexcharts-datalabel"
                            cx="388.8229160308838"
                            cy="19.676000532913207"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            90%
                          </text>
                        </g>
                        <g
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            x="544.3520824432372"
                            y="39.15013378395079"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="14px"
                            fontFamily="Helvetica, Arial, sans-serif"
                            fontWeight={600}
                            fill="#304758"
                            className="apexcharts-datalabel"
                            cx="544.3520824432372"
                            cy="39.15013378395079"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            82%
                          </text>
                        </g>
                        <g
                          className="apexcharts-data-labels"
                          transform="rotate(0)"
                        >
                          <text
                            x="699.8812488555907"
                            y="19.676000532913207"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="14px"
                            fontFamily="Helvetica, Arial, sans-serif"
                            fontWeight={600}
                            fill="#304758"
                            className="apexcharts-datalabel"
                            cx="699.8812488555907"
                            cy="19.676000532913207"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            90%
                          </text>
                        </g>
                      </g>
                    </g>
                    <line
                      x1={0}
                      y1={0}
                      x2="777.6458320617676"
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
                      x2="777.6458320617676"
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
                          x="77.76458320617675"
                          y="271.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Mat</tspan>
                          <title>Mat</title>
                        </text>
                        <text
                          x="233.29374961853026"
                          y="271.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Phy</tspan>
                          <title>Phy</title>
                        </text>
                        <text
                          x="388.8229160308838"
                          y="271.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Che</tspan>
                          <title>Che</title>
                        </text>
                        <text
                          x="544.3520824432372"
                          y="271.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Eng</tspan>
                          <title>Eng</title>
                        </text>
                        <text
                          x="699.8812488555908"
                          y="271.42666563796996"
                          textAnchor="middle"
                          dominantBaseline="auto"
                          fontSize="12px"
                          fontFamily="Helvetica, Arial, sans-serif"
                          fontWeight={400}
                          fill="#373d3f"
                          className="apexcharts-text apexcharts-xaxis-label "
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          <tspan>Sci</tspan>
                          <title>Sci</title>
                        </text>
                      </g>
                    </g>
                    <g className="apexcharts-yaxis-annotations" />
                    <g className="apexcharts-xaxis-annotations" />
                    <g className="apexcharts-point-annotations" />
                  </g>
                </svg>
                <div className="apexcharts-legend" style={{ maxHeight: 155 }} />
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
                <div
                  className="apexcharts-toolbar"
                  style={{ top: 0, right: 3 }}
                >
                  <div className="apexcharts-menu-icon" title="Menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z" />
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                  </div>
                  <div className="apexcharts-menu">
                    <div
                      className="apexcharts-menu-item exportSVG"
                      title="Download SVG"
                    >
                      Download SVG
                    </div>
                    <div
                      className="apexcharts-menu-item exportPNG"
                      title="Download PNG"
                    >
                      Download PNG
                    </div>
                    <div
                      className="apexcharts-menu-item exportCSV"
                      title="Download CSV"
                    >
                      Download CSV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Exam Result */}
      {/* Fees Reminder */}
      <div className="col-12 col-md-6 col-xl-6 col-xxl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h4 className="card-titile">Fees Reminder</h4>
            <a href="fees-assign.html" className="link-primary fw-medium">
              View All
            </a>
          </div>
          <div className="card-body py-1">
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className="d-flex align-items-center overflow-hidden me-2">
                <span className="bg-info-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-bus-stop fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">Transport Fees</h6>
                  <p>$2500</p>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-1">Last Date</h6>
                <p>25 May 2024</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className="d-flex align-items-center overflow-hidden me-2">
                <span className="bg-success-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-books fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">Book Fees</h6>
                  <p>$2500</p>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-1">Last Date</h6>
                <p>25 May 2024</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className="d-flex align-items-center overflow-hidden me-2">
                <span className="bg-info-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-report-money fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">Exam Fees</h6>
                  <p>$2500</p>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-1">Last Date</h6>
                <p>25 May 2024</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className="d-flex align-items-center overflow-hidden me-2">
                <span className="bg-skyblue-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-meat fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">
                    Mess Fees{" "}
                    <span className="d-inline-flex align-items-center badge badge-soft-danger">
                      <i className="ti ti-circle-filled me-1 fs-5" />
                      Due
                    </span>
                  </h6>
                  <p className="text-danger">$2500 + $150</p>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-1">Last Date</h6>
                <p>27 May 2024</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className="d-flex align-items-center overflow-hidden me-2">
                <span className="bg-danger-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                  <i className="ti ti-report-money fs-16" />
                </span>
                <div className="overflow-hidden">
                  <h6 className="text-truncate mb-1">Hostel</h6>
                  <p>$2500</p>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-1">Last Date</h6>
                <p>25 May 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fees Reminder */}
    </div>
    <div className="row">
      {/* Notice Board */}
      <div className="col-12 col-md-6 col-xl-6 col-xxl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header  d-flex align-items-center justify-content-between">
            <h4 className="card-title">Notice Board</h4>
            <a href="notice-board.html" className="fw-medium">
              View All
            </a>
          </div>
          <div className="card-body">
            <div className="notice-widget">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center overflow-hidden me-2">
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
                <a href="notice-board.html">
                  <i className="ti ti-chevron-right fs-16" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center overflow-hidden me-2">
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
                <a href="notice-board.html">
                  <i className="ti ti-chevron-right fs-16" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center overflow-hidden me-2">
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
                <a href="notice-board.html">
                  <i className="ti ti-chevron-right fs-16" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center overflow-hidden me-2">
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
                <a href="notice-board.html">
                  <i className="ti ti-chevron-right fs-16" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center overflow-hidden me-2">
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
                <a href="notice-board.html">
                  <i className="ti ti-chevron-right fs-16" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-0">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <span className="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                    <i className="ti ti-bell-check fs-16" />
                  </span>
                  <div className="overflow-hidden">
                    <h6 className="text-truncate mb-1">
                      English Exam Preparation
                    </h6>
                    <p>
                      <i className="ti ti-calendar me-2" />
                      Added on : 23 Mar 2024
                    </p>
                  </div>
                </div>
                <a href="notice-board.html">
                  <i className="ti ti-chevron-right fs-16" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Notice Board */}
      {/* Syllabus */}
      <div className="col-12 col-md-6 col-xl-6 col-xxl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-header  d-flex align-items-center justify-content-between">
            <h4 className="card-title">Syllabus</h4>
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">Maths</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">Physics</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">Chemistry</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">Botany</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">English</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">Spanish</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
                  <div className="col-12 col-sm-4">
                    <p className="text-dark">Japanese</p>
                  </div>
                  <div className="col-12 col-sm-8">
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
      {/* /Syllabus */}
      {/* Todo */}
      <div className="col-12 col-xl-12 col-xxl-4 d-flex">
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
  
  {/* Add Exam Schedule Modal */}   
                        



<div className="modal fade" id="add_exam_schedule">
  <div className="modal-dialog modal-dialog-centered  modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Add Exam Schedule</h4>
        <button
          type="button"
          className="btn-close custom-btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="ti ti-x" />
        </button>
      </div>
      <form action="student-dashboard.html">
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Class</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Class"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Section</label>
                    <select
                      className="select select2-hidden-accessible"
                      data-select2-id={1}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id={3}>Select</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
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
                          aria-labelledby="select2-ybvl-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-ybvl-container"
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
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Exam Name</label>
                    <select
                      className="select select2-hidden-accessible"
                      data-select2-id={4}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id={6}>Select</option>
                      <option>Week text</option>
                      <option>Mothly Test</option>
                      <option>Chapter Wise Test</option>
                      <option>Unit Test</option>
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
                          aria-labelledby="select2-0cd5-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-0cd5-container"
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
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Start Time</label>
                    <select
                      className="select select2-hidden-accessible"
                      data-select2-id={7}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id={9}>Select</option>
                      <option>09:30 AM</option>
                      <option>10:30 AM</option>
                      <option>11:00 AM</option>
                      <option>12:30 PM</option>
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
                          aria-labelledby="select2-q7z8-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-q7z8-container"
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
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">End Time</label>
                    <select
                      className="select select2-hidden-accessible"
                      data-select2-id={10}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id={12}>Select</option>
                      <option>10:45 AM</option>
                      <option>11:00 AM</option>
                      <option>11:30 AM</option>
                      <option>12:00 PM</option>
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
                          aria-labelledby="select2-1zlq-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-1zlq-container"
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
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Duration(min)</label>
                    <select
                      className="select select2-hidden-accessible"
                      data-select2-id={13}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id={15}>Select</option>
                      <option>3 hrs</option>
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
                          aria-labelledby="select2-etay-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-etay-container"
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
            </div>
          </div>
          <div className="exam-schedule-add">
            <div className="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3">
              <div className="shedule-info flex-fill">
                <div className="mb-3">
                  <label className="form-label">Exam Date</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={16}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={18}>Select</option>
                    <option>13 May 2024 </option>
                    <option>14 May 2024</option>
                    <option>15 May 2024</option>
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
                        aria-labelledby="select2-lkmh-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-lkmh-container"
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
              <div className="shedule-info flex-fill">
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={19}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={21}>Select</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Physics</option>
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
                        aria-labelledby="select2-bjv0-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-bjv0-container"
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
              <div className="shedule-info flex-fill">
                <div className="mb-3">
                  <label className="form-label">Room No</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={22}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={24}>Select</option>
                    <option>101</option>
                    <option>103</option>
                    <option>104</option>
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
                        aria-labelledby="select2-nnvm-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-nnvm-container"
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
              <div className="shedule-info flex-fill">
                <div className="mb-3">
                  <label className="form-label">Max Marks</label>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id={25}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={27}>Select</option>
                    <option>100</option>
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
                        aria-labelledby="select2-7umh-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-7umh-container"
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
              <div className="shedule-info flex-fill">
                <div className="d-flex align-items-end">
                  <div className="mb-3 flex-fill">
                    <label className="form-label">Min Marks</label>
                    <select
                      className="select select2-hidden-accessible"
                      data-select2-id={28}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id={30}>Select</option>
                      <option>35</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id={29}
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
                          aria-labelledby="select2-6tif-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-6tif-container"
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
                  <div className="mb-3 ms-2">
                    <a href="#" className="delete-schedule-table">
                      <i className="ti ti-trash" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href="javascript:void(0);"
              className="btn btn-primary add-new-schedule"
            >
              <i className="ti ti-square-rounded-plus-filled me-2" />
              Add New
            </a>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">
            Cancel
          </a>
          <button type="submit" className="btn btn-primary">
            Add Exam Schedule
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
  {/* /Modal */}
  </div>
  )
}

export default SDashboard
