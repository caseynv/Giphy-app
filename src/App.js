import './App.css';
import React, { useState } from 'react';

import Input from './Components/Input';
import Modal from 'react-modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Input />
      <button onClick={
        () => setModalIsOpen(true)
      }>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={
        () => setModalIsOpen(false)
      }>
        <h2>Modal Title</h2>
        <h2>Modal Body</h2>
        <button onClick={
        () => setModalIsOpen(false)
      }>close</button>
      </Modal>
    </>
  );
}

export default App;
