import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getTableById, updateTableRequest } from '../../redux/tablesRedux';
import TableForm from './TableForm';

const EditTable = () => {
  const dispatch = useDispatch();
  const { tabledId } = useParams;
  const tableData = useSelector((state) => getTableById(state, tabledId));

  let navigate = useNavigate();

  const handleSubmit = (table) => {
    dispatch(updateTableRequest(...table));
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
