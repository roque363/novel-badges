import React from 'react'
import ReactDOM from 'react-dom';
import './modalFoto.scss';

function ModalFoto (props) {
  const { img, alt } = props
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal-foto">
      <div className="modal-foto__container">
        <button className="close" onClick={props.onClose} type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="img-container">
          <img src={img} alt={alt}/>
        </div>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default ModalFoto
