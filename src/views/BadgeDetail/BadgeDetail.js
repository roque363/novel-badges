import React, { useState, useEffect } from 'react';
import './badgeDetail.scss';
import db from '../../data.json';
// Components
import BadgeHero from '../../components/BadgeHero/BadgeHero';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

function BadgeDetail(props) {
  const id = props.match.params.id
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(true)
  const [error, setError] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [data, setData] = useState(undefined)

  useEffect(()=> {
    fetchData()
    return () => {
      setIsMounted(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const serie = db.series.find(serie => serie.id === id)
      setLoading(false)
      if (isMounted) {
        setData(serie)
        // console.log(serie)
      }
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
