import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTableById } from '../../redux/tablesRedux';
import TableForm from './TableForm';

const EditTable = () => {
  const dispatch = useDispatch();
  const { tabledId } = useParams;
  const tableData = useSelector((state) => getTableById(state, tabledId));

  let navigate = useNavigate();

  return <TableForm id={tableData.id} status={tableData.status} />;
};
