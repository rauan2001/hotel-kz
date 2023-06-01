import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Datatable = () => {
 // const [data, setData] = useState(ClientRows);
 
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

 const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8800/api/client/`);
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Список клиентов
        <Link to="/users/new" className="link">
          Добавить
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={client}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;