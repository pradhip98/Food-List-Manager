import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
 
</nav>
 <Outlet />
 </>
  )
}

export default Layout