import { useState } from 'react';
import Child from './Child.jsx';

export default function Parent() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState();
  const [location, setLocation] = useState("");

  const changeUser = (n, s, l) => {
    setName(n);
    setSalary(s);
    setLocation(l);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <h3>User Information</h3>
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Salary:</td>
            <td><i className="fa fa-rupee"></i> {salary}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{location}</td>
          </tr>
        </tbody>
      </table>
      <br /><br /><br />
      <Child changeUser={changeUser} a={10} b={20} />
    </div>
  );
}