import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUpMessage = ({show, handleClose, title, message}) => {
  const toggle = () => handleClose();
  return (
    <div>
      <Modal isOpen={show} toggle={toggle} className="bg-white">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className='ml-3 '>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Okay</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUpMessage;