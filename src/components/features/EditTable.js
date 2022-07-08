import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getTableById, updateTableRequest } from '../../redux/tablesRedux';
import TableForm from './TableForm';

const EditTable = () => {
  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (table) => {
    dispatch(updateTableRequest(table));
    navigate('/');
  };

  if (!tableData) return <Navigate to="/" />;

  return (
    <TableForm
      action={handleSubmit}
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
