import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './badgeList.scss';
import db from 'data.json';
// Constans
import * as ROUTES from 'constants/routes';
// Hooks
import { useSearchSerie } from 'hooks/useSearchData';
// Components
import BadgeHero from 'components/BadgeHero';
import Loader from 'components/Loader';
import SerieItem from 'components/SerieItem';

const BadgeList = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [data, setData] = useState([]);
  const { query, setQuery, filteredData } = useSearchSerie(data);

  const fetchData = async () => {
    try {
      const data = db;
      setTimeout(() => {
        setData(data.series);
        setLoading(false);
      }, 800);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="badge-list">
      <BadgeHero title="Lista" />
      {!loading ? (
        <div className="badge-list__container">
          <div className="badge-list__container--buttons">
            <Link to={ROUTES.BADGES_NEW} className="btn btn-primary">
              Nueva Serie
            </Link>
          </div>
          <div className="badge-list__container--list">
            <div className="form-group">
              <label>Buscar Serie</label>
              <input
                className="form-control"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            <p>{filteredData.length} series encontradas</p>
            {filteredData.length > 0 ? (
              <ul className="list-unstyled">
                {filteredData.map((serie) => {
                  return (
                    <li key={serie.id}>
                      <SerieItem serie={serie} />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div>
                <h3>No se encontro ninguna serie</h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BadgeList;
