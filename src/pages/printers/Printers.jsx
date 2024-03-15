import React, { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./printers.scss";
import Add from "../../components/add/Add";
import { userRows } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: 'name',
    headerName: 'Printer Name',
    width: 300,
  },
  {
    field: 'assoc user',
    headerName: 'Associated User Name',
    width: 200
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 100
  },
  {
    field: 'created at',
    headerName: 'Created At',
    width: 200
  }
];

const Printers = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="printers">
      <div className="info">
        <h1>Printers</h1>
        <button onClick={() => setOpen(true)}>Add New</button>
      </div>
      <DataTable slug="printers" columns={columns} rows={userRows} />
      {open && <Add slug="printer" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Printers;
