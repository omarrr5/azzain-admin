import './Products.scss';
import ProductsTable from "../../components/productsTable/ProductsTable";

function Products() {
  return (
    <div className='products'>
      <div className="info">
      <h1>Products</h1>
      </div>
      <ProductsTable/>
    </div>
  )
}

export default Products