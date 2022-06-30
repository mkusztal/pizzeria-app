import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTables } from '../../redux/tablesRedux';
import Tables from '../features/Tables';

const Home = () => {
  const tables = useSelector(getTables);

  return (
    <div>
      <Row>
        <Col>
          <h1 className="pb-5">All tables</h1>
        </Col>
        <Col className="d-flex flex-row-reverse p-2">
          <Link to="/tables/:tableId">
            <Button variant="outline-info">Add table</Button>{' '}
          </Link>
        </Col>
      </Row>
      <Row>
        {tables.map((table, index) => (
          <Tables
            key={index}
            id={table.id}
            number={table.tableNumber}
            status={table.status}
          />
        ))}
      </Row>
    </div>
  );
};

export default Home;
