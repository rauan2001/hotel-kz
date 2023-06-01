import { useState, useEffect } from "react";

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstname",
      headerName: "Firstname",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "lastname",
      headerName: "Lastname",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "number",
      headerName: "Number",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];


  export const ClientRows= () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
      const getClient = async () => {
        const res = await fetch("http://localhost:8800/api/client/");
        const getdata = await res.json();
        setClient(getdata);
        // console.log(getdata);
      };
  
      getClient();
    },[]);
  }