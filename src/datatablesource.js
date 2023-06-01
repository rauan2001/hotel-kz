import { useState, useEffect } from "react";
import moment from 'moment';
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstname",
      headerName: "Имя",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.firstname}
          </div>
        );
      },
    },
    {
      field: "lastname",
      headerName: "Фамилия",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "number",
      headerName: "Номер телефона",
      width: 200,
    },
    {
      field: "status",
      headerName: "Статус",
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

  export const BookingColumns = [
    { field: "idBooking", headerName: "ID", width: 30 },
    {
      field: "firstname",
      headerName: "Имя",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.firstname}
          </div>
        );
      },
    },
    {
      field: "lastname",
      headerName: "Фамилия",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
  
    {
      field: "number_room",
      headerName: "Комната",
      width: 90,
    },
    {
      field: "parkingId",
      headerName: "Парковка",
      width: 90,
      valueFormatter: (params) => {
        return params.value === null ? "Нет" : params.value;
      },
    },

    {
      field: "baggage_int",
      headerName: "Гардероб",
      width: 90,
      valueFormatter: (params) => {
        return params.value === null ? "Нет" : params.value;
      },
    },
    {
      field: "checkin",
      headerName: "Дата въезда",
      width: 150,
      valueFormatter: (params) => moment(params.value).format("YYYY-MM-DD"),
    },
    {
      field: "checkout",
      headerName: "Дата выезда",
      width: 150,
      valueFormatter: (params) => moment(params.value).format("YYYY-MM-DD"),
    },
  ];
