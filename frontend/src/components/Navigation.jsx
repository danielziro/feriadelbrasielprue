import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Feria del Brasier & Solo-Kukos
          </Link>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="navbar-brand" to="/create">
                  Crear Prenda
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/Prendas">
                  Prendas
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
