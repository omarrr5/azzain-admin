import React from 'react'
import { Box, Chip, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './datatable.scss';

const handleDelete = (id) => {
    // delete the item
    // mutation.mutate(id)
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'orderNo',
      headerName: 'Order Number',
      width: 150,
    },
    {
        field: 'product',
        headerName: 'Product Sold',
        width: 200
    },
    {
        field: 'qty',
        headerName: 'Quantity'
    },
    {
        field: 'price',
        headerName: 'Price per pc',
        width: 100
    },
    {
        field: 'total',
        headerName: 'Grand Total'
    },
    {
        field: 'payment',
        headerName: 'Payment Method',
        width: 150
    },
    {
        field: 'status',
        headerName: 'Payment Status',
        width: 150,
        renderCell: (params) => (
            <Chip
              label={params.value === 'yes' ? 'Paid' : 'Not Paid'}
              style={{ backgroundColor: params.value === 'yes' ? '#4CAF50' : '#f44336', color: '#ffffff' }}
            />
          )
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200
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
    { id: 1, orderNo: 'AZ2024', product: 'Black And white Paper', qty: '3' , price: '0.15', total: '0.75', payment: 'Duit Now' , createdAt: '2024-03-08 14:20:22', status: 'yes' },
    { id: 2, orderNo: 'AZ2025', product: 'Coloured Paper', qty: '4', price: '0.30', total: '1.20', payment: 'Grab' , createdAt: '2024-03-08 14:20:22', status: 'No' },
    { id: 1, orderNo: 'AZ2024', product: 'Black And white Paper', qty: '3' , price: '0.15', total: '0.75', payment: 'Duit Now' , createdAt: '2024-03-08 14:20:22', status: 'yes' },
    { id: 2, orderNo: 'AZ2025', product: 'Coloured Paper', qty: '4', price: '0.30', total: '1.20', payment: 'Grab' , createdAt: '2024-03-08 14:20:22', status: 'No' },
    { id: 1, orderNo: 'AZ2024', product: 'Black And white Paper', qty: '3' , price: '0.15', total: '0.75', payment: 'Duit Now' , createdAt: '2024-03-08 14:20:22', status: 'yes' },
    { id: 2, orderNo: 'AZ2025', product: 'Coloured Paper', qty: '4', price: '0.30', total: '1.20', payment: 'Grab' , createdAt: '2024-03-08 14:20:22', status: 'No' }

  ];
  

function OrdersDataTable() {
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
  )
}

export default OrdersDataTable