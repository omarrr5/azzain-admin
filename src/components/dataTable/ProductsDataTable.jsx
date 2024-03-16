import React from 'react';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import '../dataTable/datatable.scss';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Product Name',
    width: 300,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100
  }
  ,
  {
    field: 'action',
    headerName: 'Action',
    renderCell: (params) => (
      <div className="action">
        <img
          src="/view.svg"
          alt=""
          style={{ cursor: 'pointer' }}
        />
      <div className="delete" onClick={() => handleDelete(params.row.id)}>
        <img src="/delete.svg" alt="" />
      </div>
    </div>
    ),
  }
];

const rows = [
  { id: 1, name: 'Black And White Page', price: '0.15' },
  { id: 2, name: 'Coloured Page', price: '0.30'}
];

const handleDelete = (id) => {
  // delete the item
  // mutation.mutate(id)
};

function ProductsDataTable() {
  return (
    <div className='dataTable'>
      <Box sx={{ height: 800, width: '100%' }}>
        <DataGrid
          className='dataGrid'
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: {
              showColumnSelector: false,
              toolbarButtonAlignment: 'left',
            },
          }}
          pageSizeOptions={[20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default ProductsDataTable;
