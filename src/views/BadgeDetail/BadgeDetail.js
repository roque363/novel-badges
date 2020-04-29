import React, { useState, useEffect } from 'react';
import './badgeDetail.scss';
import db from 'data.json';
// Constanst
import * as VARIABLES from 'constants/variables';
// Components
import BadgeHero from 'components/BadgeHero';
import Loader from 'components/Loader';
import ModalFoto from 'components/ModalFoto';

function BadgeDetail(props) {
  const slug = props.match.params.slug;
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [error, setError] = useState(null);

  const [data, setData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const serie = db.series.find((serie) => serie.slug === slug);
      setLoading(false);
      if (isMounted) {
        setData(serie);
        // console.log(serie)
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="badge-detail">
      <BadgeHero title={data.title} />
      <div className="container badge-detail__container">
        <div className="row">
          <div className="col-sm-4 col-12">
            <div
              className="detail-cover"
              data-toggle="modal"
              data-target="#imageModal">
              <img
                src={`${VARIABLES.URL_IMAGE}${data.cover}`}
                alt={data.title}
              />
            </div>
            <button
              type="button"
              className="btn btn-accent"
              data-toggle="modal"
              data-target="#imageModal">
              Ver Imagen
            </button>
          </div>
          <div className="col-sm-8 col-12">
            <div className="detail-content">
              <p>
                <em>{data.sumary}</em>
              </p>
              <h2>Información</h2>
              <p>Id: #{data.id}</p>
              <p>Temporada: {data.season}</p>
              <p>Historia por: {data.story_author}</p>
              <p>Arte por: {data.art_author}</p>
              <p>Publicado en Japón por: {data.published_japan}</p>
            </div>
          </div>
        </div>
      </div>
      <ModalFoto image={data.cover} name={data.title} />
    </div>
  );
}

export default BadgeDetail;
