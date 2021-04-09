import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import {createCategory} from './helper/adminapicall'



const AddCategory=()=> {

   const [name,setName]=useState("initialState")
   const [error,setError]=useState(false)
   const [success,setSuccess]=useState(false)

   const {user,token}=isAuthenticated()

   const goBack=()=>{
       return(
           <div className="mt-3">
              <Link className="btn btn-small btn-dark" to="/admin/dashboard">Admin Home</Link>
           </div>
       )
   }
   const handleChange=(e)=>{
      setError("")
      setName(e.target.value)
   }

   const onSubmit=(event)=>{
       event.preventDefault()
       setError("")
       setSuccess("false")

       createCategory(user._id,token,{name})
       .then(data=>{
           if(data?.error){
               setError(true)
           }
           else{
               setError("")
               setSuccess(true)
               setName("")
           }
       })
   }

   const successMessage=()=>{
       if(success){
           return <h4 className="text-success" >category created succesfully</h4>
       }
   }

   const warningMessage=()=>{
       if(error){
           return <h4 className="text-red">oops!! we could not create category for you</h4>
       }
   }

   const myCategoryform=()=>{
         return(
        <form>
            <div className="form-group">
                <p className="lead"> <b>Enter the category</b></p>
                <input
                className="form-control my-3"
                type="text"
                autoFocus
                onChange={handleChange}
                value={name}
                />
                <button className="btn btn-small btn-info" onClick={onSubmit}>Create Category</button>
            </div>
        </form>
         )
   }

    return (
        <Base
         title="Creating new category"
         className="container bg-info p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-2">
                    {warningMessage()}
                    {successMessage()}
                    {myCategoryform()}
                    {goBack()}
                    
                    
                </div>
            </div>
        </Base>
    )
}

export default AddCategory
