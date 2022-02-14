import PropTypes from 'prop-types';
import { Modal, IconButton } from '@material-ui/core';

import { useResponsive } from 'hooks';
import { XIcon } from 'icons';
import { URL_IMAGE } from 'constants/variables';
import styles from './modalFoto.module.scss';

const ModalFoto = (props) => {
  const { open, handleClose, image, name } = props;
  const { isMobile } = useResponsive();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={styles.dialog}
      role="dialog"
      aria-labelledby="image-modal-label"
      aria-describedby="image-modal-description"
      aria-hidden="true"
      BackdropProps={{
        style: {
          backgroundColor: '#000',
          transitionProperty: 'opacity',
          opacity: '0.9',
        },
      }}>
      <div className={styles.root}>
        <div className={styles.header}>
          <h5 className={styles.title} id="imageModalLabel">
            {name}
          </h5>
          {!isMobile && (
            <IconButton
              className={styles.action}
              color="inherit"
              size="small"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}>
              <XIcon strokeWidth={3} />
            </IconButton>
          )}
        </div>
        <div className={styles.container}>
          {image && <img src={URL_IMAGE + image} alt={name} />}
        </div>
      </div>
    </Modal>
  );
};

ModalFoto.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default ModalFoto;
