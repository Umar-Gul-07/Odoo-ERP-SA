import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TDashboard = () => {
  useEffect(() => {
    // Ensure chart containers start clean to avoid duplicate renders
    ['plan_chart', 'attendance_chart'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) el.innerHTML = ''
    })
  }, [])

  return (
    <div className="content">
  {/* Page Header */}
  <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
    <div className="my-auto mb-2">
      <h3 className="page-title mb-1">Teacher Dashboard</h3>
      <nav>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Teacher Dashboard
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* /Page Header */}
  {/* Greeting Section */}
  <div className="row">
    <div className="col-md-12 d-flex">
      <div className="card flex-fill bg-info bg-03">
        <div className="card-body">
          <h1 className="text-white mb-1"> Good Morning Ms.Teena</h1>
          <p className="text-white mb-3">Have a Good day at work</p>
          <p className="text-light">
            Notice : There is a staff meeting at 9AM today, Dont forget to
            Attend!!!
          </p>
                  </div>
      </div>
    </div>
  </div>
  {/* /Greeting Section */}
  {/* Teacher-Profile */}
  <div className="row">
    <div className="col-xxl-8 col-xl-12">
      <div className="row">
        <div className="col-xxl-7 col-xl-8 d-flex">
          <div className="card bg-dark position-relative flex-fill">
            <div className="card-body pb-1">
              <div className="d-sm-flex align-items-center justify-content-between row-gap-3">
                <div className="d-flex align-items-center overflow-hidden mb-3">
                  <div className="avatar avatar-xxl rounded flex-shrink-0 border border-2 border-white me-3">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/teachers/teacher-01.jpg`} alt="Img" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="badge bg-transparent-primary text-primary mb-1">
                      #T594651
                    </span>
                    <h3 className="text-white mb-1 text-truncate">
                      Henriques Morgan{" "}
                    </h3>
                    <div className="d-flex align-items-center flex-wrap text-light row-gap-2">
                      <span className="me-2">Classes : I-A, V-B</span>
                      <span className="d-flex align-items-center">
                        <i className="ti ti-circle-filled text-warning fs-7 me-1" />
                        Physics
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/edit-teacher"
                  className="btn btn-primary flex-shrink-0 mb-3"
                >
                  Edit Profile
                </Link>
              </div>
              <div className="student-card-bg">
                <img src={`${process.env.PUBLIC_URL}/assets/img/bg/shape-01.png`} alt="Bg" />
                <img src={`${process.env.PUBLIC_URL}/assets/img/bg/shape-02.png`} alt="Bg" />
                <img src={`${process.env.PUBLIC_URL}/assets/img/bg/shape-03.png`} alt="Bg" />
                <img src={`${process.env.PUBLIC_URL}/assets/img/bg/shape-04.png`} alt="Bg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="row align-items-center justify-content-between">
                <div className="col-sm-5">
                  <div
                    id="plan_chart"
                    className="mb-3 mb-sm-0 text-center text-sm-start"
                    style={{ minHeight: 87 }}
                  >
                    <div
                      id="apexchartsao6b6m87i"
                      className="apexcharts-canvas apexchartsao6b6m87i apexcharts-theme-light"
                      style={{ width: 173, height: 87 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        data-xmlns="ApexChartsNS"
                        transform="translate(0, 0)"
                        width={173}
                        height={87}
                      >
                        <foreignObject x={0} y={0} width={173} height={87}>
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
                          transform="translate(41.5, 1)"
                        >
                          <defs>
                            <clipPath id="gridRectMaskao6b6m87i">
                              <rect
                                width={96}
                                height={94}
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
                            <clipPath id="gridRectBarMaskao6b6m87i">
                              <rect
                                width={96}
                                height={94}
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
                            <clipPath id="gridRectMarkerMaskao6b6m87i">
                              <rect
                                width={96}
                                height={88}
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
                            <clipPath id="forecastMaskao6b6m87i" />
                            <clipPath id="nonForecastMaskao6b6m87i" />
                          </defs>
                          <g className="apexcharts-pie">
                            <g transform="translate(0, 0) scale(1)">
                              <circle
                                r="26.602439024390247"
                                cx={45}
                                cy={44}
                                fill="transparent"
                              />
                              <g className="apexcharts-slices">
                                <g
                                  className="apexcharts-series apexcharts-pie-series"
                                  seriesname="Completed"
                                  rel={1}
                                  data-realindex={0}
                                >
                                  <path
                                    d="M 45 3.0731707317073145 A 40.926829268292686 40.926829268292686 0 1 1 32.35291423021556 5.076272333091033 L 36.77939424964011 18.69957701650917 A 26.602439024390247 26.602439024390247 0 1 0 45 17.397560975609753 L 45 3.0731707317073145 z "
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
                                    data-angle={342}
                                    data-startangle={0}
                                    data-strokewidth={2}
                                    data-value={95}
                                    data-pathorig="M 45 3.0731707317073145 A 40.926829268292686 40.926829268292686 0 1 1 32.35291423021556 5.076272333091033 L 36.77939424964011 18.69957701650917 A 26.602439024390247 26.602439024390247 0 1 0 45 17.397560975609753 L 45 3.0731707317073145 z "
                                  />
                                </g>
                                <g
                                  className="apexcharts-series apexcharts-pie-series"
                                  seriesname="Pending"
                                  rel={2}
                                  data-realindex={1}
                                >
                                  <path
                                    d="M 32.35291423021556 5.076272333091033 A 40.926829268292686 40.926829268292686 0 0 1 44.992856920804925 3.0731713550585695 L 44.9953569985232 17.39756138078807 A 26.602439024390247 26.602439024390247 0 0 0 36.77939424964011 18.69957701650917 L 32.35291423021556 5.076272333091033 z "
                                    fill="rgba(232,38,70,1)"
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
                                    data-startangle={342}
                                    data-strokewidth={2}
                                    data-value={5}
                                    data-pathorig="M 32.35291423021556 5.076272333091033 A 40.926829268292686 40.926829268292686 0 0 1 44.992856920804925 3.0731713550585695 L 44.9953569985232 17.39756138078807 A 26.602439024390247 26.602439024390247 0 0 0 36.77939424964011 18.69957701650917 L 32.35291423021556 5.076272333091033 z "
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <line
                            x1={0}
                            y1={0}
                            x2={90}
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
                            x2={90}
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
                        className="apexcharts-legend"
                        style={{ maxHeight: 45 }}
                      />
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
                <div className="col-sm-7">
                  <div className=" text-center text-sm-start">
                    <h4 className="mb-3">Syllabus</h4>
                    <p className="mb-2">
                      <i className="ti ti-circle-filled text-success me-1" />
                      Completed : <span className="fw-semibold">95%</span>
                    </p>
                    <p>
                      <i className="ti ti-circle-filled text-danger me-1" />
                      Pending :<span className="fw-semibold">5%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Today's Class */}
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h4 className="me-2">Today's Class</h4>
            <div className="owl-nav slide-nav2 text-end nav-control">
              <button type="button" role="presentation" className="owl-prev">
                <i className="ti ti-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="ti ti-chevron-right" />
              </button>
            </div>
          </div>
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
          <div className="owl-carousel owl-theme task-slider owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1182px, 0px, 0px)",
                  transition: "all",
                  width: 3844
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        09:00 - 09:45
                      </span>
                      <p className="text-dark">Class IV, C</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        11:30 - 12:150
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        01:30 - 02:15
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        02:15 - 03:00
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        09:00 - 09:45
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        09:00 - 09:45
                      </span>
                      <p className="text-dark">Class IV, C</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        11:30 - 12:150
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        01:30 - 02:15
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        02:15 - 03:00
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        09:00 - 09:45
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        09:00 - 09:45
                      </span>
                      <p className="text-dark">Class IV, C</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        11:30 - 12:150
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "280.637px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="bg-light-400 rounded p-3">
                      <span className="badge badge-primary badge-lg mb-2">
                        <i className="ti ti-clock me-1" />
                        01:30 - 02:15
                      </span>
                      <p className="text-dark">Class V, B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </div>
      {/* /Today's Class */}
      <div className="row">
        {/* Attendance */}
        <div className="col-xxl-6 col-xl-6 col-md-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Attendance</h4>
              <div className="card-dropdown">
                <button
                  type="button"
                  className="dropdown-toggle p-2"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-calendar-due" />
                  This Week
                </button>
                <div className="dropdown-menu  dropdown-menu-end">
                  <ul>
                    <li>
                      <button type="button" className="dropdown-item">This Week</button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">Last Week</button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">Last Month</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className="bg-light-300 rounde border p-3 mb-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <h6 className="mb-2">Last 7 Days </h6>
                  <p className="mb-2">14 May 2024 - 21 May 2024</p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <span className="badge badge-lg bg-success">
                    M
                  </span>
                  <span className="badge badge-lg bg-success">
                    T
                  </span>
                  <span className="badge badge-lg bg-success">
                    W
                  </span>
                  <span className="badge badge-lg bg-success">
                    T
                  </span>
                  <span className="badge badge-lg bg-danger">
                    F
                  </span>
                  <span className="badge badge-lg bg-white border text-default">
                    S
                  </span>
                  <span className="badge badge-lg  bg-white border text-gray-1">
                    S
                  </span>
                </div>
              </div>
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
                  <div className="col text-center border-end">
                    <p className="mb-1">Halfday</p>
                    <h5>0</h5>
                  </div>
                  <div className="col text-center">
                    <p className="mb-1">Late</p>
                    <h5>1</h5>
                  </div>
                </div>
              </div>
              <div className="attendance-chart text-center">
                <div id="attendance_chart" style={{ minHeight: 255 }}>
                  <div
                    id="apexcharts0tpkgc6f"
                    className="apexcharts-canvas apexcharts0tpkgc6f apexcharts-theme-light"
                    style={{ width: 551, height: 255 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      data-xmlns="ApexChartsNS"
                      transform="translate(0, 0)"
                      width={551}
                      height={255}
                    >
                      <foreignObject x={0} y={0} width={551} height={255}>
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
                          <clipPath id="gridRectMask0tpkgc6f">
                            <rect
                              width={557}
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
                          <clipPath id="gridRectBarMask0tpkgc6f">
                            <rect
                              width={557}
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
                          <clipPath id="gridRectMarkerMask0tpkgc6f">
                            <rect
                              width={557}
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
                          <clipPath id="forecastMask0tpkgc6f" />
                          <clipPath id="nonForecastMask0tpkgc6f" />
                        </defs>
                        <g className="apexcharts-pie">
                          <g transform="translate(0, 0) scale(1)">
                            <circle
                              r="66.80731707317074"
                              cx="275.5"
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
                                  d="M 275.5 8.719512195121936 A 102.78048780487806 102.78048780487806 0 1 1 215.0871450448663 194.6511613242934 L 236.2316442791631 165.5482548607907 A 66.80731707317074 66.80731707317074 0 1 0 275.5 44.692682926829264 L 275.5 8.719512195121936 z "
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
                                  data-pathorig="M 275.5 8.719512195121936 A 102.78048780487806 102.78048780487806 0 1 1 215.0871450448663 194.6511613242934 L 236.2316442791631 165.5482548607907 A 66.80731707317074 66.80731707317074 0 1 0 275.5 44.692682926829264 L 275.5 8.719512195121936 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Late"
                                rel={2}
                                data-realindex={1}
                              >
                                <path
                                  d="M 215.0871450448663 194.6511613242934 A 102.78048780487806 102.78048780487806 0 0 1 192.34883867570662 171.91285495513372 L 221.45174513920932 150.76835572083692 A 66.80731707317074 66.80731707317074 0 0 0 236.2316442791631 165.5482548607907 L 215.0871450448663 194.6511613242934 z "
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
                                  data-pathorig="M 215.0871450448663 194.6511613242934 A 102.78048780487806 102.78048780487806 0 0 1 192.34883867570662 171.91285495513372 L 221.45174513920932 150.76835572083692 A 66.80731707317074 66.80731707317074 0 0 0 236.2316442791631 165.5482548607907 L 215.0871450448663 194.6511613242934 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="HalfxDay"
                                rel={3}
                                data-realindex={2}
                              >
                                <path
                                  d="M 192.34883867570662 171.91285495513372 A 102.78048780487806 102.78048780487806 0 0 1 177.74994732517615 79.73908257814561 L 211.9624657613645 90.85540367579465 A 66.80731707317074 66.80731707317074 0 0 0 221.45174513920932 150.76835572083692 L 192.34883867570662 171.91285495513372 z "
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
                                  data-pathorig="M 192.34883867570662 171.91285495513372 A 102.78048780487806 102.78048780487806 0 0 1 177.74994732517615 79.73908257814561 L 211.9624657613645 90.85540367579465 A 66.80731707317074 66.80731707317074 0 0 0 221.45174513920932 150.76835572083692 L 192.34883867570662 171.91285495513372 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Absent"
                                rel={4}
                                data-realindex={3}
                              >
                                <path
                                  d="M 177.74994732517615 79.73908257814561 A 102.78048780487806 102.78048780487806 0 0 1 275.48206142090106 8.719513760558272 L 275.48833992358567 44.692683944362884 A 66.80731707317074 66.80731707317074 0 0 0 211.9624657613645 90.85540367579465 L 177.74994732517615 79.73908257814561 z "
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
                                  data-pathorig="M 177.74994732517615 79.73908257814561 A 102.78048780487806 102.78048780487806 0 0 1 275.48206142090106 8.719513760558272 L 275.48833992358567 44.692683944362884 A 66.80731707317074 66.80731707317074 0 0 0 211.9624657613645 90.85540367579465 L 177.74994732517615 79.73908257814561 z "
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          x1={0}
                          y1={0}
                          x2={551}
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
                          x2={551}
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
            </div>
          </div>
        </div>
        {/* /Attendance */}
        {/* Best Performers */}
        <div className="col-xxl-6 col-xl-6 col-md-6 d-flex flex-column">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Best Performers</h4>
              <Link to="/student-list" className="link-primary fw-medium">
                View All
              </Link>
            </div>
            <div className="card-body pb-1">
              <div className="d-sm-flex align-items-center mb-1">
                <div className="w-50 mb-2">
                  <h6>Class IV, C</h6>
                </div>
                <div className="class-progress w-100 ms-sm-3 mb-3">
                  <div
                    className="progress justify-content-between"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "80%" }}
                    >
                      <div className="avatar-list-stacked avatar-group-xs d-flex">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-10.jpg`}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-11.jpg`}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-12.jpg`}
                            alt="img"
                          />
                        </span>
                      </div>
                    </div>
                    <span className="badge">80%</span>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex align-items-center">
                <div className="w-50 mb-2">
                  <h6>Class III, B</h6>
                </div>
                <div className="class-progress w-100 ms-sm-3 mb-3">
                  <div
                    className="progress justify-content-between"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "54%" }}
                    >
                      <div className="avatar-list-stacked avatar-group-xs d-flex">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar-27.jpg`}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-11.jpg`}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-12.jpg`}
                            alt="img"
                          />
                        </span>
                      </div>
                    </div>
                    <span className="badge">54%</span>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex align-items-center mb-1">
                <div className="w-50 mb-2">
                  <h6>Class V, A</h6>
                </div>
                <div className="class-progress w-100 ms-sm-3 mb-3">
                  <div
                    className="progress justify-content-between"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-skyblue"
                      style={{ width: "76%" }}
                    >
                      <div className="avatar-list-stacked avatar-group-xs d-flex">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar-27.jpg`}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-11.jpg`}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/students/student-12.jpg`}
                            alt="img"
                          />
                        </span>
                      </div>
                    </div>
                    <span className="badge">7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Student Progress</h4>
              <div className="dropdown">
                <button
                  type="button"
                  className="bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-calendar me-2" />
                  This Month
                </button>
                <ul className="dropdown-menu mt-2 p-3">
                  <li>
                    <button type="button" className="dropdown-item rounded-1">
                      This Month
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item rounded-1">
                      This Year
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item rounded-1">
                      Last Week
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between p-3 mb-2 border br-5">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <Link
                    to="/student-details"
                    className="avatar avatar-lg flex-shrink-0 br-6 me-2"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/students/student-10.jpg`}
                      alt="student"
                    />
                  </Link>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      <Link to="/student-details">Susan Boswell</Link>
                    </h6>
                    <p>III, B</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/icons/medal.svg`} alt="icon" />
                  <span className="badge badge-success ms-2">98%</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 mb-2 border br-5">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <Link
                    to="/student-details"
                    className="avatar avatar-lg flex-shrink-0 br-6 me-2"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/students/student-12.jpg`}
                      alt="student"
                    />
                  </Link>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      <Link to="/student-details">Richard Mayes</Link>
                    </h6>
                    <p>V, A</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/icons/medal-2.svg`} alt="icon" />
                  <span className="badge badge-success ms-2">98%</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 mb-0 border rounded">
                <div className="d-flex align-items-center overflow-hidden me-2">
                  <Link
                    to="/student-details"
                    className="avatar avatar-lg flex-shrink-0 br-6 me-2"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/students/student-11.jpg`}
                      alt="student"
                    />
                  </Link>
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate">
                      <Link to="/student-details">Veronica Randle</Link>
                    </h6>
                    <p>V, B</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="badge bg-info">78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Best Performers */}
      </div>
    </div>
    {/* Schedules */}
    <div className="col-xxl-4 col-xl-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Schedules</h4>
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
            <div id="schedule-calendar" className="bootstrap-datetimepicker-widget usetwentyfour" />
          </div>

          <h4 className="mb-3">Upcoming Events</h4>
          <div className="event-scroll">
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
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-11.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                    <span className="avatar border-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-13.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                  </div>
                </div>
              </div>
              {/* /Event Item */}
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
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-01.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                    <span className="avatar border-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-07.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                    <span className="avatar border-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-02.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                  </div>
                </div>
              </div>
              {/* /Event Item */}
              {/* Event Item */}
              <div className="border-start border-info border-3 shadow-sm p-3 mb-3">
                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <span className="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                    <i className="ti ti-users-group fs-20" />
                  </span>
                  <div className="flex-fill">
                    <h6 className="mb-1">Staff Meeting</h6>
                    <p className="d-flex align-items-center">
                      <i className="ti ti-calendar me-1" />
                      10 July 2024
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
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-05.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                    <span className="avatar border-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-06.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                    <span className="avatar border-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-07.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                  </div>
                </div>
              </div>
              {/* /Event Item */}
              {/* Event Item */}
              <div className="border-start border-secondary border-3 shadow-sm p-3 mb-0">
                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <span className="avatar p-1 me-2 bg-secondary-transparent flex-shrink-0">
                    <i className="ti ti-campfire fs-24" />
                  </span>
                  <div className="flex-fill">
                    <h6 className="mb-1">Admission Camp</h6>
                    <p className="d-flex align-items-center">
                      <i className="ti ti-calendar me-1" />
                      12 July 2024
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
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-11.jpg`}
                        className="rounded-circle"
                        alt="img" />
                    </span>
                    <span className="avatar border-0">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/parents/parent-13.jpg`}
                        className="rounded-circle"
                        alt="img" />
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
  </div>
  {/* Teacher-profile */}
  {/* Syllabus */}
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Syllabus / Lesson Plan</h4>
          <Link to="/class-syllabus" className="link-primary fw-medium">
            View All
          </Link>
        </div>
        <div className="card-body">
          <div className="owl-carousel owl-theme lesson owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1799px, 0px, 0px)",
                  transition: "all",
                  width: 5847
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "434.75px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="bg-warning-transparent br-5 p-2 fw-semibold mb-3 text-center">
                          Class V, A
                        </div>
                        <div className="border-bottom mb-3">
                          <h5 className="mb-3">
                            Biometric &amp; their Working Functionality
                          </h5>
                          <div className="progress progress-xs mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <Link to="/schedule-classes" className="fw-medium">
                            <i className="ti ti-edit me-1" />
                            Reschedule
                          </Link>
                          <a href="#" className="link-primary">
                            <i className="ti ti-share-3 me-1" />
                            Share
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "434.75px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="bg-info-transparent br-5 p-2 fw-semibold mb-3 text-center">
                          Class IV, B
                        </div>
                        <div className="border-bottom mb-3">
                          <h5 className="mb-3">
                            Mathematics &amp; their Working Functionality
                          </h5>
                          <div className="progress progress-xs mb-3">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <Link to="/schedule-classes" className="fw-medium">
                            <i className="ti ti-edit me-1" />
                            Reschedule
                          </Link>
                          <a href="#" className="link-primary">
                            <i className="ti ti-share-3 me-1" />
                            Share
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "434.75px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="bg-success-transparent br-5 p-2 fw-semibold mb-3 text-center">
                          Class III, C
                        </div>
                        <div className="border-bottom mb-3">
                          <h5 className="mb-3">
                            Science &amp; their Working Functionality
                          </h5>
                          <div className="progress progress-xs mb-3">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <Link to="/schedule-classes" className="fw-medium">
                            <i className="ti ti-edit me-1" />
                            Reschedule
                          </Link>
                          <a href="#" className="link-primary">
                            <i className="ti ti-share-3 me-1" />
                            Share
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "434.75px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="bg-danger-transparent br-5 p-2 fw-semibold mb-3 text-center">
                          Class II, A
                        </div>
                        <div className="border-bottom mb-3">
                          <h5 className="mb-3">
                            English &amp; their Working Functionality
                          </h5>
                          <div className="progress progress-xs mb-3">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <Link to="/schedule-classes" className="fw-medium">
                            <i className="ti ti-edit me-1" />
                            Reschedule
                          </Link>
                          <a href="#" className="link-primary">
                            <i className="ti ti-share-3 me-1" />
                            Share
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "434.75px", marginRight: 15 }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="bg-primary-transparent br-5 p-2 fw-semibold mb-3 text-center">
                          Class I, B
                        </div>
                        <div className="border-bottom mb-3">
                          <h5 className="mb-3">
                            History &amp; their Working Functionality
                          </h5>
                          <div className="progress progress-xs mb-3">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <Link to="/schedule-classes" className="fw-medium">
                            <i className="ti ti-edit me-1" />
                            Reschedule
                          </Link>
                          <a href="#" className="link-primary">
                            <i className="ti ti-share-3 me-1" />
                            Share
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Syllabus */}
  {/* Class Schedule */}
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Class Schedule</h4>
          <div className="d-flex align-items-center gap-2">
            <div className="dropdown me-2 ">
              <button
                type="button"
                className="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-2" />
                All Classes
              </button>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <button type="button" className="dropdown-item rounded-1">
                    I
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item rounded-1">
                    II
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item rounded-1">
                    III
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown ">
              <button
                type="button"
                className="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-2" />
                All Sections
              </button>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <button type="button" className="dropdown-item rounded-1">
                    A
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item rounded-1">
                    B
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item rounded-1">
                    C
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Teacher</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-primary-transparent flex-shrink-0 me-2">
                        <i className="ti ti-clock fs-16" />
                      </span>
                      <span>09:00 AM - 09:45 AM</span>
                    </div>
                  </td>
                  <td>Mathematics</td>
                  <td>I, A</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/student-details"
                        className="avatar avatar-md"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/students/student-10.jpg`}
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <p className="text-dark mb-0">
                          <Link to="/student-details">Janet</Link>
                        </p>
                        <span className="text-muted">Teacher</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Link to="/schedule-classes" className="fw-medium">
                        <i className="ti ti-edit me-1" />
                        Reschedule
                      </Link>
                      <a href="#" className="link-primary">
                        <i className="ti ti-share-3 me-1" />
                        Share
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-info-transparent flex-shrink-0 me-2">
                        <i className="ti ti-clock fs-16" />
                      </span>
                      <span>10:00 AM - 10:45 AM</span>
                    </div>
                  </td>
                  <td>Science</td>
                  <td>II, B</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/student-details"
                        className="avatar avatar-md"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/students/student-11.jpg`}
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <p className="text-dark mb-0">
                          <Link to="/staff-details">Joann</Link>
                        </p>
                        <span className="text-muted">Teacher</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Link to="/schedule-classes" className="fw-medium">
                        <i className="ti ti-edit me-1" />
                        Reschedule
                      </Link>
                      <a href="#" className="link-primary">
                        <i className="ti ti-share-3 me-1" />
                        Share
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-success-transparent flex-shrink-0 me-2">
                        <i className="ti ti-clock fs-16" />
                      </span>
                      <span>11:00 AM - 11:45 AM</span>
                    </div>
                  </td>
                  <td>English</td>
                  <td>III, C</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/student-details"
                        className="avatar avatar-md"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/students/student-12.jpg`}
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <p className="text-dark mb-0">
                          <Link to="/student-details">Kathleen</Link>
                        </p>
                        <span className="text-muted">Teacher</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Link to="/schedule-classes" className="fw-medium">
                        <i className="ti ti-edit me-1" />
                        Reschedule
                      </Link>
                      <a href="#" className="link-primary">
                        <i className="ti ti-share-3 me-1" />
                        Share
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-warning-transparent flex-shrink-0 me-2">
                        <i className="ti ti-clock fs-16" />
                      </span>
                      <span>12:00 PM - 12:45 PM</span>
                    </div>
                  </td>
                  <td>History</td>
                  <td>IV, A</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/student-details"
                        className="avatar avatar-md"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/students/student-10.jpg`}
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <p className="text-dark mb-0">
                          <Link to="/student-details">Gifford</Link>
                        </p>
                        <span className="text-muted">Teacher</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Link to="/schedule-classes" className="fw-medium">
                        <i className="ti ti-edit me-1" />
                        Reschedule
                      </Link>
                      <a href="#" className="link-primary">
                        <i className="ti ti-share-3 me-1" />
                        Share
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-danger-transparent flex-shrink-0 me-2">
                        <i className="ti ti-clock fs-16" />
                      </span>
                      <span>01:00 PM - 01:45 PM</span>
                    </div>
                  </td>
                  <td>Geography</td>
                  <td>V, B</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/student-details"
                        className="avatar avatar-md"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/students/student-11.jpg`}
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <p className="text-dark mb-0">
                          <Link to="/student-details">Lisa</Link>
                        </p>
                        <span className="text-muted">Teacher</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Link to="/schedule-classes" className="fw-medium">
                        <i className="ti ti-edit me-1" />
                        Reschedule
                      </Link>
                      <a href="#" className="link-primary">
                        <i className="ti ti-share-3 me-1" />
                        Share
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Class Schedule */}
  {/* Leave Status */}
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4 className="card-title">Leave Status</h4>
          <div className="dropdown">
            <button
              type="button"
              className="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-2" />
              This Month
            </button>
            <ul className="dropdown-menu mt-2 p-3">
              <li>
                <button type="button" className="dropdown-item rounded-1">
                  This Month
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item rounded-1">
                  This Year
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item rounded-1">
                  Last Week
                </button>
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
          <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center mb-2 mb-sm-0">
              <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                <i className="ti ti-brand-socket-io" />
              </div>
              <div>
                <h6 className="mb-1">Not Well</h6>
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
  </div>
</div>
  )
}

export default TDashboard
