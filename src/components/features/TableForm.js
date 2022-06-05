import { Col, Form, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getStatuses } from '../../redux/statusReducer';

const TableForm = ({ action, actionText, ...props }) => {
  const id = props.id;
  //const dispatch = useDispatch();
  const statuses = useSelector(getStatuses);

  const [status, setStatus] = useState(props.status || '');
  const [people, setPeople] = useState(props.people || '');
  const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
  const [bill, setBill] = useState(props.bill || '');

  const handleSubmit = () => {
    action({ status, id, people, maxPeople, bill });
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  if (people > maxPeople) {
    setPeople(maxPeople);
  }
  if (maxPeople > 10) {
    setMaxPeople(10);
  }

  return (
    <Row>
      <h1 className="my-5">Table {props.id}</h1>
      <Form onSubmit={validate(handleSubmit)}>
        <h3 className="pb-3">{actionText}</h3>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Status: </Form.Label>
          <Col>
            <Form.Control
              {...register('category', { required: true })}
              type="select"
              placeholder="Select category"
              value={status ? status : '1'}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled value="1">
                Select category...
              </option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>People: </Form.Label>
          <Col>
            <Form.Control
              {...register('people', { required: true })}
              type="number"
              value={status === 'Busy' ? people : 0}
              onChange={(e) => setPeople(e.target.value)}
            />
            {errors.title && (
              <small className="d-block form-text text-danger mt-2">
                The number of people is required
              </small>
            )}
          </Col>
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Col>
            <Form.Control
              {...register('maxPeople', { required: true })}
              type="number"
              value={maxPeople}
              onChange={(e) => setMaxPeople(e.target.value)}
            />
          </Col>
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
