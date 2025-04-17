import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Lab2 from './Components/Lab2'
import Lab3 from './Components/Lab3'
import Lab4 from './Components/Lab4'
import Lab5 from './Components/Lab5'
import Lab6 from './Components/Lab6'
import Lab7 from './Components/Lab7'
import Lab8 from './Components/Lab8'
import Lab9 from './Components/Lab9'
import Lab12 from './Components/Lab12'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Lab Experiments</h1>
      <table border="2" width="70%">
        <tr>
          <td>S.No</td>
          <td>Lab</td>
          <td>Description</td>
        </tr>
        <tr>
          <td>2</td>
          <td><Link to="/lab2">Lab2</Link></td>
          <td>Allignment and css</td>
        </tr>
        <tr>
          <td>3</td>
          <td><Link to="/lab3">Lab3</Link></td>
          <td>Dom-Tree,media class,flex</td>
        </tr>
        <tr>
          <td>4</td>
          <td><Link to="/lab4">Lab4</Link></td>
          <td>Description</td>
        </tr>
        <tr>
          <td>5</td>
          <td><Link to="/lab5">Lab5</Link></td>
          <td>Description</td>
        </tr><tr>
          <td>6</td>
          <td><Link to="/lab6">Lab6</Link></td>
          <td>Description</td>
        </tr>
        <tr>
          <td>7</td>
          <td><Link to="/lab7">Lab7</Link></td>
          <td>Description</td>
        </tr>
        <tr>
          <td>8</td>
          <td><Link to="/lab8">Lab8</Link></td>
          <td>Description</td>
        </tr>
        <tr>
          <td>9</td>
          <td><Link to="/lab9">Lab9</Link></td>
          <td>Description</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="/lab12">Lab12</Link></td>
          <td>Description</td>
        </tr>
      </table>
    </>
  )
}

export default App