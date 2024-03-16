import { useState } from 'react';
import './Products.scss';
import ProductsDataTable from '../../components/dataTable/ProductsDataTable';
import Add from "../../components/add/Add";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: 'name',
    headerName: 'product Name',
    width: 300,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 200
  }
];



function Products() {
  const [open, setOpen] = useState(false);

  return (
    <div className='products'>
      <div className="info">
      <h1>Products</h1>
      <button onClick={() => setOpen(true)}>Add New</button>
      </div>
      <ProductsDataTable/>
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products