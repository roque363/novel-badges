import React, { useState, useEffect } from 'react';
import './home.scss';
import db from 'data.json';
// Components
import { CardSerie, MainSlider } from 'components';

function Home() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [data, setData] = useState({
    series: [],
  });

  useEffect(() => {
    fetchData();
    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    if (isMounted) {
      setData(db);
    }
    setLoading(false);
  };

  return (
    <div className="home-main">
      <MainSlider />
      <div className="container home-main__content">
        {!loading && (
          <div className="row">
            {data.series.map((serie, index) => {
              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <CardSerie serie={serie} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
