import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../core/Base'




export default function ManageCategory() {
    return (
        <Base title="Manage Categories" description="You can update and delete the categories">
             <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
        </Base>
    )
}
