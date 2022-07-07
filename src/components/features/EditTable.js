import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getTableById } from '../../redux/tablesRedux';
import TableForm from './TableForm';

const EditTable = () => {
  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));

  if (!tableData) return <Navigate to="/" />;

  return (
    <TableForm
      actionText="Update"
      id={tableData.id}
      status={tableData.status}
      people={tableData.people}
      maxPeople={tableData.maxPeople}
      bill={tableData.bill}
      tableNumber={tableData.tableNumber}
    />
  );
};

export default EditTable;
