import React from 'react';
import { Table, Button } from 'react-bootstrap';

const SalesOrderTable = ({ status, onEditOrder }) => {
  const salesOrders = [
    { id: 220, name: 'Ram', price: '12', date: '2024-05-07' },
    { id: 248, name: 'New Product', price: '54', date: '2024-05-24'},
    {id: 247, name: 'New Product', price: '32', date: '2024-05-24'},
    {id: 246, name: 'New Product', price: '23', date: '2024-05-24'}
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Price</th>
          <th>Last Modified</th>
          <th>Edit/View</th>
        </tr>
      </thead>
      <tbody>
        {salesOrders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.date}</td>
            <td>
              <Button variant="outline-secondary" onClick={() => onEditOrder(order)}>...</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SalesOrderTable;
