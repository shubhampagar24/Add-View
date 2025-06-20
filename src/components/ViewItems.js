
// components/ViewItems.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Carousel, Button } from 'react-bootstrap';

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleShowDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div>
      <h2>View Items</h2>
      {items.length === 0 ? (
        <div className="alert alert-info">No items added to your cart yet.</div>
      ) : (
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100" onClick={() => handleShowDetails(item)} style={{ cursor: 'pointer' }}>
                <img src={item.coverImage} className="card-img-top" alt="Cover" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); handleDelete(index); }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Type:</strong> {selectedItem?.type}</p>
          <p><strong>Description:</strong> {selectedItem?.description}</p>
          {selectedItem?.additionalImages?.length > 0 && (
            <Carousel>
              {selectedItem.additionalImages.map((img, i) => (
                <Carousel.Item key={i}>
                  <img src={img} className="d-block w-100" alt={`Slide ${i}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => alert('Enquiry sent to seller@example.com')}>Enquire</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewItems;
