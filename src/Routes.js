import React, { Component } from 'react'
import {Switch,Link,Route,BrowserRouter} from "react-router-dom"
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import ManageCategory from './admin/ManageCategory'





export class Routes extends Component {
    render() {
        return(
           <BrowserRouter>
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/signup" exact component={Signup}/>
              <Route path="/signin" exact component={Signin}/>
              <PrivateRoute  path="/user/dashboard" exact component={UserDashBoard}/>
              <AdminRoute  path="/admin/dashboard" exact component={AdminDashBoard}/>
              <AdminRoute  path="/admin/create/categories" exact component={AddCategory}/>
              <AdminRoute  path="/admin/create/product" exact component={AddProduct}/>
              <AdminRoute  path="/admin/manage/categories" exact component={ManageCategory}/>
              </Switch>
           </BrowserRouter>
        )
    }
}

export default Routes
