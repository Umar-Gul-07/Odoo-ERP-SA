import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'
import Sidebar from './Sidebar'

function Base({ children }) {

    return (
        <>
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Base