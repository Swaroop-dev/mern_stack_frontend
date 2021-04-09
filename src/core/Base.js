import React from 'react'
import Menu from './menu'
import '../styles.css'

const Base=({
    title="My title",
    description="My description",
    className="bg-dark text-white p-4",
    children
})=>{
    return (
        <div>
            <Menu/>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-3 mb-0">
            <div className="container-fluid bg-success text-white text-center ">
                <h4>if you have any questions reach us at -----</h4>
                <button className="btn btn-sm btn-primary" >contact us</button>
            </div>
        </footer>
        </div>
    )
}

export default Base
