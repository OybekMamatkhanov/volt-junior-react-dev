import React from 'react';
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button';

function CustomModal({open, title, close, children}) {
  console.log(open)
    return (
        <Modal show={open} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;