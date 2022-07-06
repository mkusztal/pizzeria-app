import { Col, Row } from 'react-bootstrap'; //, Button
//import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTables } from '../../redux/tablesRedux';
import Tables from '../features/Tables';

const Home = () => {
  const tables = useSelector(getTables);

  return (
    <div>
      <Row>
        <Col>
          <h1 className="pb-5">All Tables</h1>
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
