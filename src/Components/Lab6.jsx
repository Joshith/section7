import React from 'react';
import './Lab6.css';
import ResponsiveAppBar from '../AppBar.jsx'; // Assuming AppBar.jsx is in the parent directory

export default function Lab6() {
  function Mover() {
    const loginElement = document.getElementById("login");
    if (loginElement) {
      loginElement.className = 'Mover-Login';
    }
  }

  function Mleave() {
    const loginElement = document.getElementById("login");
    if (loginElement) {
      loginElement.className = 'login-form';
    }
  }

  return (
    <div className='parent1'>
      <center>
        <ResponsiveAppBar />
        <div
          className='login-form'
          onMouseOver={Mover}
          onMouseLeave={Mleave}
          id="login"
        >
          <table>
            <tbody>
              <tr>
                <td colSpan={2} style={{ backgroundColor: 'yellowgreen', textAlign: 'center' }}>
                  Login Page
                </td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    className='form-control'
                    name="t1"
                    id="un"
                  />
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    className='form-control'
                    name="t2"
                    id="pwd"
                  />
                </td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>
                  <select className="form-control" id="sel1">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: 'center' }}>
                  <button className="btn btn-success"> Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}