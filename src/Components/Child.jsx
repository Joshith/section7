import { useState } from 'react';

export default function Child({ changeUser, a, b }) {
  const [inputName, setInputName] = useState("");
  const [inputSalary, setInputSalary] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const changeFun = () => {
    changeUser(inputName, inputSalary, inputLocation);
  };

  return (
    <div className="child-container">
      <h3>Update User Information</h3>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                style={{ backgroundColor: '#ff' }}
              />
            </td>
          </tr>
          <tr>
            <th>Salary:</th>
            <td>
              <input
                type="text"
                value={inputSalary}
                onChange={(e) => setInputSalary(e.target.value)}
                style={{ backgroundColor: '#ff' }}
              />
            </td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>
              <input
                type="text"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
                style={{ backgroundColor: '#ff' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={changeFun} style={{ backgroundColor: '#4CAF50', color: 'Black' }}>
        Update User
      </button>
      <br />
      <p>
        Props Received: {b} - {a} = {b - a}
      </p>
    </div>
  );
}