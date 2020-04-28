import React from 'react'
import PropTypes from 'prop-types'
import './modalFoto.scss'
// Constanst
import * as VARIABLES from 'constants/variables'

const ModalFoto = props => {
  const { image, name } = props

  return (
    <div className="nb-modal-foto">
      <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="img-header">
                <h5 className="modal-title" id="imageModalLabel">{/*{name}*/}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="img-container">
                {image &&
                  <img src={VARIABLES.URL_IMAGE + image} alt={name} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalFoto.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default ModalFoto
