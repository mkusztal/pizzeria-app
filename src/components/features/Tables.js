import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tables = ({ status, id }) => {
  return (
    <Row>
      <Row className="align-items-end mb-3 pb-3 border-bottom" key={id}>
        <Col className="col-2 d-flex align-items-end justify-content-between">
          <h2 className="mb-0">Table {id}</h2>
        </Col>
        <Col className="col-4">
          <p className="mb-0 pl-3">
            <b>Status: </b>
            {status}
          </p>
        </Col>
        <Col className="col-6 d-flex justify-content-end">
          <Link to={'/tables/' + id}>
            <Button variant="primary" size="sm">
              Show more
            </Button>
          </Link>
        </Col>
      </Row>
    </Row>
  );
};

export default Tables;
