import React, { useState, useEffect } from 'react';
import './badgeDetail.scss';
import db from 'data.json';
// Constanst
import * as VARIABLES from 'constants/variables'
// Components
import BadgeHero from 'components/BadgeHero/BadgeHero';
import Loader from 'components/Loader/Loader';
import ModalFoto from 'components/ModalFoto/ModalFoto';

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
      <div className="container badge-detail-container">
        <div className="row">
          <div className="col-sm-4 col-12">
            <div className="detail-cover">
              <img src={`${VARIABLES.URL_IMAGE}${data.cover}`} alt={data.title}/>
            </div>
          </div>
          <div className="col-sm-8 col-12">
            <div className="detail-content">
              <p>Temporada: {data.season}</p>
              <p>Autor: {data.author}</p>
              <button onClick={handleOpenModal} className="btn btn-primary">Ver</button>
            </div>
          </div>
        </div>
      </div>
      <ModalFoto isOpen={modalIsOpen} onClose={handleCloseModal} img={`${VARIABLES.URL_IMAGE}${data.cover}`} alt={data.title}/>
    </React.Fragment>
  )
}

export default BadgeDetail
