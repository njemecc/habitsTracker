import React, { Fragment } from 'react'
import styles from  './NavBar.module.css'

//router
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
//icons



const NavBar = () => {


  return (
    <Fragment>
    <div className={styles['navbar-container']}>
        <div className={styles['navbar-name']}>
            <img src="https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?w=2000" />
            <p>Branislav Njemec</p>
        </div>

        <div className={styles['navbar-links-container']}>
            <div className={styles['navbar-item']}><div> <NavLink className={styles['navlink']} style={({ isActive }) => {return {backgroundColor: isActive ? 'blue' : "white" , color: isActive ? "white" : "blue" }}} to="/">My Habbits</NavLink> </div></div>
            <div className={styles['navbar-item']}><div><NavLink className={styles['navlink']} style={({ isActive }) => {return {backgroundColor: isActive ? 'blue' : "white" , color: isActive ? "white" : "blue" }}} to="/manage-habbits">Manage Habbits</NavLink></div></div>

        </div>
      
    </div>

    <div><Outlet/></div>
    </Fragment>
  )
}

export default NavBar
