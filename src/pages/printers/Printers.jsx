import DataTable from '../../components/dataTable/DataTable';
import './printers.scss';



function Printers() {
  return (  
    <div className='printers'>
      <div className="info">
        <h1>Printers</h1>
        <button>Add New</button>
      </div>
      <DataTable/>
    </div>
  )
}

export default Printers