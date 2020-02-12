import React, { useState, useEffect } from 'react';
import './badgeDetail.scss';

import BadgeHero from '../../components/BadgeHero/BadgeHero';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

function BadgeDetail() {
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(true)
  const [error, setError] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [data, setData] = useState(undefined)

  const fetchData = async (id) => {
    setLoading(true)
    setError(null)
    try {
      // console.log( this.props.match.params.badgeId )
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const handleOpenModal = e => {
    setModalIsOpen(true)
  }

  const handleCloseModal = e => {
    setModalIsOpen(false)
  }

  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <h3>{error}</h3>
  }
  return (
    <React.Fragment>
      <BadgeHero title={data.title}/>
      <div className="container">
        <p>Id: {data.id}</p>
        <p>Autor: {data.author}</p>
        <button onClick={handleOpenModal} className="btn btn-primary">Ver</button>
        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseModal} >
          Menaje de Test
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetail
