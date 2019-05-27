import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Junior Developer</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Programming Instructor</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Project Manager</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>QA</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}
export default Table;
