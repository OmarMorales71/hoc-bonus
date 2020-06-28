import React from 'react'
import { NavLink } from 'react-router-dom'

const TopBar = () => (
  <header className="main-header">
    <div className="topbar text-color">
      <div className="ed-grid m-grid-2">
        <NavLink to="/" activeClassName="activo" exact className="button--cta button--tiny s-center m-to-left">Proyecto React</NavLink>
        <div className="s-to-center m-to-right">
          <NavLink className="button--cta button--tiny " activeClassName="activo" exact to="/">Public</NavLink>
          <NavLink className="button--cta button--tiny" activeClassName="activo" to="/private">Private</NavLink>
        </div>
      </div>
    </div>
  </header>
)

export default TopBar;