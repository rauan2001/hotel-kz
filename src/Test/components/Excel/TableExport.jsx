import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import axios from 'axios';
class TableExport extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ["Name", "Age", "Gender"],
        ["John Doe", 30, "Male"],
        ["Jane Doe", 25, "Female"],
        ["Bob Smith", 45, "Male"],
      ],
      fileName: "myTable.xlsx"
    }
  }

  exportTableToExcel = () => {
    axios.get('http://localhost:8800/api/booking/') 
      .then(res => {
        const { data, fileName } = this.state;
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(res.data);
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        const buffer = new ArrayBuffer(wbout.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < wbout.length; i++) {
          view[i] = wbout.charCodeAt(i) & 0xFF;
        }
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        saveAs(blob, fileName);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row, index) => (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.exportTableToExcel}>Export to Excel</button>
      </div>
    );
  }
}

export default TableExport;
