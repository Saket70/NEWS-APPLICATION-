import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Nav extends Component {
 
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary"

          style={{
            height: "100px",
           
            margin: "0px"



          }}



        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"
              style={{
                fontSize: "2rem", fontFamily: "monospace"
                ,
                color: "#ff6c00"
              }}



            >NEWS-LAUNDRY</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home" style={{ color: "#ff6c00" }}>Home</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{ fontSize:"25px", color: "#ff6c00" }} to="/general" >general</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{fontSize:"25px", color: "#ff6c00" }} to="/entertainment" >entertainment</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{ fontSize:"25px", color: "white" }} to="/business" >business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{ color: "white" ,fontSize:"25px"}} to="/sports" >sports</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{ color: "green",fontSize:"25px" }} to="/technology" >technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{ color: "green",fontSize:"25px" }} to="/science" >science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" style={{ color: "green",fontSize:"25px" }} to="/health" >health</Link>
                </li>
                </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"200px", height:"50px"}} />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
