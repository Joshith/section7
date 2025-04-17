import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lab7.css"; // Import CSS file

const Lab7 = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/colors?page=1&per_page=6") // Fetch API
      .then((res) => {
        setColors(res.data.data); // Update state with API data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>Color List</h2>

      {loading ? (
        <p className="loading">Loading colors...</p>
      ) : (
        <table className="color-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Color</th>
              <th>Pantone Value</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((color, index) => (
              <tr
                key={color.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
                }}
              >
                <td style={{ backgroundColor: color.color, color: "#fff" }}>
                  {color.id}
                </td>
                <td style={{ backgroundColor: color.color, color: "#fff" }}>
                  {color.name}
                </td>
                <td style={{ backgroundColor: color.color, color: "#fff" }}>
                  {color.year}
                </td>
                <td style={{ backgroundColor: color.color, color: "#fff" }}>
                  {color.color}
                </td>
                <td style={{ backgroundColor: color.color, color: "#fff" }}>
                  {color.pantone_value}
                </td>
                <td>
                  <div
                    className="color-box"
                    style={{ backgroundColor: color.color }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Lab7;