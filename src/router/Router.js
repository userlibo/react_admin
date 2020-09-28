import React,{useState} from 'react'
// import { HashRouter, Router } from 'react-router-dom'
// import { Switch } from 'antd'
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Login from "../pages/login/Login"
import Admin from "../pages/admin/Admin"
export default function()
{
 return (
     <React.Fragment>
         <Router>
             <Switch>
             <Route path="/login" exact component={Login}></Route>
             <Route path="/" exact component={Admin}></Route>
             </Switch>
         </Router>
     </React.Fragment>
)
}