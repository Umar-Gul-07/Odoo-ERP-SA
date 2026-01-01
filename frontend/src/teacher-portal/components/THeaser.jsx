import React from 'react'

const THeader = () => {
    return (
        <div>
            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                <div className="my-auto mb-2">
                    <h3 className="page-title mb-1">Teacher Dashboard</h3>
                    <nav>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="index.html">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Teacher Dashboard
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default THeader
