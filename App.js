import React, { useEffect, useState } from "react";
import data from "./Data/apiData.json"

function App() {
  // console.log(data[0].projects[0].name);
  return (
    <div className="a">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Skills</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr> */}
          {data.map((data) => (
            <tr>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.designation}</td>
            <td>{data.skills[0]}</td>
            </tr>
           
          ))}

      </tbody>
      </table>
    </div>
  );
}

export default App;
