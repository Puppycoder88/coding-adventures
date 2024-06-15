import React, { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import DarkModeToggle from './components/DarkModeToggle';
import SalesOrderTable from './components/SalesOrderTable';
import SaleOrderModal from './components/SaleOrderModal';

const HomePage = () => {
  const [key, setKey] = useState('active');
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const handleCreateOrder = () => {
    setEditingOrder(null);
    setShowModal(true);
  };

  const handleEditOrder = (order) => {
    setEditingOrder(order);
    setShowModal(true);
  };

  return (
    <div>
      <DarkModeToggle />
      <h1>Sales Order Management</h1>
      <Button variant="primary" onClick={handleCreateOrder}>+ Sale Order</Button>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="my-3">
        <Tab eventKey="active" title="Active Sale Orders">
          <SalesOrderTable status="active" onEditOrder={handleEditOrder} />
        </Tab>
        <Tab eventKey="completed" title="Completed Sale Orders">
          <SalesOrderTable status="completed" onEditOrder={handleEditOrder} />
        </Tab>
      </Tabs>
      <SaleOrderModal
        show={showModal}
        onHide={() => setShowModal(false)}
        order={editingOrder}
        isReadOnly={key === 'completed'}
      />
    </div>
  );
};

export default HomePage;
