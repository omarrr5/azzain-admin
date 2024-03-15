import React from 'react';
import { Box, Chip } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './datatable.scss';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Printer Name',
    width: 300,
  },
  {
    field: 'assocUser',
    headerName: 'Associated User Name',
    width: 200
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 100
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    renderCell: (params) => (
      <Chip
        label={params.value === 'yes' ? 'Active' : 'Inactive'}
        style={{ backgroundColor: params.value === 'yes' ? '#4CAF50' : '#f44336', color: '#ffffff' }}
      />
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: (params) => (
      <div className="delete" onClick={() => handleDelete(params.row.id)}>
        <img src="/delete.svg" alt="" />
      </div>
    ),
  }
];

const rows = [
  { id: 1, name: 'PIXMA G4770', assocUser: 'omarrr5', location: 'Cyberjaya' , createdAt: '2024-03-08 14:20:22', status: 'yes' },
  { id: 2, name: 'HP Smart Tank 750 All-in-One Printer', assocUser: 'admin', location: 'Melaka' , createdAt: '2024-03-08 14:20:22', status: 'No' }
];

const handleDelete = (id) => {
  // delete the item
  // mutation.mutate(id)
};

function DataTable() {
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

export default DataTable;
