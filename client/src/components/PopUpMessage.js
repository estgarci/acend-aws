import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUpMessage = ({show, handleClose}) => {
  const toggle = () => handleClose();
  return (
    <div>
      <Modal isOpen={show} toggle={toggle} className="bg-white">
        <ModalHeader toggle={toggle}>Please sign in</ModalHeader>
        <ModalBody className='ml-3 '>
          Please create an account and sing in to favorite a flight!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Okay</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUpMessage;