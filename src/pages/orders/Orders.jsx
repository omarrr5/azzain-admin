import OrdersDataTable from '../../components/dataTable/OrdersDataTable';
import './orders.scss';

function Orders() {
  return (
    <div className='orders'>
      <div className="info">
        <h1>Orders</h1>
      </div>
      <OrdersDataTable/>
    </div>
  )
}

export default Orders