import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
   <nav className="navbar  navbar-dark" style={{background:"#061920"}}>
  <div className="container-fluid" style={{marginLeft:"34px" }}>
    <Link className="navbar-brand fs-3" to="/"  style={{fontFamily:"Dancing Script, cursive" ,}}>Book
      <img  style={{margin:"0px -19px"}}src="https://play-lh.googleusercontent.com/1llAcleLs0UDr5ysUl_C4aHM-vN70HGTy7gjlM78SLsPCOijj7oosBLQc26G2daqOg=w600-h300-pc0xffffff-pd" alt="Logo" width="80" height="40" className="d-inline-block align-text-top"/>
      Ticket
    </Link>
    <div className="collapse navbar-collapse fs-5" id="navbarNav">

    </div>
    <form className="d-flex" role="search">
        <input className="form-control me-2 px-3" type="search" placeholder="Search for Movies , Events and Shows" aria-label="Search" style={{width:"28vw" ,marginLeft:"-23%"}}/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    <button className="btn btn-outline-light my-2 my-sm-0  me-5" type="button">Login</button>

  </div>
</nav>

   
   </>
  )
}

export default Navbar