import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from '../../../../datatablesource';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./TableClient.scss";
function TableClient() {
    const [client, setClient] = useState([]);

    useEffect(() => {
      const getClient = async () => {
        const res = await fetch("http://localhost:8800/api/client/info");
        const getdata = await res.json();
        setClient(getdata);
        // console.log(getdata);
      };
   
      getClient();
    },[]);
    const actionColumn = [
        {
          field: "action",
          headerName: "Действия",
          width: 90,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to={`/users/${params.id}`} style={{ textDecoration: "none" }}>
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
        Список клиентов
        <Link to="/users/new" className="link">
            Добавить
        </Link>
    </div>
    <div style={{ height: 650, width: 1000 }}>
      <DataGrid rows={client} columns={userColumns.concat(actionColumn)} 
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection />
    </div>
    </div>
  )
}

export default TableClient