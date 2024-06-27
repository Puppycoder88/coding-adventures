import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SaleOrderModal = ({ show, onHide, order, isReadOnly }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (order) {
      setName(order.name);
      setDate(order.date);
    } else {
      setName('');
      setDate('');
    }
  }, [order]);

  const handleSave = () => {
    // Handle save logic
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{order ? 'Edit Sale Order' : 'Create Sale Order'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // readOnly={isReadOnly}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              // readOnly={isReadOnly}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {!isReadOnly && (
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SaleOrderModal;
