import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'



const AdminDashBoard=()=> {

    const {user:{name,email,role}}=isAuthenticated()
    const adminLeftSide=()=>{
        return (
            <div className="card">
               <h4 className="card-header bg-dark text-white">Admin navigation</h4>
               <ul className="list-group">
                   <li className="list-group-item">
                       <Link className="nav-link text-info" to="/admin/create/categories">
                            Create categories
                       </Link>
                   </li>
                   <li className="list-group-item">
                       <Link className="nav-link text-info" to="/admin/manage/categories">
                            Manage categories
                       </Link>
                   </li>
                   <li className="list-group-item">
                       <Link className="nav-link text-info" to="/admin/create/product">
                            Create product
                       </Link>
                   </li>
                   <li className="list-group-item">
                       <Link className="nav-link text-info" to="/admin/orders">
                            Manage orders
                       </Link>
                   </li>
                   <li className="list-group-item">
                       <Link className="nav-link text-info" to="/admin/products">
                            Manage products
                       </Link>
                   </li>

               </ul>
            </div>   
        )

    }

   const adminRightSide=()=>{
       return(
          <div className="card mb-4">
             <h4 className="card-header">Admin info</h4>
             <ul className="list-group">
               <li className="list-group-item">
                    <span className="badge badge-success mr-2">Name:</span>  {name}
               </li>
               <li className="list-group-item">
                    <span className="badge badge-success mr-2">email:  </span> {email}
               </li>
             </ul>
          </div>   
       )
       }


    return (
       <Base title="Admin page" description="manage all your products here" className="container bg-success p-4">
         <div className="row">
              <div className="col-3">{adminLeftSide()}</div>
              <div className="col-9">{adminRightSide()}</div>
              
         </div>
        
        
        
       </Base>
    )
}

export default AdminDashBoard