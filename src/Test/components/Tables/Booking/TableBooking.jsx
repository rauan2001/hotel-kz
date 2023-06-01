import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import axios from "axios";
import { BookingColumns } from '../../../../datatablesource';
function TableBooking() {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
      const getBooking = async () => {
        const res = await fetch("http://localhost:8800/api/booking/");
        const getdata = await res.json();
        setBooking(getdata);
        // console.log(getdata);
      };
      getBooking();
    },[]);

    const exportTableToExcel = () => {
      axios
        .get("http://localhost:8800/api/booking/")
        .then((res) => {
          const fileName = "bookings.xlsx";
          const wb = XLSX.utils.book_new();
          const ws = XLSX.utils.json_to_sheet(res.data);
          XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
          const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
          const buffer = new ArrayBuffer(wbout.length);
          const view = new Uint8Array(buffer);
          for (let i = 0; i < wbout.length; i++) {
            view[i] = wbout.charCodeAt(i) & 0xff;
          }
          const blob = new Blob([buffer], { type: "application/octet-stream" });
          saveAs(blob, fileName);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const actionColumn = [
        {
          field: "action",
          headerName: "Действия",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to={`/bookings/${params.id}`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">Просмотр</div>
                </Link>
              </div>
            );
          },
        },
      ];
  return (
    <div className='datatable-client'>
    <div className="datatableTitle">
        Список бронирований
        <Link onClick={exportTableToExcel} className="link">
            Excel
        </Link>
        <Link to="/bookings/new" className="link">
            Добавить
        </Link>
    </div>
    <div style={{ height: 650, width: 1200 }}>
      <DataGrid rows={booking} columns={BookingColumns.concat(actionColumn)} 
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection 
        getRowId={(row) => row.idBooking}/>
    </div>
    </div>
  )
}

export default TableBooking;