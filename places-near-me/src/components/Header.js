import React, { useRef, useState } from 'react'
import classes from './Header.module.css'

function Header() {
    const searchInput = useRef()

    const searchFormhandler = (event) => {
        event.preventDeafault()
        

    }


  return (
    <div className={classes.header}>
        <h1>Places Near Me</h1>
        <form onSubmit={searchFormhandler}>
            <label>Explore new places</label>
            <input ref={searchInput} placeholder='search'></input>
            <button type='submit'></button>
        </form>
    </div>
  )
}

export default Header