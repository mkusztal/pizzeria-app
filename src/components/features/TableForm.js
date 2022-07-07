import { Col, Form, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getStatuses } from '../../redux/statusReducer';

const TableForm = ({ action, actionText, ...props }) => {
  const statuses = useSelector(getStatuses);
  const id = props.id;
  const [status, setStatus] = useState(props.status || '');
  const [people, setPeople] = useState(props.people || '');
  const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
  const [bill, setBill] = useState(props.bill || '');

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    action({ status, id, people, maxPeople, bill });
  };

  
  if (parseInt(maxPeople) > 10) setMaxPeople('10');
  if (parseInt(maxPeople) < 0) setMaxPeople('0');
  if (parseInt(people) > maxPeople) setPeople(maxPeople);
  if (parseInt(people) < 0) setPeople('0');
  if (parseInt(bill) < 0) setBill('0');

  return (
    <Row>
      <h1 className="my-5">Table {props.id}</h1>
      <Form onSubmit={validate(handleSubmit)}>
        <h3 className="pb-3">{actionText}</h3>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Status: </Form.Label>
          <Col>
            <Form.Select
              {...register('status', { required: true })}
              type="select"
              placeholder="Select category"
              value={status ? status : '1'}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled value="1">
                Select status...
              </option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Row className="mb-3">
            <Col md={2}>People: </Col>
            <Form.Control
              {...register('people', { required: true })}
              className="pl-3"
              style={{ width: '50px', marginLeft: '10px', marginRight: '10px' }}
              type="number"
              value={status === 'Busy' ? people : 0}
              onChange={(e) => setPeople(e.target.value)}
            />
            /
            <Form.Control
              {...register('maxPeople', { required: true })}
              style={{ width: '50px', marginLeft: '10px' }}
              type="number"
              onChange={(e) => setMaxPeople(e.target.value)}
              value={maxPeople}
            />
            {errors.people && (
              <small className="d-block form-text text-danger mt-2">
                This field is required
              </small>
            )}
            {errors.maxPeople && (
              <small className="d-block form-text text-danger mt-2">
                This field is required
              </small>
            )}
          </Row>
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Bill:</Form.Label>
          <Col>
            <Form.Control
              {...register('bill', { required: true })}
              type="number"
              value={status === 'Busy' ? bill : 0}
              onChange={(e) => setBill(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button className="mt-3" as="input" type="submit" value={actionText} />{' '}
      </Form>
    </Row>
  );
};

export default TableForm;
