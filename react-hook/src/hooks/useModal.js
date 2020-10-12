import React, { useState, useEffect } from 'react';

const bgStyle = { width: '100%', height: '100%', position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.8)', top: '0', left: '0' }
const contentStyle = { backgroundColor: '#FFF', width: '500px', height: '700px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

function Modal({ visible, closeModal }) {
  const handleKeydownESC = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeydownESC)
    return () => {
      window.removeEventListener('keydown', handleKeydownESC)
    }
  }, [])

  const handleClickBackground = (e) => {
    if (e.target.className === 'background') {
      closeModal();
    }
  }

  if (visible) {
    return (
      <div className="background" style={bgStyle} onClick={handleClickBackground}>
        <div style={contentStyle}>
  
        </div>
      </div>
    )
  }
  return null;
}


function useModal() {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }
  
  return {
    visible,
    openModal,
    closeModal,
    Modal: <Modal visible={visible} closeModal={closeModal} />
  }
}

export default useModal;